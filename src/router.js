const express = require("express");
const router = express.Router();
const DashboardController = require("./controller/DashboardController");

router.get("/", DashboardController.index);
router.get("/redirect/:midia", DashboardController.githubRedirect);

module.exports = router;
