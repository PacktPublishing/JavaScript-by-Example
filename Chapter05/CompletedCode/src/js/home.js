import '../css/styles.css';

import Weather from './CustomElements/Weather/Weather';

import 'webcomponents.js';

window.addEventListener('WebComponentsReady', () => {
  customElements.define('x-weather', Weather);
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  function createWeatherElement(className) {
    const $weather = document.createElement('x-weather');
    $weather.setAttribute('latitude', latitude);
    $weather.setAttribute('longitude', longitude);
    $weather.setAttribute('class', className);

    return $weather;
  };

  const $largeContainer = document.querySelector('.large-container');
  const $mediumContainer = document.querySelector('.medium-container');
  const $smallContainer = document.querySelector('.small-container');

  $largeContainer.appendChild(createWeatherElement('large'));
  $mediumContainer.appendChild(createWeatherElement('medium'));
  // $smallContainer.appendChild(createWeatherElement('small'));

  const $small = createWeatherElement('small');
  $smallContainer.appendChild($small);

  setTimeout(() => {
    console.log($small.lat, $small.long);
    $small.lat = 51.5074;
    $small.long = 0.1278;
    console.log($small.lat, $small.long);
  }, 10000);
}

function errorPosition(error) {
  console.error(error);
}
