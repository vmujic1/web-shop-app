const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  console.log(adminData.products);
});

module.exports = router;
