const gc = require("./global_constants");
const tc = require("./type_check");

const units = ["Kelvin", "Celsius", "Fahrenheit​", "Rankine"];

const cRatio = parseFloat(9 / 5);
const fRatio = parseFloat(5 / 9);
const fConst = parseFloat(32.00);
const rcConst = parseFloat(491.67);
const kfConst = parseFloat(459.67);
const kConst = parseFloat(273.15);


const temperature_units = {

    convertCelsiusToFahrenheit(celsius) {
        return parseFloat(((celsius * cRatio) + fConst).toFixed(1));
    },

    convertCelsiusToRankine(celsius) {
        return parseFloat(((celsius + kConst) * cRatio).toFixed(1));
    },

    convertCelsiusToKelvin(celsius) {
        return parseFloat(((celsius + kConst)).toFixed(1));
    },

    convertFahrenheitToCelsius(fahrenheit) {
        return parseFloat(((fahrenheit - fConst) * fRatio).toFixed(1));
    },

    convertFahrenheitToKelvin(fahrenheit) {
        return parseFloat(((fahrenheit + kfConst) * fRatio).toFixed(1));
    },

    convertFahrenheitToRankine(fahrenheit) {
        return parseFloat((fahrenheit + kfConst).toFixed(1));
    },

    convertKelvinToCelsius(kelvin) {
        console.log("convertKelvinToCelsius");
        if (kelvin < (0)) {
            console.log('below absolute zero (0 K)');
            return 0.0;
        } else {
            console.log("convertKelvinToCelsius cnv");
            return  parseFloat((kelvin - kConst).toFixed(1));
        }
    },

    convertKelvinToFahrenheit(kelvin) {
        if (kelvin < (0)) {
            console.log('below absolute zero (0 K)');
            return 0.0;
        } else {
            return parseFloat(((kelvin * cRatio) - kfConst).toFixed(1));
        }
    },

    convertKelvinToRankine(kelvin) {
        if (kelvin < (0.0)) {
            console.log('below absolute zero (0 K)');
            return 0.0;
        } else {
            return parseFloat((kelvin * cRatio).toFixed(1));
        }
    },

    convertRankineToCelsius(rankine) {
        return parseFloat(((rankine - rcConst) * fRatio).toFixed(1));
    },

    convertRankineToKelvin(rankine) {
        return parseFloat((rankine * fRatio).toFixed(1));
    },

    convertRankineToFahrenheit(rankine) {
        return parseFloat((rankine - kfConst).toFixed(1));
    },

    getUnits() {
        return units;
    },

    matchUnits(unit) {
        return units.indexOf(unit);
    },

    lookupConversion(conversion) {
        console.log("inputUnitType:"+conversion.inputUnitType);
        switch (conversion.inputUnitType) {
            case units[0]:
                // Kelvin
                console.log("Kelvin");
                this.kelvinConversions(conversion);
                break;
            case units[1]:
                // Celsius
                console.log("Celsius");
                this.celsiusConversions(conversion);
                break;
            case units[2]:
                // Fahrenheit​
                console.log("Fahrenheit​");
                this.fahrenheitConversions(conversion);
                break;
            case units[3]:
                // Rankine
                console.log("Rankine");
                this.rankineConversions(conversion);
                break;
            default:
                console.log("default");
                conversion.output = gc.invalidString;
                console.log("invalid:"+JSON.stringify(conversion));
                break;
        }
    },

    kelvinConversions(conversion) {
        console.log("kelvinConversions targetUnitType:"+conversion.targetUnitType);
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Kelvin = Kelvin
                this.compareResponseToConvertedValue(conversion, conversion.input);
                console.log("Kelvin = Kelvin " + conversion.input);
                break;
            case units[1]:
                // Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertKelvinToCelsius(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Kelvin 2 Celsius:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Kelvin 2 Celsius undefined input:" + cnvInput);
                }
                break;
            case units[2]:
                // Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertKelvinToFahrenheit(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Kelvin 2 Fahrenheit​:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Kelvin 2 Fahrenheit​ undefined input:" + cnvInput);
                }
                break;
            case units[3]:
                // Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertKelvinToRankine(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Kelvin 2 Rankine:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Kelvin 2 Rankine undefined input:" + cnvInput);
                }
                break;
            default:
                console.log("Kelvin default:" + conversion.targetUnitType);
                conversion.output = gc.invalidString;
                break;
         }
    },

    rankineConversions(conversion) {
        console.log("rankineConversions targetUnitType:"+conversion.targetUnitType);
        let cnvInput;

        switch (conversion.targetUnitType) {

            case units[0]:
                // Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertRankineToKelvin(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Rankine 2 Kelvin:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Rankine 2 Kelvin undefined input:" + cnvInput);
                }
                break;
            case units[1]:
                // Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertRankineToCelsius(cnvInput);
                    this.compareResponseToConvertedValue(conversion,cnvResults);
                    console.log("Rankine 2 Celsius:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion,cnvInput);
                    console.log("Rankine 2 Celsius undefined input:" + cnvInput);
                }
                break;
            case units[2]:
                // Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertRankineToFahrenheit(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Rankine 2 Fahrenheit:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Rankine 2 Fahrenheit undefined input:" + cnvInput);
                }
                break;
            case units[3]:
                // Rankine
                this.compareResponseToConvertedValue(conversion, conversion.input);
                console.log("Rankine = Rankine:" + conversions.input);
                break;
            default:
                console.log("Rankine default:" + targetUnitType);
                conversion.output = gc.invalidString;
                break;
        }
    },

    celsiusConversions(conversion) {
        console.log("celsiusConversions targetUnitType:"+conversion.targetUnitType);
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertCelsiusToKelvin(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Celsius 2 Kelvin:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Celsius 2 Kelvin undefined input:" + cnvInput);
                }
                break;
            case units[1]:
                // Celsius
                this.compareResponseToConvertedValue(conversion, conversion.input);
                console.log("Celsius = Celsius:" + conversions.input);
                break;
            case units[2]:
                // Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertCelsiusToFahrenheit(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Celsius 2 Fahrenheit:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Celsius 2 Fahrenheit undefined input:" + cnvInput);
                }
                break;
            case units[3]:
                // Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertCelsiusToRankine(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Celsius 2 Rankine:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Celsius 2 Rankine undefined input:" + cnvInput);
                }
                break;
            default:
                console.log("Celsius default:" + targetUnitType);
                conversion.output = gc.invalidString;
                break;
        }
    },

    fahrenheitConversions(conversion) {
        console.log("fahrenheitConversions targetUnitType:"+conversion.targetUnitType);
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertFahrenheitToKelvin(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Fahrenheit 2 Kelvin:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Fahrenheit 2 Kelvin undefined input:" + cnvInput);
                }
                break;
            case units[1]:
                // Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertFahrenheitToCelsius(cnvInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Fahrenheit 2 Celsius:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Fahrenheit 2 Celsius undefined input:" + cnvInput);
                }
                break;
            case units[2]:
                // Fahrenheit​
                this.compareResponseToConvertedValue(conversion, conversion.input);
                console.log("Fahrenheit = Fahrenheit:" + conversion.input);
                break;
            case units[3]:
                // Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    let cnvResults = this.convertFahrenheitToRankine(cvsInput);
                    this.compareResponseToConvertedValue(conversion, cnvResults);
                    console.log("Fahrenheit 2 Rankine:" + cnvResults);
                } else {
                    this.compareResponseToConvertedValue(conversion, cnvInput);
                    console.log("Fahrenheit 2 Rankine undefined input:" + cnvInput);
                }
                break;
            default:
                console.log("Fahrenheit default:" + cnvResults);
                conversion.output = gc.invalidString;
                break;
        }
    },

    compareResponseToConvertedValue(conversion,convertedValue) {
        //console.log("compareResponseToConvertedValue:"+convertedValue);
        //console.log("compareResponseToConvertedValue:"+JSON.stringify(conversion));

        let response = parseFloat(conversion.response);
        //console.log("compareResponseToConvertedValue rsp:"+response);

        if (response === undefined ||
            response === null ||
            response.isNaN ||
            (response <= (convertedValue + gc.targetMargin)) &&
            ((convertedValue - gc.targetMargin) <= response )) {
            //console.log("correct");
            conversion.output = gc.correctString;
        } else {
            //console.log("incorrect");
            conversion.response = "<font color=\"red\">"+conversion.response+"</font>"
            conversion.output = gc.incorrectString;
        }
    }



};

module.exports = temperature_units;




