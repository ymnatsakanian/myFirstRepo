const elem = document.getElementById('login1');


const counter = { value: 0 };


const button = document.getElementById('button1');

const cell = document.getElementById('qwerty');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//
// setInterval(() => {
//     cell.setAttribute('style', `background-color: ${getRandomColor()}`);
// }, 1);

// const fn = (e) => {
//     document.getElementById('span1').innerHTML = `Coursor is on ${e.layerX} #  ${e.layerY}`;
// }
//
// document.addEventListener("mousemove", fn);

// button.onclick = () => {
//     counter.value = 0;
// };

// setInterval(() => {
//     elem.value = counter.value + ' seconds';
//     counter.value++;
// }, 1);

const resetButton = document.getElementById('reset-button');

const handleReset = () => {
    console.log(99999);
    document.getElementById('form').reset();
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    document.getElementById('form3').reset();
}
resetButton.addEventListener("click", handleReset, false)