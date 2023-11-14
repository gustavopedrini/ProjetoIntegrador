const Users = require('../models/users.js');


class UserRepository {
    async GetUsers() {
        const users = Users.findAll();
        return users;
    };
}


module.exports = UserRepository;