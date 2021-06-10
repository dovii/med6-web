const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();


//const connectionString = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority';
const connectionString = process.env.MONGODB_URI;


app.use(cors());

app.use(express.static("/"));


const connectionParams = {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
}


MongoClient.connect(connectionString, connectionParams)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('wow-survey')
        const resultsCollection = db.collection('results')


// Place body-parser before CRUD handlers
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(process.env.PORT || 5000,
    () => console.log("Server is running..."));



app.get('/', function (request, response) {
    response.send('Heroku server is running.');
})

app.post('/', (request, response) => {
  resultsCollection.insertOne(request.body)
    .then(result => {
     console.log(`New document created with the following id: ${result.insertedId}`);
     console.log(request.body);
    })
    .catch(error => console.error(error))
})

    })