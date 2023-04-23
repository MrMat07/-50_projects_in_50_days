// DOM elements
const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

// variables
let currentActive = 1;

const clickNext=()=>{
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    };

    update();
};

const clickPrev=()=>{
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    };

    update();
};

// Utility functions
const update=()=> {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        };
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    };
};