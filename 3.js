var fs = require("fs");
var params = process.argv[2];
var buff = fs.readFileSync(params);
console.log(buff.toString().split("\n").length);