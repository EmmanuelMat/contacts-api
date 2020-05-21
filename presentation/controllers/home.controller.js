const express = require('express');
const route =  express();

route.get('/', (req, res) => {
    res.send(('Contacts APi'));
})

module.exports = route;