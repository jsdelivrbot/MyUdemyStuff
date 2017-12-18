// common js modules for server side.
const express = require('express');

// generates new express application.
const app = express();

// basically sets up a route at the root
// writes an object out when a get request
// hits root. referred to as a route handler.
app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});

// dynamic port binding for heroku 
// to inject port into our environment.
// if were doing local dev just use 5000.
const PORT = process.env.PORT || 5000;

// so this is actually express telling 
// node to watch for traffic on the port
// not express itself oddly enough.
app.listen(PORT);

// notes for package.json
// for heroku deployment we want to tell 
// it the version of node and npm we want it 
// to use.
// also we need to specify our start script
// so heroku knows what to fire up.