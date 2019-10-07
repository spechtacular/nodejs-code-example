const gc = require("./global_constants");
const tc = require("./conversion");

const units = [
            "liters​",
            "tablespoons​",
            "cubic-inches",
            "cups​",
            "cubic-feet",
            "gallons"
        ];


// liters
const literCup = 4.226753;
const literGal = 0.264172;
const literCI = 61.023744;
const literCF = 0.035315;
const literTbls = 67.628045;

// cups
const cupsLiter = 0.236588;
const cupsGal = 0.0625;
const cupsTbls = 16.0;
const cupsCI = 14.4375;
const cupsCF = 0.008355;


// cubic-inches
const ciLiter = 0.016387;
const ciTbls = 1.108225;
const ciGal = 0.004329;
const ciCup = 0.069264;
const ciCF = 0.000579;

// cubic-feet
const cfLiter = 28.316846;
const cfGal = 7.480519;
const cfCI = 1728.0;
const cfCup = 119.688309;
const cfTbls = 1915.012947;

// tablespoons
const tblsCI =  0.902344;
const tblsCF = 0.000522;
const tblsLiter = 0.014787;
const tblsGal = 0.003906;
const tblsCup = 0.0625;

// gallons
const galLiter = 3.785412;
const galCup = 16.0;
const galCI = 231.0;
const galCF = 0.133681;
const galTbls = 256.0;

