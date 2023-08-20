const database = require('../models');

//CRUD para registro

class RegistroController {
   static async pegaTodosOsRegistros(req, res) {
        try {
            const todosOsRegistros = await database.RegistroDiario.findAll();
            return res.status(200).json(todosOsPets);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmRegistro(req, res) {
        const { id } = req.params;
        try {
            const registro = await database.RegistroDiario.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(registro);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async criaRegistro(req, res) {
        const novoRegistro = req.body;
        try {
            const registro = await database.RegistroDiario.create(novoFuncionario);
            return res.status(200).json(registro);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async atualizaRegistros(req, res) {
        const registro = req.body;
        const { id } = req.params;
        try {
            const RegistroAtualizado = await database.RegistroDiario.update(registro, 
                { where: { id: Number(id) }});
            return res.status(200).json("Registro atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaRegistro(req, res) {
        const {id} = req.params;
        try {
            const registro = await database.RegistroDiario.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("Registro deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = RegistroController;