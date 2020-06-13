// this is the server side code


const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('Hello! yes I am listening'));
app.use(express.static('public'));
app.use(express.json({
  limit: '1mb'
}));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({
  name: 'IamDfiant',
  status: '🤬'
});
database.insert({
  name: 'this is good',
  status: '🤓'
});


app.post('/api', (request, response) => {
  console.log('I got a request!!  Thanks');
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  console.log(database);
  response.json({
    status: 'YipeekIya !',
    latitude: data.lat,
    longitute: data.lon
  });
});