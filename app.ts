// BOOLEANOS
var myBool: boolean;
myBool = true;
myBool = false;

// NUMBERS
var num = 2;  //Ya sabe que es tipo Number
var num2 : Number;
num2 = 2;

// STRING
var texto : String;
texto = "Hola";
var texto1 = "Asi tambien se puede";

//ARRAYS
var actividades = [1, 'Hola', true];
actividades.push('Mundo');
actividades.push(2);
actividades.push(false);

var actividades2 : string[] = ["Futbol", "Baloncesto"]; //Asi le digo que es un array de string
actividades2.push("Tenis");

//ANY (Usar poco, siempre que podamos tipar nuestras variables)
var item: any;
item = 'Hola';

//TUPLAS
var arr : [number, number] = [1,2];
var arr2 : [number, String] = [1,'Admin'];

//PROPIOS TIPOS
type Person = {
    name: String;
    age?: number; //OPCIONAL
};

const person : Person = {
    name: 'Jane',
    age: 30,
};

const personTwo : Person  = {
    name: 'Doe',
};

//INTERFACE
interface Persona{
    name: String;
    age?: number;
    sayHello():void;
};

const persona : Persona = {
    name: 'Jane',
    age: 30,
    sayHello: function(){}
};

const personaTwo : Persona  = {
    name: 'Doe',
    sayHello: function(){}
};

//RECORDS
const myObject: Record<any, any> = {}

myObject.name = 'Pepe';
myObject.age = 22;

//UNION
type PersonName = {
    name: string;
};

type PersonAge = {
    age: number;
};

type PersonSayHello = {
    sayHello: () => void;
}

type Persons = PersonName & PersonAge & PersonSayHello;

const Persons: Persons = {
    name: 'Jonh',
    age: 23,
    sayHello: function(){
        console.log('Hola');
    }
};

//OR
type Personas = PersonName | PersonAge | PersonSayHello;

const Personas: Personas = {
    name: 'Jonh',
};
