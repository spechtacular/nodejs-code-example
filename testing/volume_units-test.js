const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const vu = require('../config/volume_units');
const gc = require('../config/global_constants');


describe('volume_units testing', () =>
{

    context('convertLitersToTablespoons', () =>
    {
        it('verify convertLitersToTablespoons(3.0) function', (done) =>
        {
            const liters = 3.0;
            const results = vu.convertLitersToTablespoons(liters);
            expect(results).to.be.closeTo(202.884136, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertLitersToCubicInches', () =>
    {
        it('verify convertLitersToCubicInches(3.0) function', (done) =>
        {
            const liters = 3.0;
            const results = vu.convertLitersToCubicInches(liters);
            expect(results).to.be.closeTo(183.071232, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertLitersToCups', () =>
    {
        it('verify convertLitersToCups(3.0) function', (done) =>
        {
            const liters = 3.0;
            const results = vu.convertLitersToCups(liters);
            expect(results).to.be.closeTo(12.680259, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertLitersToCubicFeet', () =>
    {
        it('test convertLitersToCubicFeet(3.0) function', (done) =>
        {
            const liters = 3.0;
            const results = vu.convertLitersToCubicFeet(liters);
            expect(results).to.be.closeTo(0.105944, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertLitersToGallons', () =>
    {
        it('test convertLitersToGallons(3.0) function', (done) =>
        {
            const liters = 3.0;
            const results = vu.convertLitersToGallons(liters);
            expect(results).to.be.closeTo(0.792516, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertTablespoonsToLiters', () =>
    {
        it('test convertTablespoonsToLiters(60.0) function', (done) =>
        {
            const tablespoons = 60.0;
            const results = vu.convertTablespoonsToLiters(tablespoons);
            expect(results).to.be.closeTo(0.887206, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        });
    });

    context('convertTablespoonsToCubicInches', () =>
    {
        it('verify convertTablespoonsToCubicInches(60.0) ', (done) =>
        {
            const tablespoons = 60.0;
            const results = vu.convertTablespoonsToCubicInches(tablespoons);
            expect(results).to.be.closeTo(54.140625, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertTablespoonsToCups', () =>
    {
        it('verify convertTablespoonsToCups(60.0) ', (done) =>
        {
            const tablespoons = 60.0;
            const results = vu.convertTablespoonsToCups(tablespoons);
            expect(results).to.be.closeTo(3.75, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertTablespoonsToCubicFeet', () =>
    {
        it('verify convertTablespoonsToCubicFeet(60.0) ', (done) =>
        {
            const tablespoons = 60.0;
            const results = vu.convertTablespoonsToCubicFeet(tablespoons);
            expect(results).to.be.closeTo(0.031331, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertTablespoonsToGallons', () =>
    {
        it('verify convertTablespoonsToGallons(60.0) ', (done) =>
        {
            const tablespoons = 60.0;
            const results = vu.convertTablespoonsToGallons(tablespoons);
            expect(results).to.be.closeTo(0.234375, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicInchesToLiters', () =>
    {
        it('verify convertCubicInchesToLiters(60.0) ', (done) =>
        {
            const cubicInches = 60.0;
            const results = vu.convertCubicInchesToLiters(cubicInches);
            expect(results).to.be.closeTo(0.983224, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicInchesToTablespoons', () =>
    {
        it('verify convertCubicInchesToTablespoons(60.0) ', (done) =>
        {
            const cubicInches = 60.0;
            const results = vu.convertCubicInchesToTablespoons(cubicInches);
            expect(results).to.be.closeTo(66.493506, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicInchesToCups', () =>
    {
        it('verify convertCubicInchesToCups(60.0) ', (done) =>
        {
            const cubicInches = 60.0;
            const results = vu.convertCubicInchesToCups(cubicInches);
            expect(results).to.be.closeTo(4.155844, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicInchesToCubicFeet', () =>
    {
        it('verify convertCubicInchesToCubicFeet(60.0) ', (done) =>
        {
            const cubicInches = 60.0;
            const results = vu.convertCubicInchesToCubicFeet(cubicInches);
            expect(results).to.be.closeTo(0.034722, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicInchesToGallons', () =>
    {
        it('verify convertCubicInchesToGallons(300.0) ', (done) =>
        {
            const cubicInches = 60.0;
            const results = vu.convertCubicInchesToGallons(cubicInches);
            expect(results).to.be.closeTo(0.25974, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCupsToLiters', () =>
    {
        it('verify convertCupsToLiters(300.0) ', (done) =>
        {
            const cups = 60.0;
            const results = vu.convertCupsToLiters(cups);
            expect(results).to.be.closeTo(14.195294, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCupsToTablespoons', () =>
    {
        it('verify convertCupsToTablespoons(60.0) ', (done) =>
        {
            const cups = 60.0;
            const results = vu.convertCupsToTablespoons(cups);
            expect(results).to.be.closeTo(960, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCupsToCubicInches', () =>
    {
        it('verify convertCupsToCubicInches(60.0) ', (done) =>
        {
            const cups = 60.0;
            const results = vu.convertCupsToCubicInches(cups);
            expect(results).to.be.closeTo(866.25, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCupsToCubicFeet', () =>
    {
        it('verify convertCupsToCubicFeet(60.0) ', (done) =>
        {
            const cups = 60.0;
            const results = vu.convertCupsToCubicFeet(cups);
            expect(results).to.be.closeTo(0.501302, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCupsToGallons', () =>
    {
        it('verify convertCupsToGallons(60.0) ', (done) =>
        {
            const cups = 60.0;
            const results = vu.convertCupsToGallons(cups);
            expect(results).to.be.closeTo(3.75, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicFeetToLiters', () =>
    {
        it('verify convertCubicFeetToLiters(60.0) ', (done) =>
        {
            const cubicFeet = 60.0;
            const results = vu.convertCubicFeetToLiters(cubicFeet);
            expect(results).to.be.closeTo(1699.01076, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicFeetToTablespoons', () =>
    {
        it('verify convertCubicFeetToTablespoons(60.0) ', (done) =>
        {
            const cubicFeet = 60.0;
            const results = vu.convertCubicFeetToTablespoons(cubicFeet);
            expect(results).to.be.closeTo(114900.776812, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicFeetToCubicInches', () =>
    {
        it('verify convertCubicFeetToCubicInches(60.0) ', (done) =>
        {
            const cubicFeet = 60.0;
            const results = vu.convertCubicFeetToCubicInches(cubicFeet);
            expect(results).to.be.closeTo(103679.997832, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicFeetToCups', () =>
    {
        it('verify convertCubicFeetToCups(60.0) ', (done) =>
        {
            const cubicFeet = 60.0;
            const results = vu.convertCubicFeetToCups(cubicFeet);
            expect(results).to.be.closeTo(7181.298552, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertCubicFeetToGallons', () =>
    {
        it('verify convertCubicFeetToGallons(60.0) ', (done) =>
        {
            const cubicFeet = 60.0;
            const results = vu.convertCubicFeetToGallons(cubicFeet);
            expect(results).to.be.closeTo(448.831159, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertGallonsToLiters', () =>
    {
        it('verify convertGallonsToLiters(60.0) ', (done) =>
        {
            const gallons = 60.0;
            const results = vu.convertGallonsToLiters(gallons);
            expect(results).to.be.closeTo(227.124707, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertGallonsToTablespoons', () =>
    {
        it('verify convertGallonsToTablespoons(60.0) ', (done) =>
        {
            const gallons = 60.0;
            const results = vu.convertGallonsToTablespoons(gallons);
            expect(results).to.be.closeTo(15359.999999, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertGallonsToCubicInches', () =>
    {
        it('verify convertGallonsToCubicInches(60.0) ', (done) =>
        {
            const gallons = 60.0;
            const results = vu.convertGallonsToCubicInches(gallons);
            expect(results).to.be.closeTo(13860, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertGallonsToCups', () =>
    {
        it('verify convertGallonsToCups(60.0) ', (done) =>
        {
            const gallons = 60.0;
            const results = vu.convertGallonsToCups(gallons);
            expect(results).to.be.closeTo(960, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('convertGallonsToCubicFeet', () =>
    {
        it('verify convertGallonsToCubicFeet(60.0) ', (done) =>
        {
            const gallons = 60.0;
            const results = vu.convertGallonsToCubicFeet(gallons);
            expect(results).to.be.closeTo(8.020834, gc.targetMargin);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('getUnits', () =>
    {
        it('verify getUnits() ', (done) =>
        {
            const results = vu.getUnits();
            expect(results).to.be.an('array').that.is.not.empty;
            expect(results.length).to.be.equal(6);
            done();
        })
    });

    context('matchUnits', () =>
    {
        it('verify gallons match using matchUnits(gallons) ', (done) =>
        {
            const unit = 'gallons';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify liters​ match using matchUnits(liters​) ', (done) =>
        {
            const unit = 'liters​';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify tablespoons​ match using matchUnits(tablespoons​) ', (done) =>
        {
            const unit = 'tablespoons​';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify cubic-inches match using matchUnits(cubic-inches) ', (done) =>
        {
            const unit = 'cubic-inches';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify cubic-feet match using matchUnits(cubic-feet) ', (done) =>
        {
            const unit = 'cubic-feet';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify cups​ match using matchUnits(cups​) ', (done) =>
        {
            const unit = 'cups​';
            const results = vu.matchUnits(unit);
            expect(results).to.be.at.least(0);
            expect(results).to.be.a("number");
            done();
        });

        it('verify invalid match using matchUnits(xxx) ', (done) =>
        {
            const unit = 'xxx';
            const results = vu.matchUnits(unit);
            expect(results).to.be.equal(-1);
            expect(results).to.be.a("number");
            done();
        })
    });

    context('lookupConversion', () =>
    {
        it('verify correct lookupConversion(gallons) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cups​",
                "input": "2.5",
                "response": "40",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(40.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect lookupConversion(gallon) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallon",
                "targetUnitType": "cups​",
                "input": "2.5",
                "response": "40",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty input lookupConversion(gallons) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cups​",
                "input": "",
                "response": "40",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty response lookupConversion(gallons) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cups​",
                "input": "2.5",
                "response": "",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty input and response lookupConversion(gallons) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cups​",
                "input": "",
                "response": "",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty inputUnitType lookupConversion() ', (done) =>
        {
            const cnvObject = {"inputUnitType": "", "targetUnitType": "cups​", "input": "", "response": "", "id": "11"};
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        });

        it('verify invalid empty targetUnitType lookupConversion() ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "",
                "input": "",
                "response": "",
                "id": "11"
            };
            vu.lookupConversion(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })
    });

    context('gallonsConversions', () =>
    {
        it('verify correct cups gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cups​",
                "input": "2.5",
                "response": "40",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(40.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct liters gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "liters​",
                "input": "5",
                "response": "18.927059",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(19.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-inches gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cubic-inches",
                "input": "2.5",
                "response": "577.5",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(577.5, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "cubic-feet",
                "input": "2.5",
                "response": "0.334201",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "tablespoons​",
                "input": "2.5",
                "response": "640",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(640, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct gallons gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "gallons",
                "input": "2.5",
                "response": "2.55",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(2.5, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect cups gallonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "gallons",
                "targetUnitType": "gallons",
                "input": "2.5",
                "response": "2.7",
                "id": "0"
            };
            vu.gallonsConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        })
    });

    context('cubicFeetConversions', () =>
    {
        it('verify correct gallons cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "gallons",
                "input": "6.0",
                "response": "44.883116",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(44.9, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cups cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "cups​",
                "input": "3.0",
                "response": "359.064928",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(359, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-inches cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "cubic-inches",
                "input": "8.0",
                "response": "13823.999711",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(13824, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct liters cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "liters​",
                "input": "6.0",
                "response": "169.901076",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(170, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons​ cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "tablespoons​",
                "input": "10.5",
                "response": "20107.635942",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(20107.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet cubicFeetConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-feet",
                "targetUnitType": "cubic-feet",
                "input": "6.0",
                "response": "6.0",
                "id": "0"
            };
            vu.cubicFeetConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        })
    });

    context('cupsConversions', () =>
    {
        it('verify correct gallons cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "gallons",
                "input": "5.25",
                "response": "0.328125",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-inches cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "cubic-inches",
                "input": "20",
                "response": "288.75",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(288.8, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "cubic-feet",
                "input": "240",
                "response": "2.005208",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(2.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cups cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "cups​",
                "input": "5.25",
                "response": "5.25",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(5.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons​ cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "tablespoons​",
                "input": "24",
                "response": "384",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(384, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct liters​ cupsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cups",
                "targetUnitType": "liters​",
                "input": "32",
                "response": "7.570824",
                "id": "0"
            };
            vu.cupsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(7.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        })
    });

    context('cubicInchesConversions', () =>
    {
        it('verify correct cups cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "cups​",
                "input": "10.5",
                "response": "0.727273",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.7, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons​ cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "tablespoons​",
                "input": "20.4",
                "response": "22.607792",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(22.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-inches cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "cubic-inches",
                "input": "10",
                "response": "10",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(10, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "cubic-feet",
                "input": "420.8",
                "response": "0.243519",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "tablespoons​",
                "input": "20.1",
                "response": "22.275325",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(22.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct liters cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "liters​",
                "input": "300",
                "response": "4.916119 l",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(5.0, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect cubic-inches cubicInchesConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "cubic-inches",
                "targetUnitType": "cubic-inches",
                "input": "10.5",
                "response": "10.7",
                "id": "0"
            };
            vu.cubicInchesConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        })
    });

    context('tablespoonsConversions', () =>
    {
        it('verify correct liters tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "liters​",
                "input": "87.7",
                "response": "1.296799",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(1.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "cubic-feet",
                "input": "1000",
                "response": "0.522",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(.5, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-inches tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "cubic-inches",
                "input": "100",
                "response": "90.234375",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(90.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cups tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "cups​",
                "input": "10",
                "response": "0.625",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.6, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct gallons tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "gallons",
                "input": "50",
                "response": "0.195313",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.2, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "tablespoons​",
                "input": "50",
                "response": "50",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(50, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });


        it('verify incorrect liters tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "liters​",
                "input": "87.7",
                "response": "1.5",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid tablespoonsConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "tablespoons",
                "targetUnitType": "xxx",
                "input": "87.7",
                "response": "1.296799",
                "id": "0"
            };
            vu.tablespoonsConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })
    });

    context('literConversions', () =>
    {
        it('verify correct cubic-inches literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "cubic-inches",
                "input": "9.5",
                "response": "579.725569",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(579.7, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cubic-feet literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "cubic-feet",
                "input": "9.5",
                "response": "0.335489",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(0.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct liters literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "liters​",
                "input": "9.5",
                "response": "9.4",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(9.5, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect liters literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "liters​",
                "input": "9.5",
                "response": "9.3",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify correct gallons literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "gallons",
                "input": "4.8",
                "response": "1.268026",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(1.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct cups literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "cups​",
                "input": "9.2",
                "response": "38.886126",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(38.9, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify correct tablespoons​ literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "tablespoons​",
                "input": "4.5",
                "response": "304.326204",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(parseFloat(cnvObject.response)).to.be.closeTo(304.3, gc.targetMargin);
            expect(cnvObject.output).to.be.equal(gc.correctString);
            done();
        });

        it('verify incorrect cubic-inches literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "cubic-inches",
                "input": "9.5",
                "response": "579.9",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.incorrectString);
            done();
        });

        it('verify invalid cubic-inches literConversions(cnvObject) ', (done) =>
        {
            const cnvObject = {
                "inputUnitType": "liters​",
                "targetUnitType": "cubic-inchs",
                "input": "9.5",
                "response": "579.9",
                "id": "0"
            };
            vu.literConversions(cnvObject);
            expect(cnvObject.output).to.be.equal(gc.invalidString);
            done();
        })

    });

});
