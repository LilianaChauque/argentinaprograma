// Ejercicio 1, inc. 2
const readlineSync = require('readline-sync');

let numero = readlineSync.question("Ingrese un numero: ");
if (numero > 0){
    console.log("El numero es positivo");
}
 
else if (numero == 0){
    console.log("El numero es cero");
}

else{
    console.log("El numero es negativo");
}