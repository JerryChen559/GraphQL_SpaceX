const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

//Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // graphiql: uses our client to make queries to our server
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
