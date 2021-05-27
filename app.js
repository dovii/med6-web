var http = require('http');
const url = require('url');
var qs = require('querystring');
const { MongoClient } = require("mongodb");
// This app uses Kaffeine to keep it alive http://kaffeine.herokuapp.com/
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Dovile:twsm@wow-web.pi0rs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
        var controlCount;
        var ddaCount;
        var queryObject;
        //we request on data so that request on end is called
        request.on('data', function (data) {
        });
        request.on('end', function () {
            queryObject = url.parse(request.url, true).query;
            console.log(queryObject.callback);
            //response.header("Access-Control-Allow-Origin", "*");
            getControlConditionCount().then(
                controlCount => getDDAConditionCount().then(
                    ddaCount => {
                        if (controlCount > ddaCount) {
                            console.log("Sending response: DDA");
                            var jsonResponse = { "condition": "DDA" };
                            response.write(queryObject.callback + "(" + JSON.stringify(jsonResponse) + ");");
                            response.end();
                        }
                        else {
                            console.log("Sending response: Control");
                            var jsonResponse = { "condition": "Control" };
                            response.write(queryObject.callback + "(" + JSON.stringify(jsonResponse) + ");");
                            response.end();
                        }
                    },
                    err => console.error(`Something went wrong: ${err}`),
                ),
                err => console.error(`Something went wrong: ${err}`),
            );
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

async function getDDAConditionCount() {
    var database = client.db("P6");
    var gameData = database.collection("GameData");
    var query = { "game1Data.condition": "DDA" };
    var count = await gameData.countDocuments(query);
    console.log(`Number of test sessions with the DDA condition: ${count}`);
    return count;
}

async function getControlConditionCount() {
    var database = client.db("P6");
    var gameData = database.collection("GameData");
    var query = { "game1Data.condition": "Control" };
    var count = await gameData.countDocuments(query);
    console.log(`Number of test sessions with Control condition: ${count}`);
    return count;
}

async function run(data) {
    try {
        const database = client.db("P6");
        const gameData = database.collection("GameData");
        // create a document to be inserted
        // current timestamp in milliseconds
        let ts = Date.now();

        let date_ob = new Date(ts);
        let minute = date_ob.getMinutes();
        let hour = date_ob.getHours();
        let day = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();

        // prints date & time in YYYY-MM-DD format
        let date = year + "-" + month + "-" + day + "-" + hour + ":" + minute;
        var JsonData = JSON.parse(data);
        //console.log(JsonData);
        // create a query for a session to update
        const query = { "form1Data": JsonData.form1Data };
        const options = {
            // create a document if no documents match the query
            upsert: true,
        };
        const result = await gameData.replaceOne(query, JsonData, options);
        //const result = await gameData.insertOne(JsonData);
        if (result.modifiedCount === 0 && result.upsertedCount === 0) {
            console.log("No changes made to the collection.");
        } else {
            if (result.matchedCount === 1) {
                console.log("Matched " + result.matchedCount + " documents.");
            }
            if (result.modifiedCount === 1) {
                console.log("Updated one document.");
            }
            if (result.upsertedCount === 1) {
                console.log("Inserted one new document with an _id of " + result.upsertedId._id);
            }
        }
    } finally {
        console.log('Tried to insert data');
    }
}