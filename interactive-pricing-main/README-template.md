# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![Mobile viewport](/design/screenshot-mobile.png)
![Mobile viewport - toggle checked](/design/screenshot-mobile-toggle-checked.png)
![Full viewport](/design/screenshot-full.png)
![Full viewport - toggle checked](/design/screenshot-full-toggle-checked.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/angelicamarttins/interactive-pricing/)
- Live Site URL: [Final result in GitHub Pages](https://angelicamarttins.github.io/interactive-pricing/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript Vanilla

### What I learned

In this project, I learned how to style a range slider with a progress bar that transforms its color according to user interaction. To make it possible, I need to use the DOM tree to change dynamically the progress bar width. However, there is a little prank about this range slider because the challenge force us to define steps in range slider. Since you can't define the slider between 0 and 100, I needed to create a object and define the key as the slider value and the value as the pageviews, the price and the value width. In this way, the progress bar width was precisely defined at the same time user interaction. Look the code:

```js
const priceTable = {
    1: ['10K', 8, 0],
    2: ['50K', 12, 25],
    3: ['100K', 16, 50],
    4: ['500K', 24, 75],
    5: ['1M', 36, 100]
}

const sliderInteraction = function() {
    const sliderValue = Number(Object.keys(priceTable).filter(key => key === slider.value));
    
    const progressValue = priceTable[sliderValue][2];    
    progressBar.style.width = `${progressValue}%`;
}
```

I learned a lot about toggle button in CSS. This was my first styling experience with this type of button.
In JavaScript, I've enforced the functions responsible for the DOM tree.
Also, I managed to write the code as clean as possible and tried to define readable identifiers.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
