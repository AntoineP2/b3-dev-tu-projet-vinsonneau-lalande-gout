class CalculatorScientist {
    constructor(){
        this.result = 0;
    }

    simplePow(number1){
        return number1*number1
    }

    pow(number1, pow){
    return Math.pow(number1, pow)
    }

    squareRoot(number1){
        return Math.sqrt(number1)
    }
}

module.exports = {
    CalculatorScientist: CalculatorScientist,
  };
  