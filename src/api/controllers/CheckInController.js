const database = require('../models');

//CRUD para checkin e checkout

class CheckInController {
   static async pegaTodosOsCheckIns(req, res) {
        try {
            const pegaTodosOsCheckIns = await database.checkin.findAll();
            return res.status(200).json(pegaTodosOsCheckIns);
      } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async pegaUmCheckIn(req, res) {
        const { id } = req.params;
        try {
            const checkin = await database.checkin.findOne(
               {where: { id: Number(id) }}
            );
            return res.status(200).json(checkin);
      } catch (error) {
             return res.status(500).json(error.message);
        }
     }
     static async criaCheckIn(req, res) {
        const novoCheckIn = req.body;
        try {
            const checkin = await database.checkin.create(novoCheckIn);
            return res.status(200).json(checkin);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async atualizaCheckIn(req, res) {
        const checkin = req.body;
        const { id } = req.params;
        try {
            const checkInAtualizado = await database.checkin.update(checkin, 
                { where: { id: Number(id) }});
            return res.status(200).json("CheckIn atualizado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
     static async deletaCheckIn(req, res) {
        const {id} = req.params;
        try {
            const checkin = await database.checkin.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json("CheckIn deletado com sucesso!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }
}

module.exports = CheckInController;