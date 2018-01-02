var express = require('express');
var router = express.Router();

// Get index
router.get('/', function(req, res){
    res.render("user", {
        user: "user Page",
        route: "user"
    })
});

module.exports = router;
