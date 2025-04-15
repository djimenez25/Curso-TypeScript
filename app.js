var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//ASIGNAR TIPO A UNA FUNCION
var combineValues;
function add2(a, b) {
    return a + b;
}
function sayHello() {
    console.log('Hola');
}
var user = 'Bob';
if (user === 'Pep') {
    combineValues = add2;
}
else {
    combineValues = sayHello;
}
combineValues(1, 2);
//NEVER
// function generateError(message: string): never | boolean{
//     if(message === 'hola'){
//         return true;
//     }
//     throw new Error(message);
// }
// generateError('Opsss!!. Ha ocurrido un error');
//CLASES Y HERENCIA
var Person3 = /** @class */ (function () {
    function Person3(gender) {
        this.gender = gender;
    }
    Person3.prototype.sayHello = function () {
        console.log('Hello');
    };
    Person3.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person3.prototype.getGender = function () {
        return this.gender;
    };
    return Person3;
}());
var person3 = new Person3('male');
//MODIFICADORES DE ACCESO
person3.setGender('female');
person3.sayHello();
console.log(person3.getGender());
//PROPIEDADES ESTATICAS Y READONLY
var Person4 = /** @class */ (function () {
    function Person4(gender) {
        this.gender = gender;
        this.activities = ['Sports'];
    }
    Person4.prototype.sayHello = function () {
        console.log('Hello');
    };
    Person4.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person4.prototype.getGender = function () {
        return this.gender;
    };
    Person4.age = 20;
    return Person4;
}());
var person4 = new Person4('male');
console.log(Person4.age);
console.log(person4.activities);
//HERENCIA
var Person5 = /** @class */ (function () {
    function Person5(gender) {
        this.gender = gender;
    }
    Person5.prototype.sayHello = function () {
        console.log("Soy ".concat(this.gender));
    };
    return Person5;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Person5));
var person5 = new Person5('male');
var dev = new Developer('female');
console.log(person5.gender, dev.gender);
console.log(person5.sayHello(), dev.sayHello());
var Person6 = /** @class */ (function () {
    function Person6(gender) {
        this.gender = gender;
    }
    Person6.prototype.sayHi = function () {
        console.log('Hola');
    };
    Person6.prototype.sayHello = function () {
        console.log('Nuevo hola');
    };
    return Person6;
}());
var person6 = new Person6('male');
