const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
let iconSet = ["⭐","🤖","🍉"];
let icon = iconSet[Math.floor(Math.random() * 3)]
res.render('index', { title: `DWPCII-2023A`,icon });
});

router.get('/author', (req, res)=>{
    //Creating a View-Model
    let author = {
        "name": "Brayan",
        "lasname": "Bonilla",
        "twitter": "@Brayan",
        "job": "CC"
    };
    //Sending the view-model
    res.render('author', author);
})

module.exports = router;
