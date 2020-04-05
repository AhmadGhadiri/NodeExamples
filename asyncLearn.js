async = require("async");

function withCallback(wine, cb) {
    if(wine == 6) {
        return cb(null, 6);
    }
    return cb("wine not equal to six");
}

withCallback("test", function (err, result) {
    console.log("err", err);
    console.log("result", result);
}); 
    
withCallback(6, function (err, result) {
    console.log("err", err);
    console.log("result", result);
}); 

function callingCallback (cb) {
  withCallback(6, cb);
};

async.waterfall([
  /*function(cb) {
    callingCallback(cb);
  },*/
  function(cb) {
    console.log("inside the waterfall");
    console.log("arguments0", arguments);
    withCallback(6, cb);
  },
  function(result, cb) {
    console.log("arguments1", arguments);
    withCallback("test" , cb);
  }], function (err, result) {
    if (err) {
      console.log("got err", err);
    }
    console.log("no err", result);
});
