const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://dhrkdms4113:ZZu7aPS4xKxiWu3F@cluster0.1yq1ahy.mongodb.net/";

const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
  try {
    await client.connect();
    console.log("db 접속 성공");
    const collection = client.db("curd").collection("person");
    await collection.insertOne({ name: "andy", age: 30 });
    console.log("문서 추가 성공");
    const documents = await collection.find({ name: "andy" }).toArray();
    console.log("찾은 문서:", documents);
    await collection.updateOne({ name: "andy" }, { $set: { age: 31 } });
    console.log("문서 업데이트 성공");
    const updateDocuments = await collection.find({ name: "andy" }).toArray();
    console.log("갱신된 문서:", updateDocuments);
    // await collection.deleteOne({name: "andy"})
    // console.log("문서 삭제 ");
    await client.close();
  } catch (error) {
    console.error(error);
  }
}

main();
