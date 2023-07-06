// 2

function obtenerJugadaComputadora() {
    let jugada = ["piedra", "papel", "tijeras"]
    let jugadaCompu = (jugada[Math.floor(Math.random()*3)]);
    return jugadaCompu;        
}



// 3 

const readlineSync = require('readline-sync');

function obtenerJugadaUsuario(){
    const ingresa = readlineSync.question('Juguemos un juego!! Ingresa tu eleccion, piedra, papel o tijeras: ').toLowerCase();
    if(ingresa === "piedra" || ingresa === "papel" || ingresa === "tijeras"){
        let jugadaUsuario = ingresa;
        
        return jugadaUsuario;
    } 
    else{
        console.log("Esa opción no es válida.")
    }
}


// 4

function determinarGanador(compu, usuario){
   
    if((compu === "piedra" && usuario === "tijeras") || (compu === "papel" && usuario === "piedra") || (compu === "tijeras" && usuario === "papel")){
       
       return "Gana la computadora"
    }
    else if((usuario === "piedra" && compu === "tijeras") || (usuario === "papel" && compu === "piedra") || (usuario === "tijeras" && compu === "papel")){
      
       return "Gana el Usuario"
    }
    else {
        
       return "Empate"
    }
    
}


 

 // 5

 // a
 
 let jugadaComputador = obtenerJugadaComputadora();

 // b
 let jugadaUsuario = obtenerJugadaUsuario();

 // c
 let ganaPartida = determinarGanador(jugadaComputador, jugadaUsuario);

 

 // 6

 console.log("La computadora eligio: %s. El usuario eligio: %s. El resultado fue: %s. " ,jugadaComputador ,jugadaUsuario ,ganaPartida);
 