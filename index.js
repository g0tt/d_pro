
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'hogehgoefugafuga',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));
app.use(express.static('dist'));
app.post("/api/timer", (req, res) => {
    req.session.name = "aaa";
    var result = {id: req.session.id, data: req.body.data};
    res.json(result);
    saveResult(result);
});

app.listen(3000);

var saveResult = function(res) {
    var request = require('request');

    var headers = {
        'Content-Type':'application/json'
    };

    var options = {
        url: 'https://script.google.com/macros/s/AKfycbwYdjn8slshLn3yIAo5SAv1Qvx7ul17ws_Q_Zet5F6B2F5QnbY/exec',
        method: 'POST',
        headers: headers,
        json: true,
        form: JSON.stringify(res)
    };

    request(options, function (error, response, body) {
        if (!error) {
            console.log("success");
        } else {
            console.log(response);
        }
    })
}