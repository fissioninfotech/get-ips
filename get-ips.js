var os = require('os');

var networkInterfaces = os.networkInterfaces();

console.log(JSON.stringify(networkInterfaces));
