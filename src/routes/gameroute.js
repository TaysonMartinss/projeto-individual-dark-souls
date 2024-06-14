var express = require("express");
var router = express.Router();

var gamecontroller = require("../controllers/gamecontroller");

router.post("/registrar", function (req, res){
    gamecontroller.registrar(req, res);
});

module.exports = router;