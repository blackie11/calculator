const themeRange = document.getElementById("themeSlider");
const title = document.querySelector(".header");

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
        document.getElementById("display").value = "Error";
    }
}

// Function to apply the selected theme
function applyTheme() {
    const themeValue = parseInt(themeRange.value);
    const selectedTheme = "theme-" + themeValue;
    console.log(themeValue);
    document.body.className = selectedTheme;
    if (themeValue === 2 || themeValue === 3) {
        const display = document.getElementById("display");
        display.style.setProperty("color", "var(--text-color)");
        title.style.setProperty("color", "var(--text-color)");
    } else {
        display.style.setProperty("color", "var(--text-white)");
        title.style.setProperty("color", "var(--text-white)");
    }
}
// Apply theme initially
applyTheme();
// Listen to changes in the input range
themeRange.addEventListener("input", applyTheme);
