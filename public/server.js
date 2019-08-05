
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
'use strict';
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/community.html');


});
app.post('/', (req, res)=>{
   var username = req.body.username;
    var usercomment= req.body.usercomment;
    let comments={comments: {name: username, comment:usercomment}};

    let data = JSON.stringify(comments, null, 2);

    fs.writeFile('comments.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    res.sendFile(__dirname + '/community.html');
})






app.listen(3000, () => console.log('listening on port 3000!'));
