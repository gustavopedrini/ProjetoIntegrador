const UserRepository = require("../repositories/users.js");


const repositories = new UserRepository();


class UserServices {
    async GetUsers() {
        const users = repositories.GetUsers();
        return users;
    };


    async CreateUser(data, transaction) {
        const user = repositories.CreateUser(data, transaction);
        return user;
    };


    async GetUserById(id, transaction) {
        const user = repositories.GetUserById(id, transaction);
        return user;
    };


    async UpdateUser(id, data, transaction) {
        const result = repositories.UpdateUser(id, data, transaction);
        return result;
    };


    async DeleteClient(id, transaction) {
        const result = repositories.DeleteClient(id, transaction);
        return result;
    };
}


module.exports = UserServices;