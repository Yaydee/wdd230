const button = document.querySelector('.btn'); // assigns button var to first item with class of '.btn'

function show() {
    // button.classList.add('newstyle');
    button.classList.toggle('newstyle');
}

button.addEventListener('click', show);

// button.addEventListener('click', () => {
//     button.classList.add('newstyle');
// })

// hamburger menu / reponsive menu

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

// windchill calculation

const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;
console.log(temp);
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));
console.log(chill);

if (temp <= 50 && ws >= 3) {
    document.querySelector('.wc') = chill;
    windchill
};

// storage local and session

localStorage.setItem('name', 'Kyle Kerr - Permament');
localStorage.setItem('class', 'WDD230 - Not Permament');