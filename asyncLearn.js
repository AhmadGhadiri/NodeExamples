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

//
function print1(cb) {
  console.log("1");
  cb();
}
function print2(cb) {
  console.log("2");
  cb();
}
function print3withArg(name, cb) {
  console.log(name);
  cb(null, name);
}
function print4(cb) {
  console.log("args", arguments);
  console.log("4");
  cb();
}

async.series([
  print1,
  print2,
  //because there is an argument, I need to use this way
  function (cb) {
    print3withArg('Ahmad',cb);
  },
  function (cb) {
    console.log("argAfter3", arguments);
    cb();
  },
  function (cb) {
    print3withArg('Ahmad',cb);
  },
  print4
  ], function (err) {
    if(err) {
      console.log("there was an err");
    }
    console.log("no error");
    return;
 });
