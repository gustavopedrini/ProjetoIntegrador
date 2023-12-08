const express = require("express");

const CitizenController = require("../controllers/citizens.js");
const authMiddleware = require("../middlewares/auth.js");

const controller = new CitizenController();
const router = express.Router();

router.get('/', authMiddleware([0, 1, 2, 3]), controller.getCitizens);
router.get('/:id', authMiddleware([0, 1, 2, 3]), controller.getCitizenById);
router.post('/', controller.createCitizen);
router.put('/:id', authMiddleware([0]), controller.updateCitizen);
router.delete('/:id', authMiddleware([0]), controller.deleteCitizen);


module.exports = router;