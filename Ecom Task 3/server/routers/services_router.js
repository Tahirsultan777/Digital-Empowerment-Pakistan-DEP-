const express = require("express");
const { services } = require("../controllers/service_controller.js")
const { search } = require("../controllers/service_controller.js");
const router = express.Router();

router.route("/service").get(services);
router.route("/search").get(search);

module.exports = router; 