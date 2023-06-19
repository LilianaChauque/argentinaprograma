const readlineSync = require('readline-sync');

let mes = readlineSync.question("Ingrese un numero del 1 al 12, correspondiendo este a un mes que desee: ");
let meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
let dias= [31,28,31,30,31,30,31,31,30,31,30,31]
if (mes>=1 && mes<=12){
console.log("La cantidad de dias del mes de %s es %i ", meses[mes-1], dias[mes-1]);  
 }
else {
   console.log( "Este número es inválido.");
}
