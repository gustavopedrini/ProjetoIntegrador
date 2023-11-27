const UserRepository = require("../repositories/users.js");


const repositories = new UserRepository();


class UserServices {
    async getUsers() {
        const users = repositories.getUsers();
        return users;
    };


    async getUserById(id, transaction) {
        const user = repositories.getUserById(id, transaction);
        return user;
    };


    async createUser(data, transaction) {
        const user = repositories.createUser(data, transaction);
        return user;
    };


    async updateUser(id, data, transaction) {
        const result = repositories.updateUser(id, data, transaction);
        return result;
    };


    async deleteUser(id, transaction) {
        const result = repositories.deleteUser(id, transaction);
        return result;
    };


    async findUserByEmail(email) {
        return repositories.findUserByEmail(email);
    };
}


module.exports = UserServices;