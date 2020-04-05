// Synchronous function
var printData = function(data) {
  console.log('got data: ' + data);
};

//myCallback(5);

var usingItNow = function(callback) {
  callback('get it?');
};

usingItNow(printData);


//In this convention, the callback should expect to receive at least one argument, the first argument, as an error


var myErrorCallback = function(err, data) {
  if (err) console.log('this is err ' + err); // Check for the error and throw if it exists.
  else
   console.log('got data: '+data); // Otherwise proceed as usual.
};

myErrorCallback(null, 5);

var usingItNowWithoutError = function(callback) {
  callback(null, 'get it?'); // I dont want to throw an error, so I pass null for the error argument
};

var usingItNowWithError = function(callback) {
  var myError = new Error('My custom error!');
  callback(myError, 'get it?'); // I send my error as the first argument.
};

//usingItNowWithoutError(myErrorCallback);
usingItNowWithError(myErrorCallback);


function numBetween(min, max) {
	return function (cb) {
		return cb(null, rand(min, max));
  };
};

function rand(min, max) {
	if (max === undefined) {
  	max = min;
    min = 0;
  }
	console.log('who');
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log('here');
console.log(function (cb) {
	numBetween(10,20);
});

numBetween(0,5,function(err,result) {
	console.log('waht');
	console.log(result);
	console.log(cb);	
});


console.log(rand(0,9));

var t = numBetween(0,100);

t(function(err,result){
	console.log(result);
});
