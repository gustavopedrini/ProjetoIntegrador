const UserRepository = require("../repositories/users.js");


const repositories = new UserRepository();


class UserServices {
    async GetUsers() {
        const users = repositories.GetUsers();
        return users;
    };
}


module.exports = UserServices;