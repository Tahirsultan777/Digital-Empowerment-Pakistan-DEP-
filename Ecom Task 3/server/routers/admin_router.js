const express = require("express");
const adminControllers = require("../controllers/admin_controller");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin_middleware");

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminControllers.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminControllers.getUsersById);
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminControllers.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById)
router.route('/contacts').get(authMiddleware, adminControllers.getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteContactById)


module.exports = router;