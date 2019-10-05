/**
 * this is used for standalone command line development and testing
 */

const tc = require( './config/type_check');
const tu = require('./config/temperature_units.js' );
//import vu from './config/temperature_units';
//const vu = require('config/volume_units');

const path = require('path');

// initialize global constants
const global_constants = require('./config/global_constants');


/**************************************************************
 *
 * start event loop
 *
 **************************************************************/

let fahrenheit = '66';
let temp = tc.validateConversionValue(fahrenheit);
if (temp === undefined) {
    process.exit(0);
} else {
    console.log(`before convertFahrenheitToCelsius original fahrenheit:${fahrenheit} cTemp:${temp}`);
    temp = tu.convertFahrenheitToCelsius(temp);
    console.log(`before convertCelsiusToFahrenheit celsius:${temp} `);
    temp = tu.convertCelsiusToFahrenheit(temp);
    console.log(`after convertCelsiusToFahrenheit computed fahrenheit:${temp} `);
    let kelvin = 25;
    temp = tu.convertKelvinToFahrenheit(kelvin);
    console.log(`after convertKelvinToFahrenheit computed fahrenheit:${temp} `);
    let rankine = 76;
    temp = tu.convertRankineToCelsius(rankine);
    console.log(`after convertRankineToCelsius computed celsius:${temp} `);
    temp = tu.convertKelvinToCelsius(kelvin);
    console.log(`after convertKelvinToCelsius computed kelvin:${temp} `);




}



//vu.convertCelsiusToFahrenheit(234);

