// Dependencies
const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');

// If you are testing a Single Page App with an API,
// you could try and load the two libraries like this
// const api = require('api');
// const web = require('web');

const World = function() {
  scope.host = 'https://anephenix.com';
  scope.driver = puppeteer;
  scope.context = {};
  // And then reference them in the rest of your Cucumber code via this
  // scope.api = api;
  // scope.web = web;
};

setWorldConstructor(World);
