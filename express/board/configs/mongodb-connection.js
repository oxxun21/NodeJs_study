const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://dhrkdms4113:ZZu7aPS4xKxiWu3F@cluster0.1yq1ahy.mongodb.net/";

module.exports = function (cb) {
  return MongoClient.connect(uri, cb);
};
