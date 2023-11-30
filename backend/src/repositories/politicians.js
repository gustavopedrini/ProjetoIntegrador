const Politicians = require("../models/politicians.js");


class PoliticianRepository {
    async getPoliticians() {
        const politicians = await Politicians.findAll();

        return politicians;
    };


    async getPoliticianById(id, transaction) {
        const politician = await Politicians.findOne(
            { where: { id } },
            { transaction }
        );

        return politician;
    };


    async createPolitician(data, transaction) {
        const politician = await Politicians.create(
            {
                id_user: data.id_user,
                photo: data.photo,
                description: data.description,
                // created_at: new Date()
            },
            { transaction }
        );

        return politician;
    };


    async updatePolitician(id, data, transaction) {
        Politicians.update(
            {
                photo: data.photo,
                description: data.description,
                // updated_at: new Date()
            },
            { where: { id } },
            { transaction }
        );
    };


    async deletePolitician(id, transaction) {
        Politicians.destroy(
            { where: { id } },
            { transaction }
        );
    };
};


module.exports = PoliticianRepository;