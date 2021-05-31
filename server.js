// create an express app
const express = require("express");
const app = express();

var MongoClient = require('mongodb').MongoClient;

//const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://Dovile:<twsm>@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var url = "mongodb://localhost:27017/";

MongoClient.connect(uri, function (err, db) {
  if (err) throw err;
  var dbo = db.db("wow-survey");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("results").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});



//Receive data from JSON POST and insert into MongoDB

var path = require('path');
var MongoClient = require('mongodb').MongoClient
var db;

//Establish Connection
MongoClient.connect(uri, function (err, database) {
  if (err)
    throw err
  else {
    db = database;
    console.log('Connected to MongoDB');
    //Start app only after connection is ready
    app.listen(3000);
  }
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', function (req, res) {
  // Insert JSON straight into MongoDB
  db.collection('wow-survey.results').insert(req.body, function (err, result) {
    if (err)
      res.send('Error');
    else
      res.send('Success');

  });
});


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));