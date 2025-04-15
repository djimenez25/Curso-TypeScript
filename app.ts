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

//FUNCIONES
//Parametros obligatorios
function add(a: number, b: number): number{
    return a + b;
}

const result = add(1,2);

//Parametros opcionales
function add1(a: number, b: number = 1): number{ //Si no le pasas nada b por defecto es 1
    return a + b;
}

const result1 = add1(1);

//ASIGNAR TIPO A UNA FUNCION
let combineValues: Function;

function add2(a:number, b: number): number{
    return a + b;
}

function sayHello(){
    console.log('Hola');
}

let user = 'Bob';

if(user === 'Pep'){
    combineValues = add2;
}else{
    combineValues = sayHello
}

combineValues(1,2);

//NEVER
// function generateError(message: string): never | boolean{
//     if(message === 'hola'){
//         return true;
//     }
//     throw new Error(message);
// }

// generateError('Opsss!!. Ha ocurrido un error');

//CLASES Y HERENCIA
class Person3{
    private gender: string;
    constructor(gender: string){
        this.gender = gender;
    }

    public sayHello(){
        console.log('Hello');
    }

    setGender(gender: string){
        this.gender = gender;
    }

    getGender(){
        return this.gender;
    }
}

const person3 = new Person3('male');

//MODIFICADORES DE ACCESO
person3.setGender('female');
person3.sayHello();

console.log(person3.getGender());

//PROPIEDADES ESTATICAS Y READONLY
class Person4{
    protected gender: string;

    public readonly activities: string[]; //Solo de tipo lectura, no podre modificarlo

    static age = 20;

    constructor(gender: string){
        this.gender = gender;
        this.activities = ['Sports']
    }

    public sayHello(){
        console.log('Hello');
    }

    setGender(gender: string){
        this.gender = gender;
    }

    getGender(){
        return this.gender;
    }
}

const person4 = new Person4('male');
console.log(Person4.age);
console.log(person4.activities);

//HERENCIA
class Person5{
    public gender: string;

    constructor(gender: string){
        this.gender = gender;
    }

    sayHello() {
        console.log(`Soy ${this.gender}`);
    }
}

class Developer extends Person5 {   }

const person5 = new Person5('male');
const dev = new Developer('female');

console.log(person5.gender, dev.gender);
console.log(person5.sayHello(), dev.sayHello());

//INTERFACES
interface IPerson6{
    gender: string;
    sayHi: () => void;
}

interface IPerson6SayHello{
    sayHello: () => void;
}

class Person6 implements IPerson6, IPerson6SayHello{
    public gender: string;

    constructor(gender: string){
        this.gender = gender;
    }

    sayHi() : void{
        console.log('Hola');
    }

    sayHello () {
        console.log('Nuevo hola');
    }
}

const person6 = new Person6('male');

