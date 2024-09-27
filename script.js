let operand1 = "";
let operand2 = "";
let curOperator = null;
let result = null;
let isNewCal = false;

let display = document.getElementById("result-number");

let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (isNewCal) {
      operand1 = "";
      operand2 = "";
      curOperator = null;
      isNewCal = false;
    }
    if (!curOperator) {
      operand1 += number.getAttribute("data-value");
    } else {
      operand2 += number.getAttribute("data-value");
    }
    if (operand1) {
      display.innerText = operand1;
    }
    if (curOperator) {
      display.innerText += curOperator + operand2;
    }
  });
});

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operand1 && curOperator && operand2) {
      operate();
    }
    curOperator = operator.getAttribute("data-value");
    if (operand1) {
      display.innerText += curOperator;
    }
    isNewCal = false;
  });
});

document.querySelectorAll(".clear").forEach((button) => {
  button.addEventListener("click", () => {
    operand1 = "";
    operand2 = "";
    curOperator = null;
    result = null;
    display.innerText = "0";
  });
});

document.querySelectorAll(".equals").forEach((button) => {
  button.addEventListener("click", () => {
    if (operand1 && curOperator && operand2) {
      operate();
      isNewCal = true;
    } else {
      console.log("somthing missing at equals operations error");
    }
  });
});

function operate() {
  console.log(operand1, curOperator, operand2);

  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);

  switch (curOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        display.innerText = "cant / by 0";
        return;
      } else {
        result = num1 / num2;
      }
      break;
    default:
      display.innerHTML = "somthing error";
      return;
  }
  result = Math.round(result * 100) / 100;
  display.innerText = result;
  operand1 = result.toString();
  operand2 = "";
  curOperator = null;
}
