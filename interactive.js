// Input
const slider = document.getElementById('slider');
const progressBar = document.getElementById('progress-bar');
const windowWidth = window.innerWidth;
const toggleDiscount = document.getElementsByClassName('toggle__discount')[0]


// Discount span
if(windowWidth >= 730) {
    toggleDiscount.innerHTML = '25% discount'
} /*else {
    toggleDiscount.innerHTML = '-25%'
}*/
// Progress Bar
slider.oninput = function() {
    progressBar.style.width = this.value + '%';
}