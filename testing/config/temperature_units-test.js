const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
let tu = require('../../config/temperature_units');


describe('temperature_units testing', ()=>
{

    context('convertCelsiusToFahrenheit', () =>
    {
        it('verify convertCelsiusToFahrenheit(20.0) function', (done) =>
        {
            let celsius = 20.0;
            let results = tu.convertCelsiusToFahrenheit(celsius);
            expect(results).to.be.closeTo(68.0,1.0);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCelsiusToKelvin', () =>
    {
        it('verify convertCelsiusToKelvin(20.0) function', (done) =>
        {
            let celsius = 20.0;
            let results = tu.convertCelsiusToKelvin(celsius);
            expect(results).to.be.closeTo(293.15,1.0);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCelsiusToRankine', () =>
    {
        it('verify convertCelsiusToRankine(20.0) function', (done) =>
        {
            let celsius = 20.0;
            let results = tu.convertCelsiusToRankine(celsius);
            expect(results).to.be.closeTo(527.67,1.0);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertFahrenheitToRankine', () =>
    {
        it('test convertFahrenheitToRankine(68.0) function', (done) =>
        {
            let fahrenheit = 68.0;
            let results = tu.convertFahrenheitToRankine(fahrenheit);
            expect(results).to.be.closeTo(527.67,1.0);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertFahrenheitToKelvin', () =>
    {
        it('test convertFahrenheitToKelvin(60.0) function', (done) =>
        {
            let fahrenheit = 60.0;
            let results = tu.convertFahrenheitToKelvin(fahrenheit);
            expect(results).to.be.closeTo(288.71,1.0);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertFahrenheitToCelsius', () =>
    {
        it('test convertFahrenheitToCelsius(60.0) function', (done) =>
        {
            let fahrenheit = 70.0;
            let results = tu.convertFahrenheitToCelsius(fahrenheit);
            expect(results).to.be.closeTo(21.0,1.0);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToRankine', () =>
    {
        it('verify convertKelvinToRankine(300.0) ', (done) =>
        {
            let kelvin = 300.0;
            let results = tu.convertKelvinToRankine(kelvin);
            expect(results).to.be.closeTo(540.0,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertKelvinToCelsius', () =>
    {
        it('verify convertKelvinToCelsius(300.0) ', (done) =>
        {
            let kelvin = 300.0;
            let results = tu.convertKelvinToCelsius(kelvin);
            expect(results).to.be.closeTo(26.8,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(25.0) ', (done) =>
        {
            let kelvin = 25.0;
            let results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(-414.7,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(-1.0) ', (done) =>
        {
            let kelvin = -1.0;
            let results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(0.0,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit(0.0) ', (done) =>
        {
            let kelvin = 0.0;
            let results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.closeTo(-459.6,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToCelsius', () =>
    {
        it('verify convertRankineToCelsius(43.0) ', (done) =>
        {
            let rankine = 43.0;
            let results = tu.convertRankineToCelsius(rankine);
            expect(results).to.be.closeTo(-249.3,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToFahrenheit', () =>
    {
        it('verify convertRankineToFahrenheit(300.0) ', (done) =>
        {
            let rankine = 300.0;
            let results = tu.convertRankineToFahrenheit(rankine);
            expect(results).to.be.closeTo(-159.6,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToKelvin', () =>
    {
        it('verify convertRankineToKelvin(300.0) ', (done) =>
        {
            let rankine = 300.0;
            let results = tu.convertRankineToKelvin(rankine);
            expect(results).to.be.closeTo(166.7,0.1);
            expect(results).to.be.a("number");
            done();
        })
    });


});
