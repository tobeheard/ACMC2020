const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3030, () => console.log('hello, welcome to the installation'));
app.use(express.static('public'));
app.use(express.json({
  limit: '1mb'
}));

const database = new Datastore('database.db');
database.loadDatabase();

const allData = [];

app.post('/api', (request, response) => {
  console.log('I got a request!');
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});