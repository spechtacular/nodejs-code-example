const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
let cnv = require('../config/conversion');
let gc = require('../config/global_constants');


describe('conversion testing', ()=>
{

    context('getVariableType', () =>
    {
        it('verify invalid omitted inputUnitType lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "targetUnitType": "Rankine",
                "input": "345.2",
                "response": "345.4",
                "id": "1"
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid omitted targetUnitType lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "Rankine",
                "input": "345.2",
                "response": "345.4",
                "id": "1"
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid omitted inputUnitType and targetUnitType lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "input": "345.2",
                "response": "345.4",
                "id": "1"
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid omitted input lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "Rankine",
                "targetUnitType": "Rankine",
                "response": "345.4",
                "id": "1"
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid omitted response lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "Rankine",
                "targetUnitType": "Rankine",
                "input": "345.2",
                "id": "1"
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid omitted id lookupConversion(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "Rankine",
                "targetUnitType": "Rankine",
                "input": "345.2",
                "response": "345.4",
            };
            cnv.verifyConversionObject(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });
    });


    context('getVariableType', () =>
    {
        it('verify get object parameter', (done) =>
        {
            let testType = {};
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "object");
            done();
        });


        it('verify get array parameter', (done) =>
        {
            let testType = [];
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "array");
            done();
        });

        it('verify get number parameter', (done) =>
        {
            let testType = 7;
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "number");
            done();
        });

        it('verify get boolean parameter', (done) =>
        {
            let testType = true;
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "boolean");
            done();
        });

        it('verify get date parameter', (done) =>
        {
            let testType = new Date();
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "date");
            done();
        });

        it('verify get null parameter', (done) =>
        {

            let testType = null;
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "null");
            done();
        });

        it('verify get undefined parameter', (done) =>
        {

            let testType = undefined;
            let results = cnv.getVariableType(testType);
            expect(results).to.be.equal( "undefined");
            done();
        });
    });


    context('getVariableType', () =>
    {

        it('verify validateConversionValue undefined parameter', (done) =>
        {

            let testType = undefined;
            let results = cnv.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        });

        it('verify validateConversionValue null parameter', (done) =>
        {

            let testType = undefined;
            let results = cnv.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        });

        it('verify validateConversionValue valid number string parameter', (done) =>
        {
            let testType = "345";
            let results = cnv.validateConversionValue(testType);
            expect(results).to.be.equals(345);
            expect(results).to.be.a("number");
            done();
        });

        it('verify validateConversionValue valid number parameter', (done) =>
        {
            let testType = 345;
            let results = cnv.validateConversionValue(testType);
            expect(results).to.be.equals(345);
            expect(results).to.be.a("number");
            done();
        });

        it('verify validateConversionValue invalid number parameter', (done) =>
        {
            let testType = "345hello";
            let results = cnv.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        })
    });

});
