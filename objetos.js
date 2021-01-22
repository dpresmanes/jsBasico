var objeto = {}; //Asi se declara un objeto//

var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelAuto : function () {
        console.log(`Auto ${this.modelo} ${this.annio}`) // This es una variable que hace referencia al objeto//
        
    }
}; // Aca tenemos un objeto con 3 propiedades //

miAuto.marca // Con el nombre del objeto.marca traemos un dato especifico del objeto//

