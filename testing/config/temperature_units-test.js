const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(require('chai-datetime'));
chai.use(require('chai-date-string'));
const sinon = require('sinon');
require('assert');
require('sinon').createSandbox();
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
let tu = require('../../config/temperature_units');


describe('temperature_units testing', ()=>
{

    context('convertCelsiusToFahrenheit', () =>
    {
        it('verify convertCelsiusToFahrenheit function', (done) =>
        {
            let celsius = 7;
            let results = tu.convertCelsiusToFahrenheit(celsius);
            expect(results).to.be.within(44,45);
            expect(results).to.be.a("number");
            done();
        })
    });


    context('convertFahrenheitToCelsius', () =>
    {
        it('test convertFahrenheitToCelsius function', (done) =>
        {
            let fahrenheit = 70;
            let results = tu.convertFahrenheitToCelsius(fahrenheit);
            expect(results).to.be.within(21,22);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertKelvinToCelsius', () =>
    {
        it('verify convertKelvinToCelsius function', (done) =>
        {
            let kelvin = 7;
            let results = tu.convertKelvinToCelsius(kelvin);
            expect(results).to.be.within(-248,-247);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertRankineToCelsius', () =>
    {
        it('verify convertRankineToCelsius function', (done) =>
        {
            let rankine = 43;
            let results = tu.convertRankineToCelsius(rankine);
            expect(results).to.be.within(-249,-248);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertKelvinToFahrenheit', () =>
    {
        it('verify convertKelvinToFahrenheit function', (done) =>
        {
            let kelvin = 25;
            let results = tu.convertKelvinToFahrenheit(kelvin);
            expect(results).to.be.within(-414,-413);
            expect(results).to.be.a("number");
            done();
        })
    });

});
