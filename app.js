/**
 *
 *
 */
const tu = require ('./config/temperature_units');
const vu = require ('./config/volume_units');

global.global_app_directory = __dirname;

// packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gc = require('./config/global_constants');



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
    res.status(200).render('index', {
        maxConversions: gc.maxConversions,
        tempUnits: tu.getUnits(),
        volUnits: vu.getUnits(),
        testMessage: "hello"
    });
});

/*  error pages */
app.get('conversion400', (req, res) => {
    const em = req.query.error_message;
    res.status(400).render('conversion400', {
        errorMessage: em
    });
});

app.get('conversion404', (req, res) => {
    const em = req.query.error_message;
    res.status(404).render('conversion404', {
        errorMessage: em
    });
});

app.get('conversion500', (req, res) => {
    const em = req.query.error_message;
    res.status(500).render('conversion500', {
        errorMessage: em
    });
});

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
    //logger.log_request(req, 'error=' + JSON.stringify(err), err.status);
    if (res.headersSent) {
        return next;
    } else if (err.status === 404) {
        return res.status(404).render('conversion404', {
            errorMessage: 'conversion page not found'
        });
    } else {
        return res.status(500).render('conversion500', {
            errorMessage: 'uncaught conversion server error'
        });

    }
});


module.exports = app;
