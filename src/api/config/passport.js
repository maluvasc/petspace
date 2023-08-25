//validação de requisitos para login

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Funcionarios = require("../models/funcionarios");

passport.use(new LocalStrategy({
    usernameField: "login",
    passwordField: "senha"
}, async (login, senha, done) => {
    try {
        const funcionarios = await Funcionarios.findOne({ where: { login : login} });

        if (!funcionarios) {
            return done(null, false, { message: "Login não encontrado" });
        }
        
        const isValidPassword = await funcionarios.validPassword(senha);

        if(!isValidPassword) {
            return done(null, false, { message: "Senha incorreta" });
        }

        return done(null, funcionarios, { message: "Login efetuado com sucesso" });
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((funcionarios, done) => {    
    done(null, funcionarios.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const funcionarios = await Funcionarios.findByPk(id);
        done(null, funcionarios);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;