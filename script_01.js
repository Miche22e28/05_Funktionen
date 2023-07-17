"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken



// Funkionsrumpf (body) | callee
// Funktionsdeklaration
// function test()
// {
//     console.log("Hallo Tobias!");
// }

// Funktionsrumpf (call)
// test();

/***** Funktion 02a *****/
// 2a. Parametrisierung + Datenbübergabe von INNEN


// ausgabeNamen();

// function ausgabeNamen() {
    // console.log("Hallo Tobias!");
    // console.log("Hallo Cagri!");
    // console.log("Hallo Yasmeen!");
// }

// ausgabeNamen();

// function augabeNamen() {

//     let firstName = "Nico";
//     console.log("Hallo " + firstName +"!");
// }
// Fehler --> SCOPE! (Gültigkeit von Variablen)
// console.log(firstName);

// innerhalb der Funktion sichtbar | außerhalb der Funktion ungültig

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Sohrab"); // call + Argument(e)
ausgabeNamen2("Nico");
ausgabeNamen2("Yasmenn");
// Argfumente sind Daten für Parameter

// Funktion mit Parameter(n)
function ausgabeNamen2 (firstName) {
    console.log("Hallo " + firstName +"!");
}

