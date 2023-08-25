//controller para autenticação de funcionários

const AuthService = require('../services/authService');
const authService = new AuthService();

class AuthController {
    static async login (req, res) {
        const { login, senha } = req.body;
        try{
        const funcionario = await authService.login({login, senha});
        res.status(200).send(funcionario);
        } catch (error) {
        res.status(401).send(error.message);
        }
    }
}

module.exports = AuthController;