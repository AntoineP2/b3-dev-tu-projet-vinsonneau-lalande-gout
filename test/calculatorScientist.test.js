const CalculatorScientist = require("../src/calculatorScientist").CalculatorScientist;
const expect = require("chai").expect;

describe("Testing the Calculator Function", function () {
  it("1. Test of  Pow² function", function (done) {
    let calculatorScientist = new CalculatorScientist();
    expect(calculatorScientist.simplePow(2)).to.equal(4);
    expect(calculatorScientist.simplePow(-2)).to.equal(4);
    expect(calculatorScientist.simplePow(5)).to.equal(25);
    done();
  });
  it("2. Test of  Pow function", function (done) {
    let calculatorScientist = new CalculatorScientist();
    expect(calculatorScientist.pow(2,2)).to.equal(4);
    expect(calculatorScientist.pow(-2, 3)).to.equal(-8);
    expect(calculatorScientist.pow(3, 3)).to.equal(27);
    done();
  });
  it("3. Test of  squareRoot function", function (done) {
    let calculatorScientist = new CalculatorScientist();
    expect(calculatorScientist.squareRoot(4)).to.equal(2);
    expect(calculatorScientist.squareRoot(25)).to.equal(5);
    expect(calculatorScientist.squareRoot(0)).to.equal(0);
    done();
  });
});