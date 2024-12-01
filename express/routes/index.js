var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
router.get("/about", (req, res) => {
  res.render("about");
});

router.post("submit", (req, res) => {
  console.log("form Data:", req.body);
  res.send("form submitted sucessfully");
});

module.exports = router;
