//Gera um token único para cada usuário, que é usado para autenticar o usuário em cada requisição
//Não é necessário passar o token em todas as requisições, apenas nas que necessitam de autenticação
//O token é gerado no login e é válido por 1 dia
//Não conseguimos fazer funcionar pois o token é gerado mas nunca validado no headers

const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ mensagem: 'Token não informado' });
    };

    const [, tokenValue] = token.split(' ');

    try {
        verify(tokenValue, jsonSecret.secret);
        const { id, login } = await decode(tokenValue);
        req.usuarioId = id;
        req.usuarioLogin = login;
        return next();
    } catch(error){
        res.status(401).send({ mensagem: 'Token inválido' });
    }
}
