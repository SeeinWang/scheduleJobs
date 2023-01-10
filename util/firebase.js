var admin = require("firebase-admin");

var serviceAccount = require("../security.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arcadequest-dev-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();
const fv = admin.firestore.FieldValue;
const fp = admin.firestore.FieldPath;
const auth = admin.auth();
const rd = admin.database();

db.settings({ ignoreUndefinedProperties: true })

module.exports = {
  db,
  fv,
  fp,
  auth,
  rd
};