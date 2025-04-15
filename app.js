// BOOLEANOS
var myBool;
myBool = true;
myBool = false;
// NUMBERS
var num = 2; //Ya sabe que es tipo Number
var num2;
num2 = 2;
// STRING
var texto;
texto = "Hola";
var texto1 = "Asi tambien se puede";
//ARRAYS
var actividades = [1, 'Hola', true];
actividades.push('Mundo');
actividades.push(2);
actividades.push(false);
var actividades2 = ["Futbol", "Baloncesto"]; //Asi le digo que es un array de string
actividades2.push("Tenis");
//ANY (Usar poco, siempre que podamos tipar nuestras variables)
var item;
item = 'Hola';
//TUPLAS
var arr = [1, 2];
var arr2 = [1, 'Admin'];
var person = {
    name: 'Jane',
    age: 30,
};
var personTwo = {
    name: 'Doe',
};
;
var persona = {
    name: 'Jane',
    age: 30,
    sayHello: function () { }
};
var personaTwo = {
    name: 'Doe',
    sayHello: function () { }
};
//RECORDS
var myObject = {};
myObject.name = 'Pepe';
myObject.age = 22;
var Persons = {
    name: 'Jonh',
    age: 23,
    sayHello: function () {
        console.log('Hola');
    }
};
var Personas = {
    name: 'Jonh',
};
//FUNCIONES
//Parametros obligatorios
function add(a, b) {
    return a + b;
}
var result = add(1, 2);
//Parametros opcionales
function add1(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
var result1 = add1(1);
