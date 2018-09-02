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
// mongoose.connect(
//   `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
//     process.env.DB_HOST
//   }`
// );
// mongoose.connection.once("open", () => {
//   console.log("conneted to database");
// });

// // bind express with graphql
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true
//   })
// );

var router = express.Router();

// Home page route.
router.get("/", function(req, res) {
  res.send("Wiki home page");
});

app.listen(8080, () => {
  console.log("now listening for requests on port 8080");
});
