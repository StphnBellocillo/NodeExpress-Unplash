const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

// Get all user from unplash
router.get("/:username/portfolio", userController.listCollection)

module.exports = router