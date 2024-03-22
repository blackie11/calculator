# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   See the size of the elements adjust based on their device's screen size
-   Perform mathmatical operations like addition, subtraction, multiplication, and division
-   Adjust the color theme based on their preference
-   **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/Screen%20Shot%202024-03-22%20at%2005.13.39.png)
![](./images/Screen%20Shot%202024-03-22%20at%2005.19.19.png)

### Links

-   Solution URL: [https://github.com/blackie11/calculator.git]
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Responsive Design
-   [vanilla Javascript](https://) - JS
-   [Scss](https://) - Sass
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to toggle a theme and also change the theme dynamically using Javascript
i also learned how to make a grid layout with ease using the repeat() function of css, while also making use of css custom properties mixed with the variable in scss to produce the theme

To see how you can add code snippets, see below:

```html
<div class="header">
    <h2>calc</h2>
    <div class="theme-con">
        <span class="theme-heading">THEME</span>
        <div class="theme-num">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
        <div class="slider-container">
            <input
                type="range"
                min="1"
                max="3"
                value="1"
                class="slider"
                id="themeSlider"
            />
        </div>
    </div>
</div>
```

```css
.slider-container {
    width: 100%;
    .slider {
        -webkit-appearance: none;
        width: 85%;
        height: 15px;
        border-radius: 5px;
        background: var(--keypad-bg);
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        cursor: pointer;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--toggle-bg);
        cursor: pointer;
    }
}
:root {
    --theme-2-main-bg: hsl(0, 0%, 90%);
    --theme-2-toggle-bg: hsl(0, 5%, 81%);
    --theme-2-keypad-bg: hsl(0, 5%, 81%);
    --theme-2-screen-bg: hsl(0, 0%, 93%);
    --theme-2-key-bg: hsl(185, 42%, 37%);
    --theme-2-key-shadow: hsl(185, 58%, 25%);
    --theme-2-toggle-key-bg: hsl(25, 98%, 40%);
    --theme-2-toggle-key-shadow: hsl(25, 99%, 27%);
    --theme-2-function-key-bg: hsl(45, 7%, 89%);
    --theme-2-function-key-shadow: hsl(35, 11%, 61%);
    --theme-2-text-color: hsl(60, 10%, 19%);
    --theme-2-text-white: hsl(0, 0%, 100%);
}
body {
    // Default theme
    --main-bg: var(--theme-1-main-bg);
    --toggle-bg: var(--theme-1-toggle-bg);
    --keypad-bg: var(--theme-1-keypad-bg);
    --screen-bg: var(--theme-1-screen-bg);
    --key-bg: var(--theme-1-key-bg);
    --key-shadow: var(--theme-1-key-shadow);
    --toggle-key-bg: var(--theme-1-toggle-key-bg);
    --toggle-key-shadow: var(--theme-1-toggle-key-shadow);
    --function-key-bg: var(--theme-1-function-key-bg);
    --function-key-shadow: var(--theme-1-function-key-shadow);
    --text-color: var(--theme-1-text-color);
    --text-white: var(--theme-1-text-white);
}
```

```js
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
```

### Continued development

I will now focus on using javascript and other js libray to modify the DOM dynamically while also learning how to fetch json file fro some API .

### Useful resources

-   [stackoverflow](https://www.stackoverflow.com) - This helped me twhen i was researching on other solution to this problem to compare and contrast my work. it also help in providing solution to some bugs i faced on completion of the project.
-   [youtube](https://www.youtube.com) - This is an amazing resource libray that helped me when i was trying to learn a new concept that i needed to know to make this project a success. it helped me finally understand how the eval( ) works.

## Author

-   Website - [https://blackie-portfolio.vercel.app/](https://www.your-site.com)
-   Frontend Mentor - [@blackie11](https://www.frontendmentor.io/profile/yourusername)
-   Twitter - [@GreatAhiakwo](https://www.twitter.com/yourusername)

## Acknowledgments

I want to medium to say a big thank you to my parent for all the effort and support, to my siblings for always encouraging me to my friends for also beliving in me.
