const mongoose = require('mongoose')
const express = require("express");
const app = express();
//var port = 4000;

const uri = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));


    var conn = mongoose.Collection;
    
    var uploadSchema = new mongoose.Schema({
        name: String,
    });


    var uploadModel = mongoose.model('uploadData', uploadSchema);
    module.exports=uploadModel; 