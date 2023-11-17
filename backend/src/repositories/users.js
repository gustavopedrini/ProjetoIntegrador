const Users = require("../models/users.js");
const DataEncrypter = require("../utilities/encrypter.js");

const encrypter = new DataEncrypter();


class UserRepository {
    async GetUsers() {
        // const users = await Users.findAll();
        const users = "Recebeu a resposta do backend"

        return users;
    };


    async GetUserById(id, transaction) {
        const user = await Users.findOne(
            { where: { id } },
            { transaction }
        );

        return user;
    };


    async CreateUser(user, transaction) {
        const hashedPassword = await encrypter.HashPassword(data.password);

        const user = await Users.create(
            {
                role: data.role,
                cpf: data.cpf,
                email: data.email,
                password: hashedPassword,
                created_at: new Date()
            },
            { transaction }
        );

        return user;
    };


    async UpdateUser(id, data, transaction) {
        const hashedPassword = await encrypter.HashPassword(data.password);

        Users.update(
            {
                email: data.email,
                password: hashedPassword,
                updated_at: new Date()
            },
            { where: { id } },
            { transaction }
        );
    };


    async DeleteUser(id, transaction) {
        Users.destroy(
            { where: { id } },
            { transaction }
        );
    };
};


module.exports = UserRepository;