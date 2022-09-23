const PORT = process.env.PORT || 3001;
const express = require('express');
const htmlpath = require('./Routes/htmlroute')
const notepath = require('./Routes/noteroute');
const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Develop/public'));

// GET Route for homepage
app.use('/api', notepath);
app.use('/', htmlpath);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = express
