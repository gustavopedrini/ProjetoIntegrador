const Users = require('../models/users.js');


class UserRepository {
    async GetUsers() {
        // const users = Users.findAll();
        const users = "Recebeu a resposta do backend"

        return users;
    };
}


module.exports = UserRepository;