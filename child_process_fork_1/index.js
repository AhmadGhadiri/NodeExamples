let app     = require('express')();
let server  = require('http').Server(app);
let io      = require('socket.io')(server);
let fork    = require('child_process').fork;

server.listen(8000);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('start_child', function (count) {
        let num = count.count;
        start_child(num);
    });

    //this is hard coded just for testing
    socket.on('stop_child', function (count) {
        let num = count.count;
        child[num].kill();
    });
});

function start_child(num) {
    child[num] = fork('./child_script.js');

    //conditional logic to either run
    //start_child() again or let it end
}