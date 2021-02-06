const express = require("express")
const topicsController = require("../controller/topicsController")
const router = express.Router()

// Get all search from unplash
router.get("/", topicsController.listTopics)
router.get("/:id", topicsController.getATopic)
router.get("/:id/photos", topicsController.getATopicPhoto)

module.exports = router