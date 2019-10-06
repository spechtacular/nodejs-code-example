
let maxConversions = 10;
const invalidString = "invalid";
const correctString = "correct";
const incorrectString = "incorrect";
const targetMargin = .1;

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
