//Dependencies
const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8086;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'app/public')));

// Routes
// -----------------

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})