const volume_units = {

    convertLitersToTablespoons(liters) {
        return parseFloat((liters * literTbls).toFixed(1));
    },

    convertLitersToCubicInches(liters) {
        return parseFloat((liters * literCI).toFixed(1));
    },

    convertLitersToCups(liters){
        return parseFloat((liters * literCup).toFixed(1));
    },

    convertLitersToCubicFeet(liters) {
        return parseFloat((liters * literCF).toFixed(1));

    },

    convertLitersToGallons(liters) {
        return parseFloat((liters * literGal).toFixed(1));
    },

    convertTablespoonsToLiters(tablespoons) {
        return parseFloat((tablespoons * tblsLiter).toFixed(1));
    },

    convertTablespoonsToCubicInches(tablespoons) {
        return parseFloat((tablespoons * tblsCI).toFixed(1));
    },

    convertTablespoonsToCups(tablespoons) {
        return parseFloat((tablespoons * tblsCup).toFixed(1));
    },

    convertTablespoonsToCubicFeet(tablespoons) {
        return parseFloat((tablespoons * tblsCF).toFixed(1));
    },

    convertTablespoonsToGallons(tablespoons) {
        return parseFloat((tablespoons * tblsGal).toFixed(1));
    },

    convertCubicInchesToLiters(cubicInches) {
        return parseFloat((cubicInches * ciLiter).toFixed(1));
    },

    convertCubicInchesToTablespoons(cubicInches) {
        return parseFloat((cubicInches * ciTbls).toFixed(1));
    },

    convertCubicInchesToCups(cubicInches) {
        return parseFloat((cubicInches * ciCup).toFixed(1));
    },

    convertCubicInchesToCubicFeet(cubicInches) {
        return parseFloat((cubicInches * ciCF).toFixed(1));
    },

    convertCubicInchesToGallons(cubicInches) {
        return parseFloat((cubicInches * ciGal).toFixed(1));
    },

    convertCupsToLiters(cups) {
        return parseFloat((cups * cupsLiter).toFixed(1));
    },

    convertCupsToTablespoons(cups) {
        return parseFloat((cups * cupsTbls).toFixed(1));
    },

    convertCupsToCubicInches(cups) {
        return parseFloat((cups * cupsCI).toFixed(1));
    },

    convertCupsToCubicFeet(cups) {
        return parseFloat((cups * cupsCF).toFixed(1));
    },

    convertCupsToGallons(cups) {
        return parseFloat((cups * cupsGal).toFixed(1));
    },

    convertCubicFeetToLiters(cubicFeet) {
        return parseFloat((cubicFeet * cfLiter).toFixed(1));
    },

    convertCubicFeetToTablespoons(cubicFeet) {
        return parseFloat((cubicFeet * cfTbls).toFixed(1));
    },

    convertCubicFeetToCubicInches(cubicFeet) {
        return parseFloat((cubicFeet * cfCI).toFixed(1));
    },

    convertCubicFeetToCups(cubicFeet) {
        return parseFloat((cubicFeet * cfCup).toFixed(1));
    },

    convertCubicFeetToGallons(cubicFeet) {
        return parseFloat((cubicFeet * cfGal).toFixed(1));
    },

    convertGallonsToLiters(gallons) {
        return parseFloat((gallons * galLiter).toFixed(1));
    },

    convertGallonsToTablespoons(gallons) {
        return parseFloat((gallons * galTbls).toFixed(1));
    },

    convertGallonsToCubicInches(gallons) {
        return parseFloat((gallons * galCI).toFixed(1));
    },

    convertGallonsToCups(gallons) {
        return parseFloat((gallons * galCup).toFixed(1));
    },

    convertGallonsToCubicFeet(gallons) {
        return parseFloat((gallons * galCF).toFixed(1));
    },

    getUnits() {
        return units;
    },

    matchUnits(unit) {
        return units.indexOf(unit);
    },

    lookupConversion(conversion) {
        switch (conversion.inputUnitType) {
            case units[0]:
                // liters
                this.literConversions(conversion);
                break;
            case units[1]:
                // tablespoons​
                this.tablespoonsConversions(conversion);
                break;
            case units[2]:
                // cubic-inches
                this.cubicInchesConversions(conversion);
                break;
            case units[3]:
                // cups​
                this.cupsConversions(conversion);
                break;
            case units[4]:
                // cubic-feet
                this.cubicFeetConversions(conversion);
                break;
            case units[5]:
                // gallons
                this.gallonsConversions(conversion);
                break;
            default:
                console.log("invalid volume inputUnitType recieved:"+conversion.inputUnitType);
                conversion.output = gc.invalidString;
                break;
        }
    },

    gallonsConversions(conversion) {
        let cnvInput;
        switch (conversion.targetUnitType) {
            case units[0]:
                // gallons 2 liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertGallonsToLiters(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // gallons 2 tablespoons​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertGallonsToTablespoons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // gallons 2 cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertGallonsToCubicInches(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // gallons 2 cups​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertGallonsToCups(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[4]:
                // gallons 2 cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertGallonsToCubicFeet(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[5]:
                // gallons = gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,cnvInput)
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType recevied by gallons");
                conversion.output = gc.invalidString;
                break;
        }
    },

    cubicFeetConversions(conversion) {
        let cnvInput;
        switch (conversion.targetUnitType) {
            case units[0]:
                // cubic-feet 2 liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicFeetToLiters(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // cubic-feet 2 tablespoons​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicFeetToTablespoons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // cubic-feet 2 cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicFeetToCubicInches(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // cubic-feet 2 cups​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicFeetToCups(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[4]:
                // cubic-feet = cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[5]:
                // cubic-feet 2 gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicFeetToGallons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by cubic-feet");
                conversion.output = gc.invalidString;
                break;
        }
    },

    cupsConversions(conversion) {
        let cnvInput;
        switch (conversion.targetUnitType) {
            case units[0]:
                // cups 2 liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCupsToLiters(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // cups 2 tablespoons​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCupsToTablespoons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // cups 2 cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCupsToCubicInches(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // cups​ = cups
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[4]:
                // cups 2 cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCupsToCubicFeet(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[5]:
                // cups 2 gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCupsToGallons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by cups");
                conversion.output = gc.invalidString;
                break;
        }
    },

    cubicInchesConversions(conversion) {
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // cubic-inches 2 liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicInchesToLiters(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // cubic-inches 2 tablespoons​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicInchesToTablespoons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // cubic-inches = cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[3]:
                // cubic-inches 2 cups​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicInchesToCups(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[4]:
                // cubic-inches 2 cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicInchesToCubicFeet(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[5]:
                // cubic-inches 2 gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertCubicInchesToGallons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by cubic-inches");
                conversion.output = gc.invalidString;
                break;
        }
    },

    tablespoonsConversions(conversion) {
        let cnvInput;
        switch (conversion.targetUnitType) {
            case units[0]:
                // tablespoons 2 liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertTablespoonsToLiters(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // tablespoons = tablespoons​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[2]:
                // tablespoons 2 cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertTablespoonsToCubicInches(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // tablespoons 2 cups​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertTablespoonsToCups(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[4]:
                // tablespoons 2 cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertTablespoonsToCubicFeet(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[5]:
                // tablespoons 2 gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertTablespoonsToGallons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by tablespoons");
                conversion.output = gc.invalidString;
                break;
        }
    },

    literConversions(conversion) {
        let cnvInput;
        switch (conversion.targetUnitType) {
            case units[0]:
                // liters = liters
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[1]:
                // liters 2 tablespoons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertLitersToTablespoons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // liters 2 cubic-inches
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertLitersToCubicInches(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // liters 2 cups​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertLitersToCups(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[4]:
                // liters 2 cubic-feet
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertLitersToCubicFeet(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[5]:
                // liters 2 gallons
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,
                        this.convertLitersToGallons(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by liters");
                conversion.output = gc.invalidString;
                break;
        }
    }

};

module.exports = volume_units;

