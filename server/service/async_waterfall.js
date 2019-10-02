const async = require('async');
var resultArray = [];

async.waterfall([
    function (callback) {
        callback(null, 'one', 'two');
    },
    function (arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log(arg1, arg2);
        resultArray.push(arg1)
        resultArray.push(arg2)
        callback(null, 'three');
    },
    function (arg1, callback) {
        // arg1 now equals 'three'
        console.log(arg1);
        resultArray.push(arg1)
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
    console.log(err, result, resultArray);
});

// Or, with named functions:
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done'
});
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
}
