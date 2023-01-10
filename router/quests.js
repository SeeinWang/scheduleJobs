const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const axios = require("axios");
const moment = require('moment');

router("/schedule", async(req, res) => {
  console.log(req.body);
  res.status(200).json({
    message:'success'
  })
})


module.exports = router;

