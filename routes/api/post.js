const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

// @route GET api/post
// @desc Test route
// @acces Public
router.get("/", (req, res) => {
  res.send("Post Route");
});

module.exports = router;
