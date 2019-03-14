const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const path = require("path");

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

app.use(express.static("public"));

// catch any route that is not "/graphql"
app.get("*", (res, req) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
