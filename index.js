const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let quizSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: Number,
    },

    question: {
        type: String,
    },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;


var express = require("express");
var Request = require("request");
var app = express();


const uri =
    "mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, connectionParams);


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