const express = require("express")
const photoController = require("../controller/photosController")
const router = express.Router()

//get all photos from unplash
router.get("/listphotos", photoController.listPhotos)
router.get("/:id/getaphoto", photoController.getAPhoto)
router.get("/getarandomphoto", photoController.getARandomPhoto)
router.get("/:id/getaphotostatistic", photoController.getAPhotoStatistic)
router.get("/:id/trackaphotodownload", photoController.trackAPhotoDownload)
router.put("/:id/updateaphoto", photoController.updateAPhoto)
router.post("/:id/likeaphoto", photoController.likeAPhoto)
router.delete("/:id/unlikeAPhoto", photoController.unlikeAPhoto)

module.exports = router