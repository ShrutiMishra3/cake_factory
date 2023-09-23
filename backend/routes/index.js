var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  next();
});

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("GET / 200 OK")
  res.redirect(301, 'http://ec2-13-235-71-128.ap-south-1.compute.amazonaws.com/')
});

module.exports = router;
