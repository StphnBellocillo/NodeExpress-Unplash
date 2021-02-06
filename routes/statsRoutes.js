const express = require("express")
const statsController = require("../controller/statsController")
const router = express.Router()

// Get all search from unplash
router.get("/total", statsController.totals)
router.get("/month", statsController.months)

module.exports = router