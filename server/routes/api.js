//Importing Express library
//const express = require('express');
import express from "express";
//Creating a Router instance
const router = express.Router();

//Creating the route
router.get('/author', (req, res)=>{
    res.json({
        "name": "Brayan",
        "lasname": "Bonilla",
        "twitter": "@BrayanBonilla",
        "job": "CC"
    });
});  //function(req, res){}

//Exporting the router
module.exports = router;