// create an express app
const express = require("express");
const app = express();

//const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

var MongoClient = require('mongodb').MongoClient, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {

    if (err) throw err;
    console.log("Connected to Database");
    var document = { name: "David", title: "About MongoDB" };

    // insert record
    db.collection('test').insert(document, function (err, records) {
        if (err) throw err;
        console.log("Record added as " + records[0]._id);
    });
});