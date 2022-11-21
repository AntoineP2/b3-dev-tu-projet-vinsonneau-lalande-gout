class Calculator {
  constructor() {
    this.result = 0;
  }

  valueTest(number1, number2) {
    return typeof number1 == "number" && typeof number2 == "number"
      ? true
      : false;
  }

  reset() {
    this.result = 0;
  }

  addition(number1, number2) {
    if (this.valueTest(number1, number2)) {
      let result = number1 + number2;
      this.result += result;
      return result;
    } else {
      return "Error : Not found number";
    }
  }

  substraction(number1, number2) {
    if (this.valueTest(number1, number2)) {
      let result = number1 - number2;
      this.result += result;
      return result;
    } else {
      return "Error : Not found number";
    }
  }

  division(number1, number2) {
    if (this.valueTest(number1, number2) && number2 != 0) {
      let result = number1 / number2;
      this.result += result;
      return result;
    } else {
      return number2 == 0
        ? "You can't divide a number by 0"
        : "Error : Not found number";
    }
  }

  multiplication(number1, number2) {
    if (this.valueTest(number1, number2)) {
      let result = number1 * number2;
      this.result += result;
      return result;
    } else {
      return "Error : Not found number";
    }
  }
}

module.exports = {
  Calculator: Calculator,
};
