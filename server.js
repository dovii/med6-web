// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

// use the express-static middleware
app.use(express.static("/public"));

// define the first route
app.get("/index", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('movies');

    await listDatabases(client);

    await createListing(client,
      {
        name: "Lovely Loft",
        summary: "A charming loft in Paris",
        bedrooms: 1,
        bathrooms: 1
      }
    );

    // Query for a movie that has the title 'Back to the Future'
    const query = { genres: "Comedy", poster: { $exists: true } };
    const cursor = await collection.aggregate([
      { $match: query },
      { $sample: { size: 1 } },
      { $project: 
        {
          title: 1,
          fullplot: 1,
          poster: 1
        }
      }
    ]);

    const result = await client.db("wow-survey").collection("results").insertOne(newListing)

    //const movie = await cursor.next();

    return res.json(result);
  } catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };

  async function createListing(client, newListing) {

    const result = await client.db("wow-survey").collection("results").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);

  }


});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));