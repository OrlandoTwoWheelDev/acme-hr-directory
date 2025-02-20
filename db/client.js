const { Client } = require('pg');
const client = new Client('postgres://postgres:password@localhost:5432/acme_directory');

module.exports = client;

//do this and the creation of the seed.js first
//then push to GitHub
//ensuring that the first correct portion is saved