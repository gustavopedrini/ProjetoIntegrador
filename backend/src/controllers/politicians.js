const PoliticianServices = require("../services/politicians.js");
const UserServices = require("../services/users.js");

const services = new PoliticianServices();
const userServices = new UserServices();


class PoliticianController {
    async getPoliticians(_, res) {
        try {
            const politicians = await services.getPoliticians();
            res.status(200).json({ content: politicians });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async getPoliticianById(req, res) {
        try {
            const politician = await services.getPoliticianById(req.params.id);
            res.status(200).json({ content: politician });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async createPolitician(req, res) {
        try {
            const userData = {
                role: 2,
                name: req.body.name,
                cpf: req.body.cpf,
                email: req.body.email,
                password: req.body.password
            }

            const user = await userServices.createUser(userData);

            const data = {
                id_user: user.id,
                photo: req.body.photo,
                description: req.body.description
            }

            const result = await services.createPolitician(data);

            res.status(201).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async updatePolitician(req, res) {
        try {
            const data = {
                photo: req.body.photo,
                description: req.body.description
            }

            const result = await services.updatePolitician(req.params.id, data);

            res.status(200).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async deletePolitician(req, res) {
        try {
            const result = await services.deletePolitician(req.params.id);
            res.status(200).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
};


module.exports = PoliticianController;