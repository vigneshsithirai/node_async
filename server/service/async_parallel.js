const async = require('async');
const fs = require('fs');
const path = require('path');

/**
 * Function to execute all function parallel
 * Run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array.
 */
async.parallel([
    function (callback) {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    function (callback) {
        setTimeout(() => {
            callback(null, 2000);
        }, 2000);
    }, function (callback) {
        let pathLoc = path.join(__dirname, '../../public/uploads/example.json')
        fs.readFile(pathLoc, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, 'File read successfull');
            }
        });
    }
], function (error, results) {
    console.log(error, results);
});

async.parallel({
    functionOne: (callback) => {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    functionTwo: (callback) => {
        setTimeout(() => {
            callback(null, 2000);
        }, 2000);
    },
    functionThree: (callback) => {
        let pathLoc = path.join(__dirname, '../../public/uploads/example.json')
        fs.readFile(pathLoc, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, 'File read successfull');
            }
        });
    }
}, (error, results) => {
    console.log(error, results);
});

async.parallel([
    function (callback) {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    function (callback) {
        setTimeout(() => {
            callback(null, 2000);
        }, 2000);
    },
    async.reflect((callback) => {
        callback('error from thirsd block');
    })
], function (error, results) {
    console.log(error, results);
});