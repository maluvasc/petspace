const database = require('../models');

//CRUD para tutores secundários

class TutorController {
   static async pegaTodosOsTutores(req, res) {
        try {
            const todosOsTutores = await database.TutorSecundario.findAll();
            return res.status(200).json(todosOsTutores);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmTutor(req, res) {
        const { id } = req.params;
        try {
            const tutor = await database.TutorSecundario.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(tutor);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async criaTutor(req, res) {
        const novoTutor = req.body;
        try {
            const tutor = await database.TutorSecundario.create(novoTutor);
            return res.status(200).json(tutor);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async atualizaTutor(req, res) {
        const tutor = req.body;
        const { id } = req.params;
        try {
            const tutorAtualizado = await database.TutorSecundario.update(tutor, 
                { where: { id: Number(id) }});
            return res.status(200).json("Tutor atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaTutor(req, res) {
        const {id} = req.params;
        try {
            const tutor = await database.TutorSecundario.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("Tutor deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = TutorController;