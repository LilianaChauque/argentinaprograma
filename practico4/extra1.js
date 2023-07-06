const piedra = "piedra";
const papel = "papel";
const tijeras= "tijeras";
const ganaCompu = "Gana la computadora :(";
const ganaUsuario = "Gana usuario!!! :D";
const empate = "Empate :|";


function obtenerJugadaComputadora() {
    let jugada = [piedra, papel, tijeras]
    let jugadaCompu = (jugada[Math.floor(Math.random()*3)]);
    return jugadaCompu;        
}



const readlineSync = require('readline-sync');

function obtenerJugadaUsuario(){
     const ingresa = readlineSync.question('Juguemos un juego!! Ingresa tu eleccion, piedra, papel o tijeras: ').toLowerCase();

    if(ingresa === piedra || ingresa === papel || ingresa === tijeras){
        let jugadaUsuario = ingresa; 
        return jugadaUsuario;
    } 
    else{
        console.log("Esa opción no es válida.")
    }
}


function determinarGanador(compu, usuario){
   
    if((compu === piedra && usuario === tijeras) || (compu === papel && usuario === piedra) || (compu === tijeras && usuario === papel)){
       
       return ganaCompu;
    }
    else if((usuario === piedra && compu === tijeras) || (usuario === papel && compu === piedra) || (usuario === tijeras && compu === papel)){
      
       return ganaUsuario;
    }
    else {
        
       return empate;
    }
    
}
  
 let jugadaComputador = obtenerJugadaComputadora();
 let jugadaUsuario = obtenerJugadaUsuario();
 let ganaPartida = determinarGanador(jugadaComputador, jugadaUsuario);

 
 console.log("La computadora eligio: %s" ,jugadaComputador);
 console.log("El usuario eligio: %s",jugadaUsuario);
 console.log("El resultado fue: %s" ,ganaPartida);



