const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());
const objConfig = require("./config/config");

const fn = {};

fn.photoRoutes = require("./routes/photoRoutes");
fn.searchRoutes = require("./routes/searchRoutes")
fn.collectionRoutes = require("./routes/collectionRoutes");
fn.topicsRoutes = require("./routes/topicsRoutes");
fn.statsRoutes = require("./routes/statsRoutes")
fn.userRoutes = require("./routes/userRoutes")


app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.use("/photos", fn.photoRoutes);
app.use("/search", fn.searchRoutes);
app.use("/collections", fn.searchRoutes);
app.use("/topics", fn.topicsRoutes)
app.use("/stats", fn.statsRoutes)
app.use("/users/", fn.userRoutes)


app.listen(5000, () => {
  console.log("Server has started!");
});
