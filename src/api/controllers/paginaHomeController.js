//a ideia seria mandar para o front o nome e a foto do pet, para que o front possa montar a pagina home
//esquecemos de colocar imagem como um atributo do pet, mas iriamos fazer com hábito de monta que era uma ideia
//original não implementada

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