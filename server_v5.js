const express = require('express');
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority")

const surveySchema = {
    title: String,
    content: String
}

const Results = mongoose.model("REsults", surveySchema);


app.get('/', function (req , res) {
    res.sendFile(__dirname + '/index.html');
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})


app.post("/", function(req,res){
    let newResult = new Results({
        content: req.body.content
    });
    newResult.save();

})


app.listen(3000, function(){
    console.log("server is running on 3000")
})