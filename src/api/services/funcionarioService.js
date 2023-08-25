//serviço de cadastro de funcionário pois precisa de encriptação de senha e de id único

const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class FuncionarioService {
    async cadastrar(dto) {
        const funcionario = await database.Funcionarios.findOne({ where: { login: dto.login } });
            if(funcionario){
                throw new Error('Login já cadastrado!');
            };

            try{

            const senhaHash = await hash(dto.senha, 8);
            const novoFuncionario = await database.Funcionarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                cpf: dto.cpf,
                login: dto.login,
                senha: senhaHash 
            });
            return novoFuncionario;
            }
            catch(error) {
                throw new Error(error.message)
            }
        }
        }

module.exports = FuncionarioService;