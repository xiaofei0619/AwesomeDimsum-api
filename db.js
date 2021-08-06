require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;
let issueDb;

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to IssueTracker MongoDB at', url);
  issueDb = client.db();
}

async function connectToAdDb() {
  const url = process.env.ADDB_URL;
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to AwesomeDimsum MongoDB at', url);
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb() {
  return db;
}

function getIssueDb() {
  return issueDb;
}

module.exports = {
  connectToDb, connectToAdDb, getNextSequence, getIssueDb, getDb,
};
