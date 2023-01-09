let date = new Date();
let year = date.getFullYear();

console.log(year);
console.log(date);

document.querySelector('.year').innerHTML = year;

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('.updated').textContent = currentdate;