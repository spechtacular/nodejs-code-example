const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
let tc = require('../config/type_check');


describe('type_check testing', ()=>
{

    context('get object type', () =>
    {
        it('verify get object parameter', (done) =>
        {
            let testType = {};
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' object results is defined');
            chai.assert.equal(results,"object");
            done();
        })
    });


    context('get array type', () =>
    {
        it('verify get array parameter', (done) =>
        {
            let testType = [];
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' array results is defined');
            chai.assert.equal(results,"array");
            done();
        });

    });

    context('get number type', () =>
    {
        it('verify get number parameter', (done) =>
        {
            let testType = 7;
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' number results is defined');
            chai.assert.equal(results,"number");
            done();
        })
    });

    context('get boolean type', () =>
    {
        it('verify get boolean parameter', (done) =>
        {
            let testType = true;
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' boolean results is defined');
            chai.assert.equal(results,"boolean");
            done();
        })
    });

    context('get date type', () =>
    {
        it('verify get date parameter', (done) =>
        {
            let testType = new Date();
            let results = tc.get(testType);
            //expect(testType).to.be.a.dateString();
            chai.assert.isDefined(results, 'date results is defined');
            chai.assert.equal(results,"date");
            done();
        })
    });

    context('get null type', () =>
    {
        it('verify get null parameter', (done) =>
        {

            let testType = null;
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' null results is defined');
            chai.assert.equal(results,"null");
            done();
        })
    });

    context('get undefined type', () =>
    {
        it('verify get undefined parameter', (done) =>
        {

            let testType = undefined;
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' undefined results is defined');
            chai.assert.equal(results,"undefined");
            done();
        })
    });


    context('validateConversionValue undefined type', () =>
    {
        it('verify validateConversionValue undefined parameter', (done) =>
        {

            let testType = undefined;
            let results = tc.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        })
    });

    context('validateConversionValue null type', () =>
    {
        it('verify validateConversionValue null parameter', (done) =>
        {

            let testType = undefined;
            let results = tc.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        })
    });

    context('validateConversionValue valid number string type', () =>
    {
        it('verify validateConversionValue valid number string parameter', (done) =>
        {
            let testType = "345";
            let results = tc.validateConversionValue(testType);
            expect(results).to.be.equals(345);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('validateConversionValue valid number type', () =>
    {
        it('verify validateConversionValue valid number parameter', (done) =>
        {
            let testType = 345;
            let results = tc.validateConversionValue(testType);
            expect(results).to.be.equals(345);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('validateConversionValue invalid number type', () =>
    {
        it('verify validateConversionValue invalid number parameter', (done) =>
        {
            let testType = "345hello";
            let results = tc.validateConversionValue(testType);
            expect(results).to.be.undefined;
            done();
        })
    });

});
