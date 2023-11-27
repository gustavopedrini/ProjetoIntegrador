const CitizenServices = require("../services/citizens.js");
const UserServices = require("../services/users.js");

const services = new CitizenServices();
const userServices = new UserServices();


class CitizenController {
    async getCitizens(_, res) {
        try {
            const citizens = await services.getCitizens();
            res.status(200).json({ content: citizens });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async getCitizenById(req, res) {
        try {
            const citizen = await services.getCitizenById(req.params.id);
            res.status(200).json({ content: citizen });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async createCitizen(req, res) {
        try {
            const userData = {
                role: 1,
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

            const result = await services.createCitizen(data);

            res.status(201).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async updateCitizen(req, res) {
        try {
            const data = {
                photo: req.body.photo,
                description: req.body.description
            }

            const result = await services.updateCitizen(req.params.id, data);

            res.status(200).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async deleteCitizen(req, res) {
        try {
            const result = await services.deleteCitizen(req.params.id);
            res.status(200).json({ content: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
};


module.exports = CitizenController;