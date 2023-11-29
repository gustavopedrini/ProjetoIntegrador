const Users = require("../models/users.js");
const DataEncrypter = require("../utilities/encrypter.js");

const encrypter = new DataEncrypter();


class UserRepository {
    async getUsers() {
        const users = await Users.findAll();

        return users;
    };


    async getUserById(id, transaction) {
        const user = await Users.findOne(
            { where: { id } },
            { transaction }
        );

        return user;
    };


    async createUser(data, transaction) {
        const hashedPassword = await encrypter.hashPassword(data.password);

        // console.log("role: " + data.role)
        // console.log("name: " + data.name)
        // console.log("cpf: " + data.cpf)
        // console.log("email: " + data.email)
        // console.log("password: " + hashedPassword)

        const user = await Users.create(
            {
                role: data.role,
                name: data.name,
                cpf: data.cpf,
                email: data.email,
                password: hashedPassword,
                created_at: new Date()
            },
            { transaction }
        );

        return user;
    };


    async updateUser(id, data, transaction) {
        const hashedPassword = await encrypter.hashPassword(data.password);

        Users.update(
            {
                cpf: data.cpf,
                email: data.email,
                password: hashedPassword,
                updated_at: new Date()
            },
            { where: { id } },
            { transaction }
        );
    };


    async deleteUser(id, transaction) {
        Users.destroy(
            { where: { id } },
            { transaction }
        );
    };


    async findUserByEmail(email) {
        return Users.findOne({
            where: {
                email: email
            }
        });
    };
};


module.exports = UserRepository;