require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

// console.log(process.env.CONNECTION_STRING);
// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(
  `mongodb://utkarsh:utkarsh123@ds141641.mlab.com:41641/gql-playlistapp`
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
