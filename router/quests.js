const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const axios = require("axios");
const moment = require('moment');
const { db } = require('../util/firebase');

/* const domain = "http://localhost:5000"; */
const domain = "https://arcadequest-l3pj.onrender.com";

router.post("/schedule", async(req, res) => {
  const {questId} = req.body;
  console.log(`${questId}, receive jobs`)
  try {
    await scheduleQuest(questId);
    console.log(`${questId} schedule successfully`)
    res.status(200).json({
      message:'success'
    })
  }catch(err){
    consle.log(err, 'schedule quest error')
  }
});

const scheduleQuest = async (questId) => {
  console.log(`${questId} sceduled`)
  const questRef = db.collection("creator_quest").doc(questId);
  try {
    const questDoc = await questRef.get();
    const questData = questDoc.data();
    const {startTime} = questData;
    const start = moment(startTime).toDate();
    const endPoint = `${domain}/creatorQuest/start`;
    const requestBody = {
      questId
    }
    const startJob = schedule.scheduleJob(start, async function(){
      console.log(`start job sent for ${questId}`, moment().format())
      try {
        await axios.post(endPoint, requestBody);
      }catch(err){
        console.log(err, 'endQuest error');
      }
     });
  }catch(err){
    console.log(err, 'schedule quest error')
  }
}

const scheduleAllQuest = async () => {
  try {
    const snapshot = await db.collection("creator_quest").where("status", "==", 1).get();
    await Promise.all(snapshot.docs.map(async (doc) => {
      try {
        const questId = doc.id;
        await scheduleQuest(questId);
      }catch(err){
        console.log(err);
      }
    }))
  }catch(err){
    console.log(err, 'schedule jobs error')
  }
}


module.exports = {
  router,
  scheduleAllQuest
}

