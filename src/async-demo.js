fs = require('fs');

function phoneNumber(err, data) {
	console.log('data:', data);
}

fs.readdir('/Users', phoneNumber);

console.log("this comes before");