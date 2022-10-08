# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend mentor Solution URL](https://www.frontendmentor.io/solutions/calculator-app-EFwMmD0V3p)
- Live Site URL: [Live Site URL](https://arnick-s.github.io/Calculator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned switching css files and implemented light theme and dark theme in my calculator.
Here is the JavaScript code of the same

```js

let style1_path = "style1.css"
let style2_path = "style2.css"
let style3_path = "style3.css"

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = style1_path;

let head = document.getElementsByTagName('head')[0];
head.appendChild(link);

let curr_theme;

function apply_style1(){
    curr_theme = 1;
    link.href = style1_path;
}
function apply_style2(){
    curr_theme = 2;
    link.href = style2_path;
}
function apply_style3(){
    curr_theme = 3;
    link.href = style3_path;
}
```

### Useful resources

- [CSS Tricks flex container and shadow implementation](https://css-tricks.com/almanac/properties/b/box-shadow/) - This helped me for applying shadow on keypad of my calculator.

## Author

- Frontend Mentor - [@arnicks](https://www.frontendmentor.io/profile/arnicks)

## Acknowledgments

I would like to thanks my friend Aditya for helping me learning HTML,CSS and JavaScript... and implemented it on the same day.