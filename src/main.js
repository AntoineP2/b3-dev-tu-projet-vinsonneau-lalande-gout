const CalculatorScientist = require("../src/calculatorScientist").CalculatorScientist;
const Calculator = require("../src/calculator").Calculator;
const prompt = require("prompt-sync")({ sigint: true });

const calculator = new Calculator();
const calculatorScientist = new CalculatorScientist()
let statue = 1
let var1 = 0
let var2 = 0
while (statue == 1) {
    console.log("1 = Addition");
    console.log("2 = Substraction");
    console.log("3 = Multplication");
    console.log("4 = Division");
    console.log("5 = Pow");
    console.log("6 = Simple Pow");
    console.log("7 = Square Root");
    let calculeChoice = Number(prompt("Choose a calcule type: "));
    
    if (calculeChoice <= 5) {
        var1 = Number(prompt("Choose a value: "));
        var2 = Number(prompt("Choose a another value : "));
    }
    else {
        var1 = Number(prompt("Choose a value: "));
    }
    switch (calculeChoice) {
        case 1:
            console.log(calculator.addition(var1, var2))
            break
        case 2:
            console.log(calculator.substraction(var1, var2))
            break
        case 3:
            console.log(calculator.multiplication(var1, var2))
            break
        case 4:
            console.log(calculator.division(var1, var2))
            break
        case 5:
            console.log(calculatorScientist.pow(var1, var2))
            break
        case 6:
            console.log(calculatorScientist.simplePow(var1))
            break
        case 7:
            console.log(calculatorScientist.squareRoot(var1))
            break
        default:
            console.log("Veuillez rentrer une valeur en convenance avec ce qui vous ai demandé")
            break
    }
    console.log("Press 0 for Exit or 1 for continue")
    statue = Number(prompt("Continu or Exit ? : "))
}

