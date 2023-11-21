const express = require("express");

const UserController = require("../controllers/users.js");
const authMiddleware = require("../middlewares/auth.js");

const controller = new UserController();
const router = express.Router();

router.post('/login', controller.login);
router.get('/', authMiddleware([0]), controller.getUsers);
router.get('/:id', authMiddleware([0]), controller.getUserById);
router.post('/', authMiddleware([0]), controller.createUser);
router.put('/:id', authMiddleware([0]), controller.updateUser);
router.delete('/:id', authMiddleware([0]), controller.deleteUser);


module.exports = router;