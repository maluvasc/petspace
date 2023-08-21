const database = require('../models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken'); 
const jsonSecret = require('../config/jsonSecret');

class AuthService {
  async login(dto) {
    const funcionario = await database.Funcionarios.findOne({ 
        attributes : ['id', 'login', 'senha'],
        where: {
            login: dto.login
        }
     });
     
     if(!funcionario) {
        throw new Error('Login inválido');
     }

     const senhaValida = await compare(dto.senha, funcionario.senha);

     if(!senhaValida) {
        throw new Error('Login ou senha inválida');
     }

     const accessToken = sign({
        id: funcionario.id ,
        login: funcionario.login
        }, jsonSecret.secret, {
        expiresIn: '86400' });
        return accessToken;
}
}

module.exports = AuthService;