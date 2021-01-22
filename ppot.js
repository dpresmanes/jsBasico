
function jugadorVspc (){
var piedra
var papel
var tijera
var jugador 
var pc 

    if (jugador == piedra && pc == piedra) {
        console.log ("esto es un empate");
    } else if (jugador == piedra && pc == papel) {
        console.log ("pierde piedra");     
    }else if (jugador == piedra && pc == papel) {
        console.log ("gana piedra");
        
    }else if (jugador == papel && pc == papel) {
        console.log ("esto es un empate");
    }else if (jugador == papel && pc == tijera) {
        console.log ("gana tijera");  
    } else if (jugador == papel && pc == piedra){
        console.log ("gana papel");
        
    } else if (jugador == tijera && pc == tijera) {
        console.log ("esto es un empate");     
    }else if (jugador == tijera && pc == papel) {
        console.log ("gana tijera");
    }else if (jugador == tijera && pc == piedra) {
        console.log ("pierde tijera");
        
    }
    
}