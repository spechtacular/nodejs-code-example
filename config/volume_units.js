
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
const liquidGallonCI = parseFloat(231.00);
const dryGallonCI = parseFloat(269.00);
const imperialGallonCI = parseFloat(277.00);


// it's easy to express them in cubic feet. One cubic foot is equal to (12 × 12 × 12) = 1,728 cubic inches,
// Therefore, one cubic inch = 1 / 1,728 = 5.8 × 10 −4 cubic feet.

// cubic feet
const liquidGallonCF = parseFloat(0.134);
const dryGallonCF = parseFloat(0.156);
const imperialGallonCF = parseFloat(0.16);

// Conversely, 1 cubic foot equals:
const cfLiquidGallons  = parseFloat(7.48);
const cfDryGallons = parseFloat(6.48);
const cfImperialGallons = parseFloat(6.23);

// tablespoons to gallons
const spoonsToGallon = parseFloat(256.00);


const self = module.exports = {

    convertLitersToTablespoons(liters) {

    },

    convertLitersToCubicInches(liters) {

    },

    convertLitersToCups(liters){

    },

    convertLitersToCubicFeet(liters) {

    },

    convertLitersToGallons(liters) {

    },

    convertTablespoonsToLiters(tablespoons) {

    },

    convertTablespoonsToCubicInches(tablespoons) {

    },

    convertTablespoonsToCups(tablespoons) {

    },

    convertTablespoonsToCubicFeet(tablespoons) {

    },

    convertTablespoonsToGallons(tablespoons) {

    },

    convertCubicInchesToLiters(cubicInches) {

    },

    convertCubicInchesToTablespoons(cubicInches) {

    },

    convertCubicInchesToCups(cubicInches) {

    },

    convertCubicInchesToCubicFeet(cubicInches) {

    },

    convertCubicInchesToGallons(cubicInches) {

    },

    convertCupsToLiters(cups) {

    },

    convertCupsToTablespoons(cups) {

    },

    convertCupsToCubicInches(cups) {

    },

    convertCupsToCubicFeet(cups) {

    },

    convertCupsToGallons(cups) {

    },

    convertCubicFeetToLiters(cubicFeet) {

    },

    convertCubicFeetToTablespoons(cubicFeet) {

    },

    convertCubicFeetToCubicInches(cubicFeet) {

    },

    convertCubicFeetToCups(cubicFeet) {

    },

    convertCubicFeetToGallons(cubicFeet) {

    },

    convertGallonsToLiters(gallons) {

    },

    convertGallonsToTablespoons(gallons) {

    },

    convertGallonsToCubicInches(gallons) {

    },

    convertGallonsToCups(gallons) {

    },

    convertGallonsToCubicFeet(gallons) {

    },

    matchUnits(unit) {
        return units.indexOf(unit);
    },

    lookupConversion(conversion) {
        console.log("inputUnitType:"+conversion.inputUnitType);
        switch (conversion.inputUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.literConversions(conversion);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.tablespoonsConversions(conversion);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.cubicInchesConversions(conversion);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.cupsConversions(conversion);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.cubicFeetConversions(conversion);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.gallonsConversions(conversion);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    gallonsConversions(conversion) {
        console.log("gallonsConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.convertGallonsToLiters(conversion.input);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.convertGallonsToTablespoons(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.convertGallonsToCubicInches(conversion.input);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.convertGallonsToCups(conversion.input);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.convertGallonsToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons = gallons");
                //this.gallonsConversions(conversion);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    cubicFeetConversions(conversion) {
        console.log("cubicFeetConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.convertCubicFeetToLiters(conversion.input);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.convertCubicFeetToTablespoons(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.convertCubicFeetToCubicInches(conversion.input);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.convertCubicFeetToCups(conversion.input);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet = cubic-feet");
                //this.convertCubicFeetToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.convertCubicFeetToGallons(conversion.input);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    cupsConversions(conversion) {
        console.log("cupsConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.convertCupsToLiters(conversion.input);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.convertCupsToTablespoons(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.convertCupsToCubicInches(conversion.input);
                break;
            case units[3]:
                // cups​
                console.log("cups​ = cups");
                //this.convertCupsTo(conversion);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.convertCupsToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.convertCupsToGallons(conversion.input);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    cubicInchesConversions(conversion) {
        console.log("cubicInchesConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.convertCubicInchesToLiters(conversion.input);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.convertCubicInchesToTablespoons(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches = cubic-inches");
                //this.convertCubicInchesTo(conversion);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.convertCubicInchesToCups(conversion.input);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.convertCubicInchesToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.convertCubicInchesToGallons(conversion.input);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    tablespoonsConversions(conversion) {
        console.log("tablespoons​ targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters");
                this.convertTablespoonsToLiters(conversion.input);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​ = tablespoons");
                //this.convertTablespoonsTo(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.convertTablespoonsToCubicInches(conversion.input);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.convertTablespoonsToCups(conversion.input);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.convertTablespoonsToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.convertTablespoonsToGallons(conversion.input);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    literConversions(conversion) {
        console.log("literConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters
                console.log("liters = liters");
                //this.convertLitersTo(conversion);
                break;
            case units[1]:
                // tablespoons​
                console.log("tablespoons​");
                this.convertLitersToTablespoons(conversion.input);
                break;
            case units[2]:
                // cubic-inches
                console.log("cubic-inches");
                this.convertLitersToCubicInches(conversion.input);
                break;
            case units[3]:
                // cups​
                console.log("cups​");
                this.convertLitersToCups(conversion.input);
                break;
            case units[4]:
                // cubic-feet
                console.log("cubic-feet");
                this.convertLitersToCubicFeet(conversion.input);
                break;
            case units[5]:
                // gallons
                console.log("gallons");
                this.convertLitersToGallons(conversion.input);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    }


};
