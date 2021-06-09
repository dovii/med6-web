const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();


//const connectionString = 'mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority';
const connectionString = process.env.MONGODB_URI;

//app.use(cors()); //Must be before BodyParser**


app.use(cors({
    credentials: true,
    origin: ['https://wow-survey.herokuapp.com', 'https://www.wow-survey.herokuapp.com', 'http://localhost:3000']
}));

//app.use(express.static("/"));


/*app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
});
/*
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const corsOptions = {
    origin: 'https://wow-survey.herokuapp.com',
}





app.options('*', cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
}); */


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
    //response.sendFile(__dirname + '/index.html');
    response.send('Heroku server is running.');
})

app.post('/', (request, response) => {
  resultsCollection.insertOne(request.body)
    .then(result => {
     console.log(`New document created with the following id: ${result.insertedId}`);
     //console.log(request.body);
    })
    .catch(error => console.error(error))
})

    })