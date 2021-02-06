const objConfig = require("../config/config");
const fn = {};

fn.searchPhotos = async function (req, res) {
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

  fn.searchCollections = async function (req, res) {
    try {
      let objCollection = await objConfig.api
        .get("/collections?client_id=" + objConfig.client_id)
        .then((response) => {
          console.log(response.data);
           res.json(response.data);
        });
    } catch (e) {
      console.log("error:", e);
    }
  };


  
  fn.searchUsers = async function (req, res) {
    try {
      let objUsers = await objConfig.api
        .get("/users?client_id=" + objConfig.client_id)
        .then((response) => {
          console.log(response.data);
           res.json(response.data);
        });
    } catch (e) {
      console.log("error:", e);
    }
  };

  module.exports = fn;





