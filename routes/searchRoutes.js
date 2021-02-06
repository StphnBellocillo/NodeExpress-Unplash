const express = require("express")
const searchController = require("../controller/searchController")
const router = express.Router()

// Get all search from unplash
router.get("/photos", searchController.searchPhotos)
router.get("/collections", searchController.searchCollections)
router.get("/users", searchController.searchUsers)

module.exports = router