/**
 *
 *
 */

//const vu = require('config/volume_units');
const tu = require ('./config/temperature_units');
const cookieParser = require('cookie-parser');


global.global_app_directory = __dirname;

// packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// helmet sets headers, it does not check them
const helmet = require('helmet');
const feature_policy = require('feature-policy');


// global constants
const gc = require('./config/global_constants');
// application packages


/**************************************************************
 *
 * app initialization
 *
 **************************************************************

logger.log_event({
    apiVersion: gc.apiVersion,
    environment: process.env.NODE_ENV,
    redis_prefix: process.env.REDIS_PREFIX
},'000');
 */



/**************************************************************
 *
 * start event loop
 *
 **************************************************************/

const app = express();

app.use(cors({
    exposedHeaders: ['Content-Length'],
    credentials: true,
    origin(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (gc.allowed_origins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from origin ' + origin;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');

app.use(bodyParser.json({type: ['application/json', 'application/csp-report']}));


app.use(bodyParser.urlencoded({extended: false }));
app.set('trust_proxy', 1);


// initialize sessions using redis store
if (process.env.NODE_ENV === 'production') {

} else if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'test') {

} else if (process.env.NODE_ENV === 'local') {

} else {

}




/* home page is the news login page */
app.get('/', (req, res) => {
    res.status(200).render('pages/loginNews');
});

// implement Referrer policy
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// implement frameguard policy
app.use(helmet({frameguard: "sameorigin"}));

// implement feature-policy
app.use(feature_policy({
    features: {
        fullscreen: ["'self'"],
        vibrate: ["'none'"],
        payment: ["'none'"]
    }
}));


/**
 * Implement CSP
 */
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'",'*.verity.org','mediastream:'],
        frameAncestors: ["'self'"],
        scriptSrc: ["'self'",'*.verity.org', "'unsafe-inline'", "'unsafe-eval'"],
        fontSrc: ["'self'",'*.verity.org', '*.googleapis.com', '*.bootstrapcdn.com', '*.gstatic.com'],
        imgSrc: ["'self'",'data:'],
        styleSrc: ["'self'",'*.verity.org', "'unsafe-inline'", "'unsafe-eval'", '*.bootstrapcdn.com', '*.datatables.net', '*.googleapis.com', '*.gstatic.com'],
        reportUri: '/report-violation'
    },

    // This module will detect common mistakes in your directives and throw errors
    // if it finds any. To disable this, enable "loose mode".
    loose: false,

    // Set to true if you only want browsers to report errors, not block them.
    // You may also set this to a function(req, res) in order to decide dynamically
    // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
    reportOnly: false,

    // Set to true if you want to blindly set all headers: Content-Security-Policy,
    // X-WebKit-CSP, and X-Content-Security-Policy.
    setAllHeaders: false,

    // Set to true if you want to disable CSP on Android where it can be buggy.
    disableAndroid: true,

    // Set to false if you want to completely disable any user-agent sniffing.
    // This may make the headers less compatible but it will be much faster.
    // This defaults to `true`.
    browserSniff: true
}));

app.post('/report-violation', (req, res) => {
    if (req.body) {
        //logger.log_request(req, ' CSP Violation='+JSON.stringify(req.body), '500');
    } else {
        //logger.log_request(req, ' CSP Violation= No data received',  '500');
    }
    res.status(200).end();
});


/* admin login page */
app.get('/admin', (req, res) => {
    res.status(200).render('pages/loginAdmin');
});


/*  admin related errors */
app.get('/400admin', (req, res) => {
    const em = req.query.error_message;
    res.status(400).render('pages/admin/400admin', {
        error_message: em
    });
});

app.get('/401admin', (req, res) => {
    res.status(401).render('pages/admin/401admin');
});

app.get('/403admin', (req, res) => {
    res.status(403).render('pages/admin/403admin');
});

app.get('/404admin', (req, res) => {
    const em = req.query.error_message;
    res.status(404).render('pages/admin/404admin', {
        error_message: em
    });
});

app.get('/500admin', (req, res) => {
    const em = req.query.error_message;
    res.status(500).render('pages/admin/500admin', {
        error_message: em
    });
});


/* web logout landing page */
app.get('/logout', (req, res) => {
    res.status(200).render('pages/logout');
});


Temperature_units.convertCelsiusToFahrenheit();

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
    //logger.log_request(req, 'error=' + JSON.stringify(err), err.status);
    if (res.headersSent) {
        return next;
    } else if (err.status === 404) {
        return res.status(404).json({message: 'page not found'});
    } else {
        return res.status(500).json({message: 'server error'});
    }
});


module.exports = app;
