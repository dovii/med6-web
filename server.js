var http = require('http');
const url = require('url');
var qs = require('querystring');
const { MongoClient } = require("mongodb");
// This app uses Kaffeine to keep it alive http://kaffeine.herokuapp.com/
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://sample-user:twsm@wow-web.pi0rs.mongodb.net/wow-survey?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();

var server = http.createServer(function (request, response) {
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


    if (request.method == 'GET') {
        console.log("Get request");
        var queryObject;
        //we request on data so that request on end is called
        request.on('data', function (data) {
        });
        request.on('end', function () {
            queryObject = url.parse(request.url, true).query;
            console.log(queryObject.callback);
            //response.header("Access-Control-Allow-Origin", "*");
        });
    }

    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 10000000)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            //console.log(post.say);
            //console.log(post.to);
            response.writeHead(200, headers);
            response.end("Say: " + post.say + " to: " + post.to);
            run(post.to).catch(console.dir);
        });
    }
});
server.listen(process.env.PORT || 5000);


async function run(data) {
    try {
        const database = client.db("wow-survey");
        const gameData = database.collection("results");
        // create a document to be inserted
        // current timestamp in milliseconds
        // create a query for a session to update
        const query = { "form1Data": JsonData.form1Data };
        const options = {
            // create a document if no documents match the query
            upsert: true,
        };
        const result = await gameData.replaceOne(query, JsonData, options);
        //const result = await gameData.insertOne(JsonData);
      
    } finally {
        console.log('Tried to insert data');
    }
}