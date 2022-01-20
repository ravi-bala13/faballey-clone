require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session')
// require('./passport');

const app = express();


app.use(express.json());
app.use(cookieParser());

const sign = require('./controllers/user.controller');
const login = require('./controllers/login.controller');
const auth = require('./middleweres/auth');

app.use('/signup', sign);
app.use('/login', login);


app.use(cookieSession({
    name: 'jwt',
    keys: ['key1']
}))

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get('/', (req, res) => res.render('/home'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/home', isLoggedIn, (req, res) => {
//     res.render("/home", { name: req.user.displayName, email: req.user.emails[0].value })
// })

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/home');
    }
);

module.exports = app;