const tu = require ('../config/temperature_units');
const vu = require ('../config/volume_units');
const gc = require ('../config/global_constants');


const conversions = {
    processConversionForm(req, res) {
        if (req.body.conversions  &&
            req.body.conversions.length > 0) {
                let conversions = Array.prototype.slice.call(req.body.conversions);

                let cnvLength = conversions.length;
                conversions.forEach(conversion => {
                    console.log("pcf:" + JSON.stringify(conversion));

                    if (tu.matchUnits(conversion.inputUnitType) > -1) {
                        if (tu.matchUnits(conversion.targetUnitType) > -1) {
                            // input and output units are both temperature units
                            tu.lookupConversion(conversion);
                        } else {
                            // mismatched units
                            console.log("temp mismatched");
                            conversion.output = gc.invalidString;
                        }
                    } else {
                        if (vu.matchUnits(conversion.inputUnitType) > -1) {
                            if (vu.matchUnits(conversion.targetUnitType) > -1) {
                                // input and output units are both volume units
                                vu.lookupConversion(conversion);
                            } else {
                                // mismatched units
                                console.log("volume mismatched");
                                conversion.output = gc.invalidString;
                            }
                        } else {
                            console.log("no lookupConversion");
                        }
                    }

                    cnvLength--;
                    if (cnvLength === 0) {
                        return res.status(200).render('conversion_results', {
                            conversions: conversions
                        });
                    }
                });
        } else {
            return res.status(400).render('conversion400', {
                errorMessage: "invalid conversion content received"
            });
        }
    }
};

module.exports = conversions;

