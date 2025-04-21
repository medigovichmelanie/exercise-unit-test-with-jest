const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yenes", function() {
    const yen = fromDollarToYen(6);
    const expected = 6 * 156.5;
    expect(yen).toBe(expected);
});

test("One yen should be 0.87 pounds", function() {
    const pound = fromYenToPound(8);
    const expected = 8 * 0.87;
    expect(pound).toBe(expected);
});