var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

console.log("wait for it");
//writing the percentage
function writeWaitingPercentage(p){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

//The setInterval function is an asynchronous function 
//like setTimeout but it is called every waitInterval mili seconds
//Here we assign this function to interval variable so we can clear 
//it with the clear funtion later
var interval = setInterval(function(){
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercentage(percentWaited);
}, waitInterval);

//This is another asynchronous function and gets
//called after the wait time is finished
setTimeout(function(){
  clearInterval(interval);
  writeWaitingPercentage(100);
  console.log("\ndone");
},waitTime);

writeWaitingPercentage(percentWaited);
