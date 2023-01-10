const express = require('express');
const app = express();
const cors = require("cors");
const quests = require("./router/quests");
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://play.arcadequest.app",
  "https://www.play.arcadequest.app/",
  "https://arcadequest-l3pj.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);


app.use("/quests", quests.router);

quests.scheduleAllQuest();

//PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});