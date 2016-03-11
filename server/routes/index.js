var express = require("express");
var router = express.Router();
var path = require("path");
var employee = require('../public/assets/scripts/modules/createEmployee');


router.get('/staff', function(req, res){
    res.send(employee());
});

router.get("/*", function(req,res){
    // console.log(req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
