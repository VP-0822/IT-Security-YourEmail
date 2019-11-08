const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const session = require('express-session');

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");


//express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));


//filter to add session user details in res.locals
app.use(function(req, res, next) {
    if(req.session.user)
    {
        res.locals.user = req.session.user;
    }
    next();
});
//define controller for users
let login = require('./routes/signin');
app.use('/', login);

//define controller for users
let emails = require('./routes/email');
app.use('/emails', emails);

//start server
app.listen(3001, function(){
    console.log('I am listening....');
});