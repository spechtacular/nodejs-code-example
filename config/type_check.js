

const type_check = {

    /**************************************
     * example usage:
     *  var pform = {};
     *  var ptype = tc.get(pform);
     *  console.log('pform:'+ptype);
     *  pform:object
     *
     *  var pforms = 'xxx';
     *  ptype=tc.get(pforms);
     *  console.log('pforms:'+ptype);
     *  pforms: string
     *
     ***************************************/
    get(prop) {
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
        let vType = this.get(value);
        console.log("type="+vType);
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
    }

};
module.exports = type_check;


