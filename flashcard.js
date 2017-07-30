// Requiring our BasicCard constructor
var BasicCard = require('./BasicCard.js');

// Requiring our ClozeCard constructor
var ClozeCard = require('./ClozeCard.js');

// Loading inquirer node package
var inquirer = require('inquirer');

// Loading node fs node package to read and write to log.txt File
var fs = require('fs');

// Store whether user wants to run Basic Card or Cloze Card generator
var cardChoice = process.argv[2];


var basicCard = new BasicCard();
var clozeCard = new ClozeCard();


