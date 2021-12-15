// Price table and progress bar width
const priceTable = {
    1: ['10K', 8, 0],
    2: ['50K', 12, 25],
    3: ['100K', 16, 50],
    4: ['500K', 24, 75],
    5: ['1M', 36, 100]
}

// Getting input
const windowWidth = window.innerWidth; // Catch the viewport size
const views = document.querySelector('.views__result'); // Show the views result
const price = document.querySelector('.price__result'); // Show the price result
const slider = document.querySelector('.range-slider__input'); //Input range slider
const progressBar = document.querySelector('.progress-bar'); //Responsible for the progress of the slider range bar
const toggleBtn = document.querySelector('#toggle-btn'); // Toggle button
const toggleDiscount = document.querySelector('.toggle__discount'); // Discount span

// Function responsible for style the discount span according to the window width
const discountSpan = () => windowWidth >= 730 
? toggleDiscount.innerHTML = '25% discount'
: toggleDiscount.innerHTML = '-25%';

// Function resposible for the component feature
const sliderInteraction = function() {
    
    // Variables
    const sliderValue = Number(Object.keys(priceTable).filter(key => key === slider.value));
    const finalViews = priceTable[sliderValue][0];
    const finalPrice = (priceTable[sliderValue][1]).toFixed(2);
    const finalPriceDiscount = (finalPrice - (finalPrice * 0.25)).toFixed(2);
   
    // Progress bar before the thumb
    const progressValue = priceTable[sliderValue][2];    
    progressBar.style.width = `${progressValue}%`;

    // Results: views and price
    views.innerHTML = `${finalViews} PAGEVIEWS`;
    toggleBtn.checked 
    ? price.innerHTML = `$${(finalPriceDiscount)}` 
    : price.innerHTML = `$${finalPrice}`;
};

discountSpan();
slider.oninput = sliderInteraction;
toggleBtn.addEventListener('change', sliderInteraction);