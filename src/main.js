const Calculator = require("../src/calculator").Calculator;
const prompt = require("prompt-sync")({ sigint: true });

const calculator = new Calculator();
let var1 = Number(prompt("Choose a value: "));
let var2 = Number(prompt("Choose a another valuer : "));
console.log("1 = Addition");
console.log("2 = Substraction");
console.log("3 = Multplication");
console.log("4 = Division");
let calculeChoice = Number(prompt("Choose a calcule type: "));
