
const express = require('express');
var bodyParser = require('body-parser');

app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var bigData = [];

app.get('/community', (req, res) => res.sendFile(__dirname + '/community.html'));

app.get('/', (req, res) => res.sendFile(__dirname + '/Website.html'));

app.get('/fitnessmain', (req, res) => res.sendFile(__dirname + '/fitnessmain.html'));

app.get('/mentalhealth', (req, res) => res.sendFile(__dirname + '/Mentalhealth.html'));

app.get('/nutrition', (req, res) => res.sendFile(__dirname + '/nutrition.html'));

app.get('/aboutus', (req, res) => res.sendFile(__dirname + '/aboutus.html'));

app.get('/detoxplan', (req, res) => res.sendFile(__dirname + '/detoxplan.html'));

app.get('/healthytips', (req, res) => res.sendFile(__dirname + '/healthytips.html'));


app.post('/community', function(req, res){
   var username = req.body.username;
    var usercomment= req.body.usercomment;

    let rawData = fs.readFileSync('public/comments.json');

    let comments = JSON.parse(rawData);
    bigData = comments;
    let newData = JSON.parse(JSON.stringify({name:username, comment:usercomment}));
    bigData.push(newData);
    fs.writeFileSync('public/comments.json', JSON.stringify(bigData));

    res.sendFile(__dirname + '/community.html');
});
app.listen(3000, () => console.log('listening on port 3000!'));
