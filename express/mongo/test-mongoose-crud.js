const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const Person = require("./test-mongoose-person-model");

mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json());
app.listen(3000, async () => {
  console.log("server started");
  const mongodbUri = "mongodb+srv://dhrkdms4113:ZZu7aPS4xKxiWu3F@cluster0.1yq1ahy.mongodb.net/";
  mongoose.connect(mongodbUri, { useNewUrlParser: true }).then(console.log("connected db"));
});

app.get("/person", async (req, res) => {
  const person = await Person.find({});
  res.send(person);
});

app.get("/person/:email", async (req, res) => {
  const person = await Person.findOne({ email: req.params.email });
  res.send(person);
});

app.post("/person", async (req, res) => {
  const person = await Person.findByIdAndUpdate({ email: req.params.email }, { $set: req.body }, { new: true });
  console.log(person);
  res.send(person);
});

app.delete("/person/:email", async (req, res) => {
  await Person.deleteMany({ email: req.params.email });
  res.send({ success: true });
});
