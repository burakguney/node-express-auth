var express = require('express');
var indexService = require('../services/indexService');
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    var response = await indexService.home();
    res.render("index", { message: response });
  } catch (error) {
    next();
  }
});

router.get("/admin", async (req, res, next) => {
  try {
    var response = await indexService.admin();
    res.render("admin", { message: response });
  } catch (error) {
    next();
  }
});

module.exports = router;
