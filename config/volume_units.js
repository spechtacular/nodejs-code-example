
const tc = require("./type_check");

const units = [
            "liters​",
            "tablespoons​",
            "cubic-inches",
            "cups​",
            "cubic-feet",
            "gallons"
        ];


// cubic inches
const liquidGallonCI = parseFloat(231.00.toFixed(2));
const dryGallonCI = parseFloat(269.00.toFixed(2));
const imperialGallonCI = parseFloat(277.00.toFixed(2));


// it's easy to express them in cubic feet. One cubic foot is equal to (12 × 12 × 12) = 1,728 cubic inches,
// Therefore, one cubic inch = 1 / 1,728 = 5.8 × 10 −4 cubic feet.

// cubic feet
const liquidGallonCF = parseFloat(0.134.toFixed(2));
const dryGallonCF = parseFloat(0.156.toFixed(2));
const imperialGallonCF = parseFloat(0.16.toFixed(2));

// Conversely, 1 cubic foot equals:
const cfLiquidGallons  = parseFloat(7.48.toFixed(2));
const cfDryGallons = parseFloat(6.48.toFixed(2));
const cfImperialGallons = parseFloat(6.23.toFixed(2));

// tablespoons to gallons
const spoonsToGallon = parseFloat(256.00.toFixed(2));


const self = module.exports = {

    constructor() {

    }


};
