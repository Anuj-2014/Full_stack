const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

// @route GET api/auth
// @desc Test route
// @acces Public
router.get("/", (req, res) => {
  res.send("Auth Route");
});

module.exports = router;
