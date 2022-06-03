var buttons = document.getElementsByClassName("circle");
var display = document.getElementsByClassName("displayArea");
var num1 = 0;
var num2 = null;
var operator = null;

function calc() {
    var value = this.getAttribute('data-value');

    if (value == '+') {
        operator = '+';
        num1 = parseFloat(displayArea.textContent);
        displayArea.textContent = '';
    }
    else if (value == '-') {
        operator = '-';
        num1 = parseFloat(displayArea.textContent);
        displayArea.textContent = '';
    }
    else if (value == '*') {
        operator = '*';
        num1 = parseFloat(displayArea.textContent);
        displayArea.textContent = '';
    }
    else if (value == '/') {
        operator = '/';
        num1 = parseFloat(displayArea.textContent);
        displayArea.textContent = '';
    }
    else if (value == '%') {
        operator = '%';
        num1 = parseFloat(displayArea.textContent);
        displayArea.textContent = '';
    }

    else if (value == 'AC') {
        displayArea.textContent = '';
    }

     else if (value == '=') {
        num2 = parseFloat(displayArea.textContent);
        var result = eval(num1 +' '+ operator +' '+ num2);
        displayArea.textContent = '';
        displayArea.textContent = result;

    }

    else {
        displayArea.innerText += value;
    }

}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calc);
};