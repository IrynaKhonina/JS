let buttonPlus= document.getElementById ("buttonPlus");
let buttonMinus = document.getElementById ("buttonMinus");   
let buttonMultiply = document.getElementById ("buttonMultiply"); 
let buttonDivision = document.getElementById ("buttonDivision"); 

let input1 = document.getElementById ("number1");
let input2 = document.getElementById ("number2");


function makeOperation(operationCode) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result; // Объявление переменной result

    if (operationCode === "+") {
        result = number1 + number2; // Сложение
    } else if (operationCode === "-") {
        result = number1 - number2; // Вычитание
    } else if (operationCode === "*") {
        result = number1 * number2; // Умножение
    } else if (operationCode === "/") {
        if (number2 !== 0) { // Проверка на деление на ноль
            result = number1 / number2; // Деление
        } else {
            window.alert("Ошибка: деление на ноль!");
            return; // Завершение функции, если деление на ноль
        }
    }

    window.alert(result); // Показать результат
}


function onOperationButtonClick(eventObject){
    let clickEvent = eventObject.currentTarget;
    let operation = clickEvent.innerHTML
    makeOperation(operation);
    
  
}


buttonPlus.addEventListener ("click", onOperationButtonClick );
buttonMinus.addEventListener ("click", onOperationButtonClick);
buttonMultiply.addEventListener ("click", onOperationButtonClick);
buttonDivision.addEventListener ("click", onOperationButtonClick );