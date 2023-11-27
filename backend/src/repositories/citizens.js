const Citizens = require("../models/citizens.js");


class CitizenRepository {
    async getCitizens() {
        const citizens = await Citizens.findAll();

        return citizens;
    };


    async getCitizenById(id, transaction) {
        const citizen = await Citizens.findOne(
            { where: { id } },
            { transaction }
        );

        return citizen;
    };


    async createCitizen(data, transaction) {
        const citizen = await Citizens.create(
            {
                id_user: data.id_user,
                photo: data.photo,
                description: data.description,
                // created_at: new Date()
            },
            { transaction }
        );

        return citizen;
    };


    async updateCitizen(id, data, transaction) {
        Citizens.update(
            {
                photo: data.photo,
                description: data.description,
                // updated_at: new Date()
            },
            { where: { id } },
            { transaction }
        );
    };


    async deleteCitizen(id, transaction) {
        Citizens.destroy(
            { where: { id } },
            { transaction }
        );
    };
};


module.exports = CitizenRepository;