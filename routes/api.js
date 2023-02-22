//Importing Express library
var express = require('express');
//Creating a Router instance
var router = express.Router();

//Creating the route
router.get('/author', (req, res)=>{
    res.json({
        "name": "Brayan",
        "lasname": "Bonilla",
        "twitter": "@Brayan",
        "job": "CC"
    });
});  //function(req, res){}

//Exporting the router
module.exports = router;