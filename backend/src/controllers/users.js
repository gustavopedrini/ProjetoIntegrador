const UserServices = require("../services/users.js");


const services = new UserServices();


class UserController {
    async GetUsers(_, res) {
        try {
            const users = await services.GetUsers();
            res.status(200).json({ content: users });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async GetUserById(req, res) {
        try {
            const user = await services.GetUserById(req.params.id);
            res.status(200).json({ content: user });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async CreateUser(req, res) {
        try {
            const data = {
                cpf: req.body.cpf,
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.CreateUser(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async UpdateUser(req, res) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.UpdateUser(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async DeleteUser(req, res) {
        try {
            const result = await services.DeleteUser(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
};


module.exports = UserController;