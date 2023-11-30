const express = require("express");

const PoliticianController = require("../controllers/politicians.js");
const authMiddleware = require("../middlewares/auth.js");

const controller = new PoliticianController();
const router = express.Router();

router.get('/', authMiddleware([0, 1, 2, 3]), controller.getPoliticians);
router.get('/:id', authMiddleware([0, 1, 2, 3]), controller.getPoliticianById);
router.post('/', controller.createPolitician);
router.put('/:id', authMiddleware([0]), controller.updatePolitician);
router.delete('/:id', authMiddleware([0]), controller.deletePolitician);


module.exports = router;