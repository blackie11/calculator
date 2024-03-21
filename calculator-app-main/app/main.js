function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = " ";
}
function removeFromDisplay() {
    document.getElementById("display");
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}

// function for theme changing/ toggling
