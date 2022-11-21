const calculator = require("../src/calculator");

const Calculator = require("../src/calculator").Calculator;
const expect = require("chai").expect;

describe("Testing the Calculator Function", function () {
  it("1. Test of Addition function", function (done) {
    let calculator = new Calculator();
    expect(calculator.addition(5, 5)).to.equal(10);
    expect(calculator.addition(-5, -5)).to.equal(-10);
    expect(calculator.addition(-10, 15)).to.equal(5);
    done();
  });

  it("2. Test of Soustraction function", function (done) {
    let calculator = new Calculator();
    expect(calculator.substraction(5, 3)).to.equal(2);
    expect(calculator.substraction(-12, -5)).to.equal(-7);
    expect(calculator.substraction(-8, 15)).to.equal(-23);
    done();
  });

  it("3. Test of Multiplication function", function (done) {
    let calculator = new Calculator();
    expect(calculator.multiplication(5, 4)).to.equal(20);
    expect(calculator.multiplication(-7, -5)).to.equal(35);
    expect(calculator.multiplication(-10, 15)).to.equal(-150);
    done();
  });

  it("3. Test of division function", function (done) {
    let calculator = new Calculator();
    expect(calculator.division(10, 5)).to.equal(2);
    expect(calculator.division(-70, -10)).to.equal(7);
    expect(calculator.division(-15, 10)).to.equal(-1.5);
    done();
  });

  it("4. Error test000 ", function (done) {
    let calculator = new Calculator();
    expect(calculator.division("a", 5)).to.equal("Error : Not found number");
    expect(calculator.addition(-70, "c")).to.equal("Error : Not found number");
    expect(calculator.multiplication("c", "o")).to.equal(
      "Error : Not found number"
    );
    expect(calculator.substraction("h", 5)).to.equal(
      "Error : Not found number"
    );
    done();
  });

  it("5. Division by 0", function (done) {
    let calculator = new Calculator();
    expect(calculator.division(5, 0)).to.equal(
      "You can't divide a number by 0"
    );
    expect(calculator.division(0, 5)).to.equal(0);
    expect(calculator.division("a", 0)).to.equal(
      "You can't divide a number by 0"
    );
    done();
  });
});
