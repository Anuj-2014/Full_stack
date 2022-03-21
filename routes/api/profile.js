const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

// @route GET api/profile
// @desc Test route
// @acces Public
router.get("/", (req, res) => {
  res.send("Profile Route");
});

module.exports = router;
