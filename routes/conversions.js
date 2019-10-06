const tu = require ('../config/temperature_units');
const vu = require ('../config/volume_units');
const gc = require ('../config/global_constants');


const self = module.exports = {
    processConversionForm(req, res) {

        if (req.body.conversions !== null &&
            req.body.conversions !== undefined &&
            req.body.conversions.length > 0) {
                let conversions = Array.prototype.slice.call(req.body.conversions);
                console.log("cl:"+conversions.length);
                let cnvLength = conversions.length;
                conversions.forEach(conversion => {
                    console.log("pcf:" + JSON.stringify(conversion));
                    //console.log("inputUnitType=" + conversion.inputUnitType);
                    //console.log("targetUnitType=" + conversion.targetUnitType);

                    if (tu.matchUnits(conversion.inputUnitType) > -1) {
                        console.log("temp inputUnitType");
                        if (tu.matchUnits(conversion.targetUnitType) > -1) {
                            // input and output units are both temperature units
                            console.log("temp lookupConversion");
                            tu.lookupConversion(conversion);
                        } else {
                            // mismatched units
                            console.log("temp mismatched");
                            conversion.output = gc.invalidString;
                        }
                    } else {
                        if (vu.matchUnits(conversion.inputUnitType) > -1) {
                            console.log("volume inputUnitType");
                            if (vu.matchUnits(conversion.targetUnitType) > -1) {
                                console.log("volume lookupConversion");
                                // input and output units are both volume units
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
                    } else {
                        console.log("cnvLength="+cnvLength);
                    }
                });
        } else {
            return res.status(400).render('conversion400', {
                errorMessage: "invalid conversion content received"
            });
        }
    }
};