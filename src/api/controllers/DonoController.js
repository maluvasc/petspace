const database = require('../models');

//CRUD para donos

class DonoController {
   static async pegaTodosOsDonos(req, res) {
        try {
            const todosOsDonos = await database.Donos.findAll();
            return res.status(200).json(todosOsDonos);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmDono(req, res) {
        const { id } = req.params;
        try {
            const dono = await database.Donos.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(dono);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async criaDono(req, res) {
        const novoDono = req.body;
        try {
            const dono = await database.Donos.create(novoDono);
            return res.status(200).json(dono);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async atualizaDono(req, res) {
        const dono = req.body;
        const { id } = req.params;
        try {
            const donoAtualizado = await database.Donos.update(dono, 
                { where: { id: Number(id) }});
            return res.status(200).json("Dono atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaDono(req, res) {
        const {id} = req.params;
        try {
            const dono = await database.Donos.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("Dono deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = DonoController;