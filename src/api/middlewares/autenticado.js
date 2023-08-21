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
