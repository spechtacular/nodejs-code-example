const gc = require('../config/global_constants');

const conversion = {

    verifyConversionObject(conversion) {
        if (!conversion.hasOwnProperty('id')) {
            console.log("id field is not defined in object");
            conversion.output = gc.invalidString;
            return null;
        } else if (!conversion.hasOwnProperty('inputUnitType')) {
            console.log("inputUnitType field is not defined in object id["+
              conversion.id + "]");
            conversion.output = gc.invalidString;
            return null;
        } else if (!conversion.hasOwnProperty('targetUnitType')) {
            console.log("targetUnitType field is not defined in object id["+
                conversion.id + "]");
            conversion.output = gc.invalidString;
            return null;
        } else if (!conversion.hasOwnProperty('input')) {
            console.log("input field is not defined in object id["+
                conversion.id + "]");
            conversion.output = gc.invalidString;
            return null;
        } else if (!conversion.hasOwnProperty('response')) {
            console.log("response field is not defined in object id["+
                conversion.id + "]");
            conversion.output = gc.invalidString;
            return null;
        } else {
            return conversion;
        }
    },

    getVariableType(prop) {
        let var_type_string = null;
        const var_type = Object.prototype.toString.call(prop);
        switch (var_type) {
            case '[object Null]':
                var_type_string = 'null';
                break;
            case '[object Undefined]':
                var_type_string = 'undefined';
                break;
            case '[object Object]':
                var_type_string = 'object';
                break;
            case '[object Array]':
                var_type_string = 'array';
                break;
            case '[object String]':
                var_type_string = 'string';
                break;
            case '[object Boolean]':
                var_type_string = 'boolean';
                break;
            case '[object Number]':
                var_type_string = 'number';
                break;
            case '[object Date]':
                var_type_string = 'date';
                break;
            default:
                var_type_string = null;
        }
        return var_type_string;
     },


    validateConversionValue(value) {
        let vType = this.getVariableType(value);
        switch (vType) {
            case "string":
                let newValue = Number(value);
                if (isNaN(newValue))
                    return undefined;
                else
                    return(newValue);
            case "number":
                return (value);
            default:
                return undefined;
        }
    },

    compareResponseToConvertedValue(conversion,convertedValue) {

        if (conversion.response) {
            let response = parseFloat(conversion.response);
            if (response && (response <= (convertedValue + gc.targetMargin)) &&
                ((convertedValue - gc.targetMargin) <= response)) {
                conversion.output = gc.correctString;
            } else {
                conversion.output = gc.incorrectString;
            }
        } else {
            conversion.output = gc.invalidString;
        }
    }

};
module.exports = conversion;


