let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < personas.length; i++) {
 if (personas[i] === "Jose" || personas[i] === "Sofia") {
   rechazados.push(personas[i]);
   
 }
 else {
   admitidos.push(personas[i]);
  
 }
}

let fraseAdmitidos = "La lista de invitados admitidos es:";
console.log (fraseAdmitidos);
for (let i = 0; i < admitidos.length; i++) {  
 console.log(admitidos[i]);
}

let fraseRechazados = "La lista de invitados rechazados es:";
console.log(fraseRechazados);
for (let i = 0; i < rechazados.length; i++) {
 console.log(rechazados[i]);
}


//Extra
admitidos.sort()
 
console.log ("La lista ordenada de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {  
  console.log(admitidos[i]);
 }

 rechazados.sort()
 console.log("La lista ordenada de invitados rechazados es:");
 for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i])
 }
 