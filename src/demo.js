// import something from another file
var myModule = require('./my-module.js')
console.log(myModule.myText)

// from package.json file
// use npm init to build that file
// use --yes for default package file quickly
var _ = require('lodash')

console.log(_.random(1,10))