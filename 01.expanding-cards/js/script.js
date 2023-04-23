// DOM elements
const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');

// Utility functions
const clickCards=(i)=>{
    removeActiveClass();
    i.classList.add('active');
};

const removeActiveClass=()=>{
    cards.forEach(card => {
         card.classList.remove('active');
    })
};

const clickMode=(i)=>{
    if(body.className=='light'){
        i.textContent=`Light`;
        i.classList.replace('light-button','dark-button');
        body.classList.replace('light','dark');
    }
    else{
        i.textContent=`Dark`;
        i.classList.replace('dark-button','light-button');
        body.classList.replace('dark','light');
    }
};

// Execute Fuctions