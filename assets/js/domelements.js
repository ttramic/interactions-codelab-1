
/*
brug document.getElementById() til at finde dom elementer der er røde og gule.
consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/

document.getElementById(redFigure);
document.getElementById(yellowFigure);

console.log(redFigure, yellowFigure);
 



/*
brug document.getElementsByClassName() til at finde dom elementer
og consol logge dem, så du kan se detaljer om dem.
skriv din kode her
*/

let myFigure = document.getElementsByClassName('myFigure');
console.log(myFigure);


/*
find dom elementer med id redFigure og yellowFigure og brug innerHTML til at ændre deres tekst
skriv din kode her.
*/

document.getElementById("redFigure").innerHTML = "Yellow";
document.getElementById("yellowFigure").innerHTML = "Red"




