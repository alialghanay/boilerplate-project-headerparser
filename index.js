// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  console.log();
  console.log();
  console.log();
  res.status(200).json({
    "ipaddress":req.ip,
  "language":req.headers["accept-language"],
  "software":req.headers['user-agent']
  });
})
app.get('*', (req, res) => {
  res.status(404).send('Error (404) page not found!...')
})
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
