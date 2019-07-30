const fullName = require("./other.js");
const chalk = require('chalk');
const validator = require('validator');
// import validator from 'validator';
// import fullName from './other.js';

// console.log("Fullname : " + fullName("Katleho", "Khanye"));
console.log(validator.isEmail("kakhanye@gmail.com"));
console.log(chalk.bold.green.inverse("Is it successful?"));