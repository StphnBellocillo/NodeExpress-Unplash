const objConfig = require("../config/config");
const fn = {};

fn.listCollection = async function (req, res) {
  try {
    let objListCollection = await objConfig.api
      .get("/collections" + "?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.getACollection = async function (req, res) {
  try {
    let objGetACollection = await objConfig.api
      .get(
        "/collections/" + req.params.id + "?client_id=" + objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.getACollectionPhoto = async function (req, res) {
  try {
    let objGetACollectionPhoto = await objConfig.api
      .get(
        "/collections/" +
          req.params.id +
          "/photos" +
          "?client_id=" +
          objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.listACollectionRelatedCollection = async function (req, res) {
  try {
    let objListACollectionRelatedCollection = await objConfig.api
      .get(
        "/collections/" +
          req.params.id +
          "/related" +
          "?client_id=" +
          objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.createANewCollection = async function (req, res) {
  try {
    let objCreateANewCollection = await objConfig.api
      .post("/collections/" + "?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.deleteACollection = async function (req, res) {
  try {
    let objDeleteACollection = await objConfig.api
      .delete(
        "/collections/" + req.params.id + "?client_id=" + objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.addAPhotoToACollection = async function (req, res) {
  try {
    let objAddAPhotoToACollection = await objConfig.api
      .post(
        "/collections/" +
          req.params.id +
          "/add" +
          "?client_id=" +
          objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.removeAPhotoFromACollection = async function (req, res) {
  try {
    let objRemoveAPhotoFromACollection = await objConfig.api
      .delete(
        "/collections/" +
          req.params.id +
          "/remove" +
          "?client_id=" +
          objConfig.client_id
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

module.exports = fn;
