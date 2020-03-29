fs = require('fs');

// read dir sync
data = fs.readdirSync('/Users');
console.log('data:', data);

console.log("this comes after");