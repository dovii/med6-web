const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority';

app.use(express.static("/"));



app.createServer(function (request, response) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'text\plain',
        /** add other headers as per requirement */
    };

    if (request.method === 'OPTIONS') {
        response.writeHead(204, headers);
        response.end();
        return;
    }


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
        const resultsCollection = db.collection('results')


// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(process.env.PORT || 5000,
    () => console.log("Server is running..."));



app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
    //response.send('Working!!!');

    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/', (request, response) => {
  resultsCollection.insertOne(request.body)
    .then(result => {
      response.redirect('/');
      console.log(`New listing created with the following id: ${result.insertedId}`);      
    })
    .catch(error => console.error(error))
})

    })