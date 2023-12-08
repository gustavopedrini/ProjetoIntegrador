const CitizenRepository = require("../repositories/citizens.js");

const repositories = new CitizenRepository();


class CitizenServices {
    async getCitizens() {
        const citizens = repositories.getCitizens();
        return citizens;
    };


    async getCitizenById(id, transaction) {
        const citizen = repositories.getCitizenById(id, transaction);
        return citizen;
    };


    async createCitizen(data, transaction) {
        const citizen = repositories.createCitizen(data, transaction);
        return citizen;
    };


    async updateCitizen(id, data, transaction) {
        const result = repositories.updateCitizen(id, data, transaction);
        return result;
    };


    async deleteCitizen(id, transaction) {
        const result = repositories.deleteCitizen(id, transaction);
        return result;
    };
}


module.exports = CitizenServices;