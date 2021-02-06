const objConfig = require("../config/config");
const fn = {};

fn.totals = async function (req, res) {
  try {
    let objPhotos = await objConfig.api
      .get("/stats/total?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.months = async function (req, res) {
  try {
    let objPhotos = await objConfig.api
      .get("/stats/months?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

module.exports = fn;
