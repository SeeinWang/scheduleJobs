const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const axios = require("axios");
const moment = require('moment');
const { db } = require('../util/firebase');

router.post("/schedule", async(req, res) => {
  const {questId} = req.body;
  try {
    console.log(questId)
  }catch(err){

  }
  res.status(200).json({
    message:'success'
  })
})


module.exports = router;

