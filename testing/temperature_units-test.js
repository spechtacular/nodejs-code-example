const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const tu = require('../config/temperature_units');
const gc = require('../config/global_constants');


describe('temperature_units testing', ()=>
{

    context('convertCelsiusToFahrenheit', () =>
    {
        it('verify correct number input convertCelsiusToFahrenheit(20.0) function', (done) =>
        {
            const celsius = 20.0;
            const results = tu.convertCelsiusToFahrenheit(celsius);
            expect(results).to.be.closeTo(68.0, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });

        it('verify correct string input convertCelsiusToFahrenheit(20.0) function', (done) =>
        {
            const celsius = "20.0";
            const results = tu.convertCelsiusToFahrenheit(celsius);
            expect(results).to.be.closeTo(68.0, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });

        it('verify invalid input convertCelsiusToFahrenheit(20.0) function', (done) =>
        {
            const celsius = "20.0abc";
            const results = tu.convertCelsiusToFahrenheit(celsius);
            expect(results).to.be.NaN;
            done();
        });

    });

    context('convertCelsiusToKelvin', () =>
    {
        it('verify convertCelsiusToKelvin(20.0) function', (done) =>
        {
            const celsius = 20.0;
            const results = tu.convertCelsiusToKelvin(celsius);
            expect(results).to.be.closeTo(293.15, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertCelsiusToRankine', () =>
    {
        it('verify convertCelsiusToRankine(20.0) function', (done) =>
        {
            const celsius = 20.0;
            const results = tu.convertCelsiusToRankine(celsius);
            expect(results).to.be.closeTo(527.67, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertFahrenheitToRankine', () =>
    {
        it('test convertFahrenheitToRankine(68.0) function', (done) =>
        {
            const fahrenheit = 68.0;
            const results = tu.convertFahrenheitToRankine(fahrenheit);
            expect(results).to.be.closeTo(527.67, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertFahrenheitToKelvin', () =>
    {
        it('test convertFahrenheitToKelvin(60.0) function', (done) =>
        {
            const fahrenheit = 60.0;
            const results = tu.convertFahrenheitToKelvin(fahrenheit);
            expect(results).to.be.closeTo(288.71, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertFahrenheitToCelsius', () =>
    {
        it('test convertFahrenheitToCelsius(70.0) function', (done) =>
        {
            const fahrenheit = 70.0;
            const results = tu.convertFahrenheitToCelsius(fahrenheit);
            expect(results).to.be.closeTo(21.1, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToRankine', () =>
    {
        it('verify convertKelvinToRankine(300.0) ', (done) =>
        {
            const kelvin = 300.0;
            const results = tu.convertKelvinToRankine(kelvin);
            expect(results).to.be.closeTo(540.0, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToCelsius', () =>
    {
        it('verify convertKelvinToCelsius(300.0) ', (done) =>
        {
            const kelvin = 300.0;
            const results = tu.convertKelvinToCelsius(kelvin);
            expect(results).to.be.closeTo(26.8, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(25.0) ', (done) =>
        {
            const kelvin = 25.0;
            const results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(-414.7, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(-1.0) ', (done) =>
        {
            const kelvin = -1.0;
            const results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(0.0, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(0.0) ', (done) =>
        {
            const kelvin = 0.0;
            const results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(-459.6, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertRankineToCelsius', () =>
    {
        it('verify convertRankineToCelsius(43.0) ', (done) =>
        {
            const rankine = 43.0;
            const results = tu.convertRankineToCelsius(rankine);
            expect(results).to.be.closeTo(-249.3, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToFahrenheit', () =>
    {
        it('verify convertRankineToFahrenheit(300.0) ', (done) =>
        {
            const rankine = 300.0;
            const results = tu.convertRankineToFahrenheit(rankine);
            expect(results).to.be.closeTo(-159.6, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToKelvin', () =>
    {
        it('verify convertRankineToKelvin(300.0) ', (done) =>
        {
            const rankine = 300.0;
            const results = tu.convertRankineToKelvin(rankine);
            expect(results).to.be.closeTo(166.7, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('getUnits', () =>
    {
        it('verify getUnits() ', (done) =>
        {
            const results = tu.getUnits();
            expect(results).to.be.an('array').that.is.not.empty;
            expect(results.length).to.be.equal(4);
            done();
        })
    });

    context('matchUnits', () =>
    {
        it('verify Rankine matches using matchUnits(Rankine) ', (done) =>
        {
            const unit = 'Rankine';
            const results = tu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });


        it('verify Fahrenheit​ matches using matchUnits(Fahrenheit​) ', (done) =>
        {
            const unit = 'Fahrenheit​';
            const results = tu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify Kelvin matches using matchUnits(Kelvin) ', (done) =>
        {
            const unit = 'Kelvin';
            const results = tu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify Celsius matches using matchUnits(Celsius) ', (done) =>
        {
            const unit = 'Celsius';
            const results = tu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify match fails using a bad volume name matchUnits(Celsus) ', (done) =>
        {
            const unit = 'Celsus';
            const results = tu.matchUnits(unit);
            expect(results).to.be.equal(-1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('lookupConversion', () =>
    {
        it('verify correct Rankine lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"345.2","response":"345.2","id":"1"};
            tu.lookupConversion(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(345.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect Rankine lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"345.2","response":"345.4","id":"1"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid unit name lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankin","targetUnitType":"Rankine","input":"345.2","response":"345.2","id":"1"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty input lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"","response":"345.2","id":"0"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });


        it('verify invalid empty response lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"345.2","response":"","id":"0"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty input and response lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"","response":"","id":"0"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty inputUnitType lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"345.2","response":"345.4","id":"1"};
            tu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        })


    });

    context('celsiusConversions', () =>
    {
        it('verify correct Celsius celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"Celsius","input":"46.2","response":"46.15","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(46.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Fahrenheit celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"Fahrenheit​","input":"32","response":"89.5","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(89.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Kelvin celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"Kelvin","input":"45","response":"318.2","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(318.1, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Rankine celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"Rankine","input":"46.2","response":"574.83","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(574.8, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect Rankine celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"Rankine","input":"46.2","response":"574.6","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid celsiusConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Celsius","targetUnitType":"xxx","input":"46.2","response":"574.6","id":"1"};
            tu.celsiusConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })
    });

    context('fahrenheitConversions', () =>
    {

        it('verify correct Kelvin fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"Kelvin","input":"22","response":"267.594444","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(267.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Rankine fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"Rankine","input":"89","response":"548.67","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(548.7, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Celsius fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"Celsius","input":"21","response":"-6.111111","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(-6.1, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Fahrenheit fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"Fahrenheit​","input":"21.1","response":"21.2","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(21.1, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect Celsius fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"Celsius","input":"21","response":"-6.3","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid fahrenheitConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Fahrenheit","targetUnitType":"xxx","input":"21","response":"-6.3","id":"1"};
            tu.fahrenheitConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })
    });

    context('kelvinConversions', () =>
    {

        it('verify correct Fahrenheit​ kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Fahrenheit​","input":"7.6","response":"-445.99","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(-446.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Celsius kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Celsius","input":"12.5","response":"-260.65","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(-260.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Rankine kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Rankine","input":"27.6","response":"49.68","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(49.7, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Kelvin kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Kelvin","input":"49.6","response":"49.68","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(49.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect Kelvin kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Kelvin","input":"49.6","response":"49.8","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify incorrect Rankine kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"Rankine","input":"27.6","response":"49.9","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid kelvinConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Kelvin","targetUnitType":"xxx","input":"27.6","response":"49.9","id":"1"};
            tu.kelvinConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })
    });

    context('rankineConversions', () =>
    {
        it('verify correct Fahrenheit rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Fahrenheit​","input":"98.6","response":"-361.2","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(-361.1, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Celsius rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Celsius","input":"43.8","response":"-248.816667","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(-248.8, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct Kelvin rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Kelvin","input":"29.66","response":"16.477778","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(16.5, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect Fahrenheit rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Fahrenheit​","input":"98.6","response":"-360.8","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"xxx","input":"-361","response":"-360.8","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify incorrect Rankine rankineConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {"inputUnitType":"Rankine","targetUnitType":"Rankine","input":"-360.8","response":"-360.5","id":"1"};
            tu.rankineConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        })
    });

});
