const Quiz = require("./model.js");
const mongoose = require("mongoose");

var Request = require("request");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());


const uri =
    "mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri);


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.post("/new/", function (req, res) {
    Quiz.insertMany(req.body, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new quiz.");
        } else {
            res.status(201).send(JSON.stringify(body));
        }
    });
});
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ error: message });
}