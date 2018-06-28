const express = require('express');
const path = require('path');
const weather = require('./routes/weather');
const paths = require('./routes/paths');
const createError = require('http-errors');
const util = require('util');
const app = express();
const port = process.env.PORT || 5000;

// weather details
app.use(`${paths.WEATHER}`,weather);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get(`${paths.HOME}`, function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


// app.use(function(req, res, next) {
//   debugger;
//   res.redirect(paths.HOME);
//   // next(createError(404));
// });



app.listen(port, () => console.log(`Listening on port ${port}`));