const express = require('express');

const DiscordOauth2 = require("discord-oauth2");
const crypto = require('crypto');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const oauth = new DiscordOauth2({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:4000/callback'
});


const app = express()
const port = 4000

mongoose.connect('mongodb://localhost:27017/bugtracker')
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bug Tracker!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/login', (req, res) => {
    console.log('Hit Login')
    const url = oauth.generateAuthUrl({
        scope: ["identify", "email"],
        state: crypto.randomBytes(16).toString("hex"),
    })
    console.log(url)
    res.redirect(url);
});

app.get('/callback', (req, res) => {
    //res.send('Logged In!')
    oauth.tokenRequest({
        code: req.query.code,
        scope: 'identify email',
        grantType: 'authorization_code'
    }).then(token => {
        console.log(token)
        oauth.getUser(token.access_token).then(user => {
            //req.session.user = user
            console.log(user)
            res.redirect('http://localhost:3000/dashboard')
        })
    }).catch((e) => {
        console.log(e.message);
        console.log(e.response)
    })

})

require('./services/user/user-service')(app);
require('./services/ticket/ticket-service')(app);
require('./services/projects/project-service')(app);