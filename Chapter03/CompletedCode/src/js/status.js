import './general';
import apiCall from './services/api/apiCall';

import Chart from 'chart.js';

class Status {
  constructor() {
    this.$experienceTab = document.querySelector('#experienceTab');
    this.$professionTab = document.querySelector('#professionTab');
    this.$ageTab = document.querySelector('#ageTab');

    this.$ageCanvas = document.querySelector('#ageChart');
    this.$professionCanvas = document.querySelector('#professionChart');
    this.$experienceCanvas = document.querySelector('#experienceChart');

    this.$loadingIndicator = document.querySelector('#loadingIndicator');
    this.$tabArea = document.querySelector('#tabArea');
    this.$chartArea = document.querySelector('#chartArea');

    this.$errorMessage = document.querySelector('#loadingError');

    this.statisticData;
    this.loadData();
    this.addEventListeners();
  }

  loadData() {
    apiCall('statistics')
      .then(response => {
        this.statisticData = response;

        this.$loadingIndicator.classList.add('hidden');
        this.$tabArea.classList.remove('hidden');
        this.$chartArea.classList.remove('hidden');

        this.loadExperience();
      })
      .catch(() => {
        this.$loadingIndicator.classList.add('hidden');
        this.$errorMessage.classList.remove('hidden');
      });
  }

  hideCharts() {
    this.$experienceTab.parentElement.classList.remove('active');
    this.$professionTab.parentElement.classList.remove('active');
    this.$ageTab.parentElement.classList.remove('active');
    this.$ageCanvas.classList.add('hidden');
    this.$professionCanvas.classList.add('hidden');
    this.$experienceCanvas.classList.add('hidden');
  }

  addEventListeners() {
    this.$experienceTab.addEventListener('click', this.loadExperience.bind(this));
    this.$professionTab.addEventListener('click', this.loadProfession.bind(this));
    this.$ageTab.addEventListener('click', this.loadAge.bind(this));
  }

  loadExperience(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$experienceCanvas.classList.remove('hidden');
    this.$experienceTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.experience,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            'Beginner',
            'Intermediate',
            'Advanced'
        ]
    };
    new Chart(this.$experienceCanvas,{
      type: 'pie',
      data,
    });
  }

  loadProfession(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$professionCanvas.classList.remove('hidden');
    this.$professionTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.profession,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            'School Students',
            'College Students',
            'Trainees',
            'Employees'
        ]
    };
    new Chart(this.$professionCanvas,{
      type: 'pie',
      data,
    });
  }

  loadAge(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$ageCanvas.classList.remove('hidden');
    this.$ageTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.age,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            '10-15 years',
            '15-20 years',
            '20-25 years'
        ]
    };
    new Chart(this.$ageCanvas,{
      type: 'pie',
      data,
    });
  }

}

window.addEventListener("load", () => {
  new Status();
});
