const UserServices = require("../services/users.js");


const services = new UserServices();


class UserController {
    async GetUsers(_, res) {
        try {
            const users = await services.GetUsers();
            res.status(200).json({ data: users });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}


module.exports = UserController;