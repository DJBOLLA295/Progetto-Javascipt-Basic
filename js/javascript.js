const button1 = document.createElement("button");
const button2 = document.createElement("button");
const div3 = document.querySelector('.div3');

button1.innerText = '+';
button2.innerText = '-';


div3.appendChild(button1);
div3.appendChild(button2);


button1.setAttribute("class", "button1");
button2.setAttribute("class", "button2");




let counterValue = 0;
const counterElement = document.getElementById('counter');

button1.addEventListener('click', () => {
    counterValue++;
    counterElement.innerText = counterValue;
});
button2.addEventListener('click', () => {
    counterValue--;
    counterElement.innerText = counterValue;
});

