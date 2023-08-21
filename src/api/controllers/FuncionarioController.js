const database = require('../models');
const FuncionarioService = require('../services/funcionarioService');
const funcionarioService = new FuncionarioService();

//CRUD para funcionários

class FuncionarioController {
   static async pegaTodosOsFuncionarios(req, res) {
        try {
            const todosOsFuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(todosOsFuncionarios);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmFuncionario(req, res) {
        const { id } = req.params;
        try {
            const funcionario = await database.Funcionarios.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(funcionario);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async cadastrar(req, res) {
        const { nome,cpf,login,senha } = req.body;
        try {
            const funcionario = await funcionarioService.cadastrar({ nome,cpf,login,senha });
            res.status(201).send(funcionario);
        } catch (error) {
            res.status(500).send(error.message);
        }
     }
     static async atualizaFuncionario(req, res) {
        const funcionario = req.body;
        const { id } = req.params;
        try {
            const funcionarioAtualizado = await database.Funcionarios.update(funcionario, 
                { where: { id: Number(id) }});
            return res.status(200).json("Funcionário atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaFuncionario(req, res) {
        const {id} = req.params;
        try {
            const funcionario = await database.Funcionarios.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("Funcionario deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = FuncionarioController;