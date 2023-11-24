class DataValidation {
    isItEmpty = (...data) => {
        data.forEach((data, index) => {
            // Checks if data is null.
            if (data === null) {
                throw new TypeError(`Null, argument at index: ${index} is null`)
            }
            // Checks if data is undefined.
            if (data === undefined) {
                throw new TypeError(`Undefined, argument at index: ${index} is undefined`)
            }
            // Checks if data is a empty string.
            if (typeof data === "string" && data.trim() === "") {
                throw new TypeError(`Empty, argument at index: ${index} is a empty string`)
            }
        });
        return true;
    }


    isCPFValid = (...data) => {
        data.forEach((data, index) => {
            // Remove any non-numeric characters.
            data = data.replace(/\D/g, "");

            // Checks if cpf has 11 digits.
            if (data.length !== 11) {
                throw new TypeError(`Bad input, ${data} is not a valid CPF`)
            }
            // Checks if all digits are numbers.
            for (let i = 0; i < cpf.length; i++) {
                if (isNaN(parseInt(cpf[i]))) {
                    throw new TypeError(`Bad input, ${data} is not a valid CPF`)
                }
            }
        });
        return true;
    }


    isIdValid = (...data) => {
        data.forEach((data, index) => {
            // Checks if id is a number.
            if (isNaN(parseInt(data))) {
                throw new TypeError(`Bad input, ${data} is not a valid id`)
            }
        });
        return true;
    }
}


module.exports = DataValidation;