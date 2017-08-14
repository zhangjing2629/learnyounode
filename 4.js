var fs = require("fs");
var params = process.argv[2];
fs.readFile(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});