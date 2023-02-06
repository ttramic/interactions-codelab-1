

/*opgave 1 plus minus*/
let myButtonValue = 0;
const myButtonResult = document.getElementById('buttonResult');
const myAddButton = document.getElementById('addButton');
const mySubButton = document.getElementById('subtractButton');


//skriv event listners her

myAddButton.addEventListener("click", function(){
    myButtonValue++;
    showResult(myButtonValue, this)
});

mySubButton.addEventListener("click", function(){
    myButtonValue--;
    showResult(myButtonValue, this)
});

function showResult(value, element){
    console.log("Value:", value)
    console.log("Element:", element)
};  

showResult();  







/* opgave 2 dice*/
const myDiceRes = document.getElementById('diceResult');
const diceButton = document.getElementById('rollDiceOne');


//skriv event listners her







/* opgave 3 key event */

const myLiveText = document.getElementById('myLiveText');
let myLiveTextResult = document.getElementById('tasteResult');

//skriv event listners her







/* support functions-------------------------------------------------------------------------------*/

/* view code*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
function showResult(myData, myElement) {
    myElement.innerHTML = myData;
}




/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

function getRandomNumber(min, max) {
    let myMin = Math.ceil(min);
    let myMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

