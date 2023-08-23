const database = require("../models");
const homeResponse = require("../mappers/paginaHomeMapper");
const Sequelize = require("sequelize");
const cons = require("consolidate");

class HomeController {

	static async GetPetsForHomePage(req, res) {
		try {
			const data = await database.Pets.findAll({
				attributes: [
					["nome", "nome"],
					["habmonta", "photo_url"]
				],
				where: { status: true },
				order: [Sequelize.literal("random()")],
				limit: 5,
			});
			const response = data.map(homeResponse|(data));
			console.log(response);
        } catch(error){
            return res.status(500).json(error.message)
        }
	}
};

module.exports = HomeController;