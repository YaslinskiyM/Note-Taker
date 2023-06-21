const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

const routes = require('./routes');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

// routes to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`) //to start the server
);
