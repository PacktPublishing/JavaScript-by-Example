require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  DarkSky = require('dark-sky'),
  forecast = new DarkSky(process.env.DARK_SKY_KEY),
  NodeGeocoder = require('node-geocoder');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', 3000);

app.get('/getWeather/:latlong', (req, res, next) => {
  const latlong = req.params.latlong.split(',');
  if(latlong.length === 2) {
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      apiKey: process.env.GMAP_KEY,
      formatter: null
    };

    const geocoder = NodeGeocoder(options);
    let city;

    geocoder
      .reverse({lat:latlong[0], lon:latlong[1]})
      .then(function(response) {
        city = response[0].city;
      })
      .catch(function(err) {
        res.status(500).json({});
        next();
      });

    forecast
      .latitude(latlong[0])
      .longitude(latlong[1])
      .exclude('minutely,hourly,daily,alerts,flags')
      .get()
      .then(response => {
        response.city = city;
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json({});
      });
  }
});

const http = require('http').Server(app);
http.listen(app.get('port'), () => {
  console.log(`Express Server Listening on port ${app.get('port')}.`);
});
