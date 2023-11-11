const { MongoClient } = require("mongodb");
const url = "mongodb+srv://dhrkdms4113:ZZu7aPS4xKxiWu3F@cluster0.1yq1ahy.mongodb.net/";
const client = new MongoClient(url);

async function run() {
  await client.connect();
  const adminDB = client.db("test").admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
