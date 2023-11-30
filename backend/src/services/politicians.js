const PoliticianRepository = require("../repositories/politicians.js");

const repositories = new PoliticianRepository();


class PoliticianServices {
    async getPoliticians() {
        const politicians = repositories.getPoliticians();
        return politicians;
    };


    async getPoliticianById(id, transaction) {
        const politician = repositories.getPoliticianById(id, transaction);
        return politician;
    };


    async createPolitician(data, transaction) {
        const politician = repositories.createPolitician(data, transaction);
        return politician;
    };


    async updatePolitician(id, data, transaction) {
        const result = repositories.updatePolitician(id, data, transaction);
        return result;
    };


    async deletePolitician(id, transaction) {
        const result = repositories.deletePolitician(id, transaction);
        return result;
    };
}


module.exports = PoliticianServices;