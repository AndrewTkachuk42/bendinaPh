const express = require('express');

const app = express();

app.use('/style', express.static('style'));

app.get('/' || '/home', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);