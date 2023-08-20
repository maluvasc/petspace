const database = require('../models');

//CRUD para pets

class PetController {
   static async pegaTodosOsPets(req, res) {
        try {
            const todosOsPets = await database.Pets.findAll();
            return res.status(200).json(todosOsPets);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmPet(req, res) {
        const { id } = req.params;
        try {
            const pet = await database.Pets.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(pet);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async criaPet(req, res) {
        const novoPet = req.body;
        try {
            const pet = await database.Pets.create(novoPet);
            return res.status(200).json(pet);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async atualizaPet(req, res) {
        const pet = req.body;
        const { id } = req.params;
        try {
            const petAtualizado = await database.Pets.update(pet, 
                { where: { id: Number(id) }});
            return res.status(200).json("Pet atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaPet(req, res) {
        const {id} = req.params;
        try {
            const pet = await database.Pets.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("Pet deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = PetController;