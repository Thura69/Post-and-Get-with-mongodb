const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbConnection = async () => {
    const result = await client.connect();
    const db = result.db("todoList");
    return db.collection("items");
}

module.exports = dbConnection;