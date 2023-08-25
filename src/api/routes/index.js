//rotas da api

const bodyParser = require('body-parser');
const pets = require('./petsRoute');
const donos = require('./donosRoute');
const funcionarios = require('./funcionarioRoute');
const checkins = require('./checkinRoute');
const registros = require('./registroRoute');
const tutores = require('./tutoresRoute');

//rotas das paginas

const login = require('./paginaAuthRoute');
const cadastro = require('./paginaCadastroRoute');
const registroDiario = require('./paginaRegistroRoute');
const home = require('./paginaHomeRoute');
const perfil = require('./paginaPerfilRoute');
const construcao = require('./paginaEmConstrucaoRoute');
const checkinpage = require('./paginaCheckinRoute');

//intermédiário para as rotas para não encher o server.js de rotas

module.exports = app => {
    app.use(bodyParser.json());
    app.use(
        pets,
        donos,
        checkins,
        registros,
        tutores,
        login,
        cadastro,
        registroDiario,
        home,
        perfil,
        construcao,
        checkinpage,
        funcionarios
    );

    
}