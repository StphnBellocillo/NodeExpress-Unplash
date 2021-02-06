const express = require("express")
const collectionController = require("../controller/collectionController")
const router = express.Router()

//get all collections from unplash
router.get("/", collectionController.listCollection)
router.get("/:id", collectionController.getACollection)
router.get("/:id/photo", collectionController.getACollectionPhoto)
router.get("/:id/related", collectionController.listACollectionRelatedCollection)
router.post("/", collectionController.createANewCollection)
router.delete("/:id", collectionController.deleteACollection)
router.post("/:id/add", collectionController.addAPhotoToACollection)
router.post("/:id/remove", collectionController.removeAPhotoFromACollection)

module.exports = router