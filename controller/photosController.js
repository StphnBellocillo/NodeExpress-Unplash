const objConfig = require("../config/config");
const fn = {};

fn.listPhotos = async function (req, res) {
  try {
    let objPhotos = await objConfig.api
      .get("/photos?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
         res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};


fn.getAPhoto = async function (req, res) {
  try {
    return await objConfig.api
      .get("/photos/" + req.params.id + "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.getARandomPhoto = async function (req, res) {
  try {
    return await objConfig.api
      .get("/photos/random" +   "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.getAPhotoStatistic = async function (req, res) {
  try {
    return await objConfig.api
      .get("/photos/" + req.params.id + "/statistic" +  "?client_id=" +objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.trackAPhotoDownload = async function (req, res) {
  try {
    return await objConfig.api
      .get("/photos/" + req.params.id + "/download" +  "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.updateAPhoto = async function (req, res) {
  try {
    return await objConfig.api
      .put("/photos/" + req.params.id +  "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.likeAPhoto = async function (req, res) {
  try {
    return await objConfig.api
      .post("/photos/" + req.params.id + "/like" +  "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.unlikeAPhoto = async function (req, res) {
  try {
    return await objConfig.api
      .delete("/photos/" + req.params.id + "/like" +  "?client_id=" + objConfig.client_id)
      .then((response) => {
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

module.exports = fn;
