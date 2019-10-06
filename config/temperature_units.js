const gc = require("./global_constants");
const tc = require("./type_check");

const units = ["Kelvin", "Celsius", "Fahrenheit​", "Rankine"];

const cRatio = 9 / 5;
const fRatio = 5 / 9;
const fConst = 32.00;
const rcConst = 491.67;
const kfConst = 459.67;
const kConst = 273.15;


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
        switch (conversion.inputUnitType) {
            case units[0]:
                // Kelvin
                this.kelvinConversions(conversion);
                break;
            case units[1]:
                // Celsius
                this.celsiusConversions(conversion);
                break;
            case units[2]:
                // Fahrenheit​
                this.fahrenheitConversions(conversion);
                break;
            case units[3]:
                // Rankine
                this.rankineConversions(conversion);
                break;
            default:
                console.log("invalid temperature inputUnitType received");
                conversion.output = gc.invalidString;
                break;
        }
    },

    kelvinConversions(conversion) {
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Kelvin = Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // Kelvin 2 Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertKelvinToCelsius(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // Kelvin 2 Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertKelvinToFahrenheit(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // Kelvin 2 Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertKelvinToRankine(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by Kelvin");
                conversion.output = gc.invalidString;
                break;
         }
    },

    rankineConversions(conversion) {
        let cnvInput;
        console.log("rankineConversions targetUnitType:"+conversion.targetUnitType);
        switch (conversion.targetUnitType) {

            case units[0]:
                // Rankine 2 Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertRankineToKelvin(cnvInput));
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[1]:
                // Rankine 2 Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion,this.convertRankineToCelsius(cnvInput));
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[2]:
                // Rankine 2 Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertRankineToFahrenheit(cnvInput));
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            case units[3]:
                // Rankine = Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output=gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by Rankine");
                conversion.output = gc.invalidString;
                break;
        }
    },

    celsiusConversions(conversion) {
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Celsius 2 Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertCelsiusToKelvin(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // Celsius = Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // Celsius 2 Fahrenheit​
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertCelsiusToFahrenheit(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // Celsius 2 Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertCelsiusToRankine(cnvInput));
                } else {
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("invalid targetUnitType received by Celsius");
                conversion.output = gc.invalidString;
                break;
        }
    },

    fahrenheitConversions(conversion) {
        let cnvInput;

        switch (conversion.targetUnitType) {
            case units[0]:
                // Kelvin
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertFahrenheitToKelvin(cnvInput));
                } else {
                    // Fahrenheit 2 Kelvin undefined input
                    conversion.output = gc.invalidString;
                }
                break;
            case units[1]:
                // Celsius
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertFahrenheitToCelsius(cnvInput));
                } else {
                    // Fahrenheit 2 Celsius undefined input
                    conversion.output = gc.invalidString;
                }
                break;
            case units[2]:
                // Fahrenheit
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, cnvInput);
                } else {
                    // "Fahrenheit = Fahrenheit undefined input
                    conversion.output = gc.invalidString;
                }
                break;
            case units[3]:
                // Rankine
                cnvInput = tc.validateConversionValue(conversion.input);
                if (cnvInput) {
                    tc.compareResponseToConvertedValue(conversion, this.convertFahrenheitToRankine(cvsInput));
                } else {
                    // Fahrenheit 2 Rankine undefined input
                    conversion.output = gc.invalidString;
                }
                break;
            default:
                console.log("unknown Fahrenheit targetUnitType:" + conversion.targetUnitType);
                conversion.output = gc.invalidString;
                break;
        }
    }



};

module.exports = temperature_units;




