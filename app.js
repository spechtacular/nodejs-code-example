/**
 *
 *
 */


global.global_app_directory = __dirname;

// packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gc = require('./config/global_constants');
const tu = require ('./config/temperature_units');
const vu = require ('./config/volume_units');


/**************************************************************
 *
 * app initialization
 *
 **************************************************************/

const app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser.json({type: ['application/json', 'application/csp-report']}));

app.use(bodyParser.urlencoded({extended: true }));

/* home page */
app.get('/', (req, res) => {
    console.log("headers:"+console.log(req.headers) + "\n\n\n");
    res.status(200).render('index', {
        maxConversions: gc.maxConversions,
        tempUnits: tu.getUnits(),
        volUnits: vu.getUnits()
    });
});

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
        return res.status(500).render('conversion500', {
            errorMessage: 'uncaught conversion server error'
        });
});


module.exports = app;
