
let maxConversions = 10;
let invalidString = "invalid";
let correctString = "correct";
let incorrectString = "incorrect";
let targetMargin = parseFloat(.1);

if (process.env.NODE_ENV === 'production') {
    maxConversions = 20;
} else if (process.env.NODE_ENV === 'development') {
    maxConversions = 10;
} else if (process.env.NODE_ENV === 'test') {
    maxConversions = 5;
} else {
    maxConversions = 12;
}


module.exports = {
    maxConversions: maxConversions,
    invalidString: invalidString,
    incorrectString: incorrectString,
    correctString: correctString,
    targetMargin: targetMargin
};
