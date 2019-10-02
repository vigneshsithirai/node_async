const async = require('async');
const fs = require('fs');
const path = require('path');

async.series([
    (callback) => {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    (callback) => {
        setTimeout(() => {
            callback(null, 2000);
        }, 2000);
    }
], (error, results) => {
    console.log(error, results);
});

async.series({
    one: (callback) => {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    two: (callback) => {
        setTimeout(() => {
            callback(null, 2000)
        }, 2000);
    }
}, (error, results) => {
    console.log(error, results);
});

async.series({
    one: (callback) => {
        setTimeout(() => {
            callback(null, 1000);
        }, 1000);
    },
    two: async.reflect((callback) => {
        let pathLoc = path.join(__dirname, '/public/uploads/example.json');
        fs.readFile(pathLoc, callback);
    }),
    three: (callback) => {
        setTimeout(() => {
            callback(null, 3000);
        }, 3000);
    }
}, (error, results) => {
    console.log(error, results);
});