//Implícita: Es cuando el mismo lenguaje realiza la coerción.//
var a = 4 + "7";

typeof a

var b = 4*"7";

typeof b

//Explicita: Ocurre cuando nosotros le indicamos al lenguaje que cambie el tipo de valor.//

var a = 20;
var b = a + "";

console.log(b);
//20//
//undefined//

typeof b; 
//"string"//

var c = String(a);
// undefined//
console.log(c);
//20//
//undefined//

var d = Number(c);
//undefined//
typeof d
//number//
