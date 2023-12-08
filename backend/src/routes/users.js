const express = require("express");

const UserController = require("../controllers/users.js");
const authMiddleware = require("../middlewares/auth.js");

const controller = new UserController();
const router = express.Router();

router.post('/login', controller.login);
router.get('/', authMiddleware([0, 1, 2, 3]), controller.getUsers);
router.get('/:id', authMiddleware([0, 1, 2, 3]), controller.getUserById);
router.post('/', controller.createUser);
router.put('/:id', authMiddleware([0]), controller.updateUser);
router.delete('/:id', authMiddleware([0]), controller.deleteUser);


module.exports = router;