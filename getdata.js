// one day this will be done with firebase or something
var fs = require('fs');
fs.readFile('phrases.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log(array[i]);
    }
});