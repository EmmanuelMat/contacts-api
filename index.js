const express = require('express');
const app =  express();
const home = require('./presentation/controllers/home.controller');
const contacts = require('./presentation/controllers/contacts.controller');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use('/', home);
app.use('/contacts', contacts);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening in port ${port}`));

