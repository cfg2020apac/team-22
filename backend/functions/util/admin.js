const admin = require('firebase-admin');

var serviceAccount = require("/Users/timothy/Downloads/jpm-cfgapac2020-firebase-adminsdk-tdifw-f026b7f228.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jpm-cfgapac2020.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };