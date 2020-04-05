async = require('async');

var scenarios = [
            [100, 10, 0],
            [90, 10, 0],
            [85, 10, 0],
            [85, 8, 1],
            [86, 4, 1],
            [80, 2, 2]
        ];


async.mapSeries(scenarios, function (scenario, callback) {
    console.log(scenario[0], scenario[1], scenario[2]);
    callback();
}, function (err, result) {
    if (err) {
      console.log("error happened");
    }
});
