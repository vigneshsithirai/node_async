const async = require('async');
const fs = require('fs');
const path = require('path');

var count = 0;

var fileQueue = async.queue(function (task, callback) {
    task(callback);
}, 2);

//500 MB File
var fileRead = (callback) => {
    let pathLoc = path.join(__dirname, '../../public/uploads/sample.pdf');
    fs.readFile(pathLoc, callback);
    var fileStream = fs.ReadStream
};

fileQueue.push([fileRead, fileRead, fileRead, fileRead], function (err) {
    count = count + 1;
    console.log('finished processing item===>>>>>');
});
