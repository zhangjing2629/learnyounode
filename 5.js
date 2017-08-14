var fs = require("fs");
var path = process.argv[2];
var params = process.argv[3];
var arr = [];

fs.readdir(path, function(err, files) {
    if (err) {
        throw err;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].split(".")[1] == params) {
            arr.push(files[i]);
        }

    }
    console.log(arr);
});