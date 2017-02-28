var path = require('path');

var hello = 'Hello from node js'
var justNode = hello.slice(11);

console.log(hello);
console.log(`This is another one ${justNode}`);


//Current dir
console.log(__dirname);

//Full path to the current file
console.log(__filename);

//Using the path module
console.log(`hello from ${path.basename(__filename)}`);
