//const express = require('express');
import express from "express";
//const router = express.Router();
const {Router} = express;

const router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//module.exports = router;

export default router;
