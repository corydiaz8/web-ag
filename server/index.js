const express = require('express');
const compression = require('compression');
const path = require('path');
const requestGlobal = require('request');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.get('/googlecca0672d18f37dcb.html', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/public', 'googlecca0672d18f37dcb.html'));
});


app.post('/send-contact', function (req, res) {
    const {name, email, phone, company, agencySystem} = req.body;
    const data = JSON.stringify({name, email, phone, company, agencySystem});
    requestGlobal.post({
        url: 'https://hooks.zapier.com/hooks/catch/2990968/gza9q3/',
        form: data,
        }, (error, _response, body) => {
            console.log(error, body);
    });
    res.append('Content-Type', 'text/plain');
    res.status(200).send('success').end();
});

app.post('/add-newsletter-subscription', function (req, res) {
  const body = {
      "properties": [{
              "property": "email",
              "value": req.body.email,
          },
      ],
  };
  requestGlobal.post({
    url: 'https://api.hubapi.com/contacts/v1/contact/?hapikey=47bdc73e-0284-4c6d-9a7b-dac3e55f1259',
    json: body,
  }, function(error, _response, body) {
    console.log(error, body);
  });
  res.status('200').send('sent').end();
});

app.post('/request-pricing', function (req, res) {

    const { firstName, lastName,  workEmail, phoneNumber, companyName, message, agencySystem } = req.body;
    const data = JSON.stringify({ firstName, lastName,  workEmail, phoneNumber, companyName, message, agencySystem });

    requestGlobal.post({
        url: 'https://hooks.zapier.com/hooks/catch/2990968/q7kqqz/',
        json: data,
    }, function(error, _response, body) {
        console.log(error, body);
        res.send(body.status).end();
    });
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
