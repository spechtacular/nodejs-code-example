const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('sinon').createSandbox();
const moment = require("moment");
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
require('rewire');
let tc = require('../../config/type_check');


describe('type_check testing', ()=>
{

    context('get object type', () =>
    {
        it('verify get object function', (done) =>
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
        it('verify get array function', (done) =>
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
        it('verify get number function', (done) =>
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
        it('verify get boolean function', (done) =>
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
        it('verify get date function', (done) =>
        {
            let testType = moment.utc();
            let results = tc.get(testType);
            //expect(testType).to.be.a.dateString();
            chai.assert.isDefined(results, 'date results is defined');
            chai.assert.equal(results,"date");
            done();
        })
    });

    context('get null type', () =>
    {
        it('verify get null function', (done) =>
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
        it('verify get undefined function', (done) =>
        {

            let testType = undefined;
            let results = tc.get(testType);
            chai.assert.isDefined(results, ' undefined results is defined');
            chai.assert.equal(results,"undefined");
            done();
        })
    });

});
