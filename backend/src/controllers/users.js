const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserServices = require("../services/users.js");
const config = require("../config.js");

const services = new UserServices();


class UserController {
    async getUsers(_, res) {
        try {
            const users = await services.getUsers();
            res.status(200).json({ content: users });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async getUserById(req, res) {
        try {
            const user = await services.getUserById(req.params.id);
            res.status(200).json({ content: user });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async createUser(req, res) {
        try {
            const data = {
                name: req.body.name,
                cpf: req.body.cpf,
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.createUser(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async updateUser(req, res) {
        try {
            const data = {
                name: req.body.name,
                cpf: req.body.cpf,
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.updateUser(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async deleteUser(req, res) {
        try {
            const result = await services.deleteUser(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { dataValues: user } = await services.findUserByEmail(email);

            if (!email || !password) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    cpf: user.cpf,
                    email: user.email,
                    role: user.role
                },
                config.secret,
            )
            return res.status(200).json({ accessToken: token });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };
};


module.exports = UserController;