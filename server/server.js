const express = require('express');
const DiscordStrategy = require('passport-discord').Strategy;
const session = require('express-session')
const passport = require('passport')
const dotenv = require('dotenv');
const crypto = require('crypto');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
<<<<<<< HEAD
const oauth = new DiscordOauth2({
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:4000/callback'
});
=======
>>>>>>> austinlhx-master

const scopes = ['identify', 'email']

const userDao = require('./db/users/user-dao')
const app = express()
const port = 4000

mongoose.connect('mongodb://localhost:27017/bugtracker')
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const SECRET = process.env.SECRET

passport.use(new DiscordStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/callback',
    scope: scopes
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}))

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: crypto.createHash('md5').update(SECRET).digest("hex"),
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuth, (req, res) => {
    res.json(req.user)
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

app.get('/login', passport.authenticate('discord', { scope: scopes }), (req, res) => {
    console.log('redirected to oauth url')
});

<<<<<<< HEAD
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
            res.json(user)
=======
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: 'http://localhost:3000/' }), 
    (req, res) => { 
        const email = req.user.email;
        userDao.findUser(email).then(user => {
            if (user.length == 0){
                res.redirect('http://localhost:3000/register')
            }else{
                console.log(user)
                res.redirect('http://localhost:3000/dashboard')
            }
>>>>>>> 7a1441d4fa8b2b08cef55544651474849653f54f
        })
         } 
);

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/loggedout');
});

app.get('/loggedout', function(req, res){
    res.send('logged out')
})

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login')
}


require('./services/user/user-service')(app, checkAuth);
require('./services/ticket/ticket-service')(app, checkAuth);
require('./services/projects/project-service')(app, checkAuth);