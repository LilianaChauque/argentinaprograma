// inciso a
let var1;
var1 = 5;

let var2;
var2 = 6;

let var3;
var3 = 10;

let var4;
var4 = 6;

//inciso b
let var5 = var1 + var2;


// inciso c
let var6 = var3 - var4;

//inciso d

let resultadoFinal = var5 * var6;
console.log(resultadoFinal);

//inciso e
let esPar = (resultadoFinal % 2) === 0;

// inciso f
console.log ("Mis variables iniciales fueron: "+var1+ ", " +var2+ ", " +var3+ " y " +var4+ ". La respuesta a verificar si el resultado final es par es: "+esPar);
