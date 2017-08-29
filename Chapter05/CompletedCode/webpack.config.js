import apiCall from './services/api/apiCall';
import './lib/skycons';

class Weather extends HTMLElement {
  constructor() {
    super();

    this.$shadowRoot = this.attachShadow({mode: 'open'});
    this.$shadowRoot.innerHTML = `
      <style>
      .weather-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        background-color: silver;
        justify-content: space-between;
      }
      .title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .details {
        flex: 2;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .day-icon {
        flex: 1;
        max-height: 100%;
        max-width: 100%;
      }
      .text {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .text-content {
        margin: 0px;
      }
      </style>
      <div class="weather-container">
        <div class="title">
          <h2 id="city">Loading...</h2>
        </div>
        <div class="details">
          <canvas id="dayIcon" class="day-icon"></canvas>
          <div class="text">
            <h2 class="text-content" id="temperature">--</h2>
            <p class="text-content" id="time">--</p>
            <p class="text-content" id="summary">--</p>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.latitude = this.getAttribute('latitude');
    this.longitude = this.getAttribute('longitude');

    this.$icon = this.$shadowRoot.querySelector('#dayIcon');
    this.$city = this.$shadowRoot.querySelector('#city');
    this.$temperature = this.$shadowRoot.querySelector('#temperature');
    this.$summary = this.$shadowRoot.querySelector('#summary');

    this.setWeather();

    this.ticker = setInterval(this.displayTime.bind(this), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.ticker);
  }

  setWeather() {
    if(this.latitude && this.longitude) {
      apiCall(`getWeather/${this.latitude},${this.longitude}`, {}, 'GET')
        .then(response => {

          this.$city.textContent = response.city;
          this.$temperature.textContent = `${response.currently.temperature}° F`;
          this.$summary.textContent = response.currently.summary;

          const skycons = new Skycons({"color": "black"});
          skycons.add(this.$icon, Skycons[response.currently.icon.toUpperCase().replace(/-/g, "_")]);
          skycons.play();
        })
        .catch(console.error);
    }
  }

  displayTime() {
    const date = new Date();
    const displayTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const $time = this.$shadowRoot.querySelector('#time');
    $time.textContent = displayTime;
  }

  static get observedAttributes() { return ['latitude', 'longitude']; }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'latitude' && oldValue !== newValue) {
      this.latitude = newValue;
      this.setWeather();
    }
    if(attr === 'longitude' && oldValue !== newValue) {
      this.longitude = newValue;
      this.setWeather();
    }
  }

  get long() {
    return this.longitude;
  }

  set long(long) {
    this.longitude = long;
    this.setWeather();
  }

  get lat() {
    return this.latitude;
  }

  set lat(lat) {
    this.latitude = lat;
    this.setWeather();
  }
}

export default Weather;
