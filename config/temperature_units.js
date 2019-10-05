
const units = ["Kelvin", "Celsius", "Fahrenheit​", "Rankine"];

const cRatio = parseFloat((9 / 5).toFixed(2));
const fRatio = parseFloat((5 / 9).toFixed(2));
const fConst = parseFloat((32.00).toFixed(2));
const rConst = parseFloat((459.66).toFixed(2));
const kConst = parseFloat((273.15).toFixed(2));
const rcConst = parseFloat((1.80).toFixed(2));

const temperature_units = {

    convertCelsiusToFahrenheit(celsius) {
        //console.log("convertCelsiusToFahrenheit convert celsius:" + celsius);
        let c2f = parseFloat((celsius * cRatio).toFixed(2)) + fConst;
        return (c2f);
    },

    convertFahrenheitToCelsius(fahrenheit) {
        //console.log("convertFahrenheitToCelsius convert fahrenheit:" + fahrenheit);
        const f2c = parseFloat(((fahrenheit - fConst) * fRatio).toFixed(2));
        return (f2c);
    },

    convertKelvinToCelsius(kelvin) {
        //console.log("convertKelvinToCelsius convert kelvin:" + kelvin);
        if (kelvin < (0)) {
            console('below absolute zero (0 K)');
            return undefined;
        } else {
            const k2c = parseFloat((kelvin - kConst).toFixed(2));
            //console.log(`kelvin:${kelvin} k2c:${k2c}`);
            return k2c;
        }
    },

    convertKelvinToFahrenheit(kelvin) {
        //console.log("convertKelvinToFahrenheit convert kelvin:" + kelvin);
        if (kelvin < (0)) {
            console('below absolute zero (0 K)');
            return undefined;
        } else {
            let celsius = this.convertKelvinToCelsius(kelvin);
            let fahrenheit = this.convertFahrenheitToCelsius(celsius);
            //console.log(`kelvin:${fahrenheit} k2c:${celsius}`);
            return fahrenheit;
        }
    },

    convertRankineToCelsius(rankine) {
        //console.log("convertRankineToCelsius convert rankine:" + rankine);
        const r2c = parseFloat(((rankine - fConst - rConst) / rcConst).toFixed(2));
        //console.log(`rankine:${rankine} r2c:${r2c}`);
        return r2c;
    }

};

module.exports = temperature_units;




