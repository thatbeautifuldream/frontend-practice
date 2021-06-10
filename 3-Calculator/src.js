document.getElementById("add").addEventListener("click", add);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mult").addEventListener("click", mult);
document.getElementById("div").addEventListener("click", div);
let op1 = document.getElementById("op-1").value;
let op2 = document.getElementById("op-2").value;
function add() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 + op2;
}
function sub() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 - op2;
}
function mult() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 * op2;
}
function div() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 / op2;
}
// const problem = "3 add 16";
// const calculate = opr => {
//    const [num1, operation, num2] = opr.split(" ");
//    switch (operation) {
//       case "add":
//          return +num1 + +num2;
//       case "divide":
//          return +num1 / +num2;
//       case "subtract":
//          return +num1 - +num2;
//       case "multiply":
//          return +num1 * +num2;
//       case "modulo":
//          return +num1 % +num2;
//       default:
//          return 0;
//    }
// }
// console.log(calculate(problem));
