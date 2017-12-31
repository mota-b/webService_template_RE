var express = require('express');
var router = express.Router();

// Get index
router.get('/', function(req, res){
    res.render("index", {
        user: "Moukhtar",
        route: "index"
    })
});

module.exports = router;
