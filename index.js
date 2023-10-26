// Create the first number input field
const inputField1 = document.createElement("input");
inputField1.type = "number";
inputField1.placeholder = "Enter a number";
inputField1.id = "numberInput1";
document.body.appendChild(inputField1); // Use appendChild instead of prepend

// Create the second number input field
const inputField2 = document.createElement("input");
inputField2.type = "number";
inputField2.placeholder = "Enter another number";
inputField2.id = "numberInput2"; // Use a unique ID, not "numberInput1"
document.body.appendChild(inputField2);

// creating buttons remember to rename them because i kept having to backtrack
const button1 = document.createElement("BUTTON")
document.body.prepend(button1)
button1.innerText = 'Addition'

const button2 = document.createElement("BUTTON")
document.body.prepend(button2)
button2.innerText = 'Subtraction'

const button3 = document.createElement("BUTTON")
document.body.prepend(button3)
button3.innerText = 'multiplication'

const button4 = document.createElement("BUTTON")
document.body.prepend(button4)
button4.innerText = 'division'
/*
const ptag = document.createElement("p")
document.body.append(ptag)
ptag.innerText = 'Result: '
*/
const ptag = document.createElement("p");
const spanResult = document.createElement("span");
spanResult.textContent = 'Result: ';
ptag.appendChild(spanResult);
document.body.appendChild(ptag);

//Chatgpt assisted with the formula below and then i copied it 4 times and did slight changes to the formula depending on the task

button1.addEventListener("click", function () {
    const input1 = parseFloat(document.querySelector("#numberInput1").value);
    const input2 = parseFloat(document.querySelector("#numberInput2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        spanResult.textContent = 'Result: ' + (input1 + input2);
    }
});

button2.addEventListener("click", function () {
    const input1 = parseFloat(document.querySelector("#numberInput1").value);
    const input2 = parseFloat(document.querySelector("#numberInput2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        spanResult.textContent = 'Result: ' + (input1 - input2);
    }
});

button3.addEventListener("click", function () {
    const input1 = parseFloat(document.querySelector("#numberInput1").value);
    const input2 = parseFloat(document.querySelector("#numberInput2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        spanResult.textContent = 'Result: ' + (input1 * input2);
    }
});

button4.addEventListener("click", function () {
    const input1 = parseFloat(document.querySelector("#numberInput1").value);
    const input2 = parseFloat(document.querySelector("#numberInput2").value);
    if (!isNaN(input1) && !isNaN(input2)) {
        if (input2 !== 0) {
            spanResult.textContent = 'Result: ' + (input1 / input2);
        } else {
            spanResult.textContent = 'Result: Division by zero is undefined';
        }
    }
});