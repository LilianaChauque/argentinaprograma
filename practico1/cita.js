
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo"

// inciso a
let tamañoDeCita = cita.length;
console.log ("El tamaño de la cita es: ",tamañoDeCita);

// inciso b
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " ,indice);

// inciso c
let citaRevisada = cita.slice(0,-13);
console.log(citaRevisada);
