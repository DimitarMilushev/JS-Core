function subtract() {
    let firstValue = document.getElementById("firstNumber").value;
    let secondValue = document.getElementById("secondNumber").value;
    let resultElement = document.getElementById("result");

    let result = firstValue - secondValue;
    resultElement.textContent = result;

}