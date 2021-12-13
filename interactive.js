// Price table
const priceTable = {
    1: ['10K', 8],
    2: ['50K', 12],
    3: ['100K', 16],
    4: ['500K', 24],
    5: ['1M', 36]
}

// Input
const windowWidth = window.innerWidth; // Catch the viewport size
const views = document.querySelector('.views__result'); // Show the views result
const price = document.querySelector('.price__result'); // Show the price result
const slider = document.querySelector('.range-slider__input'); //Input range slider
const progressBar = document.querySelector('.progress-bar'); //Responsible for the progress of the slider range bar
const toggleBtn = document.querySelector('#toggle-btn'); // 
const toggleDiscount = document.querySelector('.toggle__discount'); // Discount span

const pageLoadedState = function() {
    discountSpan();
    // const checkbox = document.querySelector()
};

// Function responsible for style the discount span according to the window width
const discountSpan = () => windowWidth >= 730 
? toggleDiscount.innerHTML = '25% discount'
: toggleDiscount.innerHTML = '-25%';

// Function responsible for 

const toggleAction = () => toggleBtn.checked 
? slider.oninput = sliderInteraction(0.25)
: slider.oninput = sliderInteraction();

const sliderInteraction = function(discount = 1) {
    progressBar.style.width = `calc(${this.value * 20}% - 35px)`; // Progress bar before the thumb

    const sliderValue = Number(Object.keys(priceTable).filter(key => key === slider.value));
    const finalViews = priceTable[sliderValue][0];
    const finalPrice = priceTable[sliderValue][1];
    const finalPriceDiscount = finalPrice * discount
    views.innerHTML = `${finalViews} PAGEVIEWS`;
    discount === 1 ? `$${finalPrice}` : `$${(finalPriceDiscount)}`;
    console.log(finalPrice, finalPriceDiscount, discount)
}
 

toggleBtn.addEventListener('change', toggleAction);

document.addEventListener('DOMContentLoaded', pageLoadedState);

/* Falta organizar a lógica do que será chamado primeiro: o slider ou o toggle 
10k  => 8  => 6
50k  => 12 => 9
100k => 16 => 12
500k => 24 => 18
1m   => 36 => 27
https://stackoverflow.com/questions/44565816/javascript-toggle-switch-using-data
https://www.youtube.com/watch?v=81aCHoCqboQ
*/