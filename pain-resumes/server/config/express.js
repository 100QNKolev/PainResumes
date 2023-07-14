const express = require('express');
const handlebars = require('express-handlebars').create({ extname: 'hbs' });

module.exports = (app) => {
    
    app.use(express.urlencoded({extended: false}));

    app.engine('hbs', handlebars.engine);
    app.set('view engine', 'hbs');

 
};