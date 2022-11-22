const Calculator = require("../src/calculator").Calculator;
const prompt = require("prompt-sync")({ sigint: true });

const calculator = new Calculator();
let statue = 1
while (statue == 1) {
    console.log("1 = Addition");
    console.log("2 = Substraction");
    console.log("3 = Multplication");
    console.log("4 = Division");
    let calculeChoice = Number(prompt("Choose a calcule type: "));
    if (Number <=5){
        let var1 = Number(prompt("Choose a value: "));
        let var2 = Number(prompt("Choose a another value : "));
    }
    else{
        let var1 = Number(prompt("Choose a value: "));
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
        default:
            console.log("Veuillez rentrer une valeur en convenance avec ce qui vous ai demandé")
            break
    }
    console.log("Press 0 for Exit or 1 for continue")
    statue = Number(prompt("Continu or Exit ? : "))
}

