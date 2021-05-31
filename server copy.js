const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
}


/*MongoClient.connect(connectionString, connectionParams, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
}) */

MongoClient.connect(connectionString, connectionParams)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('wow-survey')
        const quotesCollection = db.collection('results')



// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
    console.log('listening on 3000')
});


app.get('/index', function (request, response) {
    response.sendFile(__dirname + '/index.html');
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (request, response) => {
  quotesCollection.insertOne(request.body)
    .then(result => {
      response.redirect('/')
      
    })
    .catch(error => console.error(error))
})

    })