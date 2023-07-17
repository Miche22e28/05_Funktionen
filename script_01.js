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

// ausgabeNamen2("Sohrab"); // call + Argument(e)
// ausgabeNamen2("Nico");
// ausgabeNamen2("Yasmenn");
// Argfumente sind Daten für Parameter

// Funktion mit Parameter(n)
// function ausgabeNamen2 (firstName) {
//     console.log("Hallo " + firstName +"!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Name?"));

// function ausgabeNamenParams(firstName, familyName) {
//     console.log("Hallo " + firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams("Max","Mütze");

// function ausgabeNamenParams(firstName, familyName) 

/***** Funktionen 03b *****/
// 03b Funktionalitäten --> Funktionen| return

// 1. Funktionalität: string composing

 output(getString("Max","Mütze"))
 output(getString(prompt("Vorname?"),prompt("Name?")));

 function getString(firstName, familyName) {
    const GAP = " ";  // screaming snake case
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; // daten werden an den Ort des calls geschickt
    console.log("Hi");  // return bricht die Fkt ab!
}


// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}
