
function test1 (input, cb) {
  if (input == 10) {
     console.log(input);
    return cb(null, "success");
  }
  return cb ("input wasn't 10");
}


function test2 (input, cb) {
  if (input == 10) {
    console.log(input);
    return cb(null, "success");
  }
  else {
    return cb("input wasn't 10");
  }
}

function test3 (input, cb) {
  if (input == 10) {
    console.log(input);
    return setTimeout(function () {
       cb(null, "success");
    }, 5000);
  }
  return cb("input wasn't 10");
}

function test4 (input, cb) {
  if (input == 10) {
    console.log(input);
    cb (null, "success");
  }
  cb ("input wasn't 10");
}

/*test1(10, function (err, result) {
    console.log(arguments);
    console.log(err);
});
test2(10, function (err, result) {
    console.log(arguments);
    console.log(err);
});*/
test3(10, function (err, result) {
    console.log(arguments);
    console.log(err);
});
/*test4(10, function (err, result) {
    console.log(arguments);
    console.log(err);
});*/
