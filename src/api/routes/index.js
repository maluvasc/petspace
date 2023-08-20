//rotas da api

const bodyParser = require('body-parser');
const pets = require('./petsRoute');
const donos = require('./donosRoute');
const funcionarios = require('./funcionarioRoute');
const checkins = require('./checkinRoute');
const registros = require('./registroRoute');
const tutores = require('./tutoresRoute');
const session = require('express-session');
const passport = require('passport');

//rotas das paginas

const login = require('./paginaAuthRoute');
const cadastro = require('./paginaCadastroRoute');
const registroDiario = require('./paginaRegistroRoute');
const home = require('./paginaHomeRoute');
const perfil = require('./paginaPerfilRoute');
const construcao = require('./paginaEmConstrucaoRoute');
const checkinpage = require('./paginaCheckinRoute');

module.exports = app => {
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));
      
    app.use(passport.initialize());
    app.use(passport.session());
      
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json());
    app.use(
        pets,
        donos,
        funcionarios,
        checkins,
        registros,
        tutores,
        login,
        cadastro,
        registroDiario,
        home,
        perfil,
        construcao,
        checkinpage
    );
}