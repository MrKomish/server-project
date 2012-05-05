
/*
 * GET home page.
 */
var fs=require('fs');
var writeData;
exports.index = function(req, res){

    fs.readFile('test.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    writeData = data;

        writeData++;
        fs.writeFile("test.txt", writeData, function (write, data) {

            res.render('index', { title: 'Express', writeData: writeData});

        });




});



};