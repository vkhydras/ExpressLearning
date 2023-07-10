const nameModule = require('./4-Express-Modules');
const sayHello = require('./5-module2');
const data = require('./6-Alt')
require('./7-Alt2')

console.log(data)
sayHello("Victor");
sayHello(nameModule.name);


