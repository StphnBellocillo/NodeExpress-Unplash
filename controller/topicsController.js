const objConfig = require("../config/config");
const fn = {};

fn.listTopics = async function (req, res) {
  try {
    let objPhotos = await objConfig.api
      .get("/topics?client_id=" + objConfig.client_id)
      .then((response) => {
        console.log(response.data);
         res.json(response.data);
      });
  } catch (e) {
    console.log("error:", e);
  }
};

fn.getATopic = async function (req, res) {
    try {
      let objPhotos = await objConfig.api
        .get("/topics/" + req.params.id + "?client_id=" + objConfig.client_id)
        .then((response) => {
          console.log(response.data);
           res.json(response.data);
        });
    } catch (e) {
      console.log("error:", e);
    }
  };

  fn.getATopicPhoto = async function (req, res) {
    try {
      let objPhotos = await objConfig.api
        .get("/topics/" + req.params.id +  "/photos" + "?client_id=" + objConfig.client_id)
        .then((response) => {
          console.log(response.data);
           res.json(response.data);
        });
    } catch (e) {
      console.log("error:", e);
    }
  };


module.exports = fn;
