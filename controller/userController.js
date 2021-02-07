const objConfig = require("../config/config");
const fn = {};


fn.listCollection = async function (req, res) {
  try {
    let objListCollection = await objConfig.api
      .get("/users/" + req.params.username + "/photos" + "?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

module.exports = fn;
