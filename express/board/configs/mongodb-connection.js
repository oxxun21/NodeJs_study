const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dhrkdms4113:sWaYAt8Lrr1ymZD6@cluster0.1yq1ahy.mongodb.net/";

module.exports = function (cb) {
  return MongoClient.connect(uri, cb);
};
