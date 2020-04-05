function one() {
  return new Promise(resolve => {
    console.log("one");
    resolve();
  });
}

function two() {
  return new Promise(resolve => {
    console.log("two");
    resolve();
  });
}

function three(){
   console.log("three")
}

/**
  function one is called and then as it's callback
  function two gets called and then it calls three;
**/
one().then(() => two()).then(() => three()); //prints one, two, three


function oneCb(cb) {
    console.log("one");
    return cb()
}

function twoCb(cb) {
    console.log("two");
    return cb();
}

oneCb(function () {
  twoCb(function () {
    three();
    return;
  });
  return;
});


