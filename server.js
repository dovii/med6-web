const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient


const connectionString = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority';

//app.use(express.static("/"));

const corsOptions = {
    origin: 'https://wow-survey.herokuapp.com/',
}

app.use(cors()); //Must be before BodyParser**

app.options('*', cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});




/*const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
}); */


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



app.get('/', cors(), function (request, response) {
    //response.sendFile(__dirname + '/index.html');
    response.send('Henlo');

    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/', cors(), (request, response) => {
  console.log(request.body);
  resultsCollection.insertOne(request.body)
    .then(result => {
      //response.redirect('/');
     console.log(`New listing created with the following id: ${result.insertedId}`);
     console.log(request.body);
    })
    .catch(error => console.error(error))
})

    })