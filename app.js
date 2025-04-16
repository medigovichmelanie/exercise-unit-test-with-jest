// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    const valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    const valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    const valueInPound = valueInYen * 0.87;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
