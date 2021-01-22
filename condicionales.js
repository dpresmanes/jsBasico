//IF: Valida solamente si es verdadero. (Si es esto )//

if(true) {
    console.log("hola");
}

//ELSE: Valida si es falsa la condicion IF.( Si no es if entonces es Else)//

if (false) {
    console.log("hola");
    
} else {
    console.log("soy falso")
    
}

//Else IF: Valida si las dos condiciones son Falsas.

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion")

}else if (edad >18) {
    console.log("Puedes votar de nuevo");
    
}else {
    console.log("Aun no puedes votar");
}

// Operador ternario para generar una condicion//

//condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno":"No no soy un numero"; 

//piedra papel o tijera//


