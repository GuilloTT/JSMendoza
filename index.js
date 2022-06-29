/* 
Comenzando 
Con Javascrip
*/

console.log("hola a todos")

let variable="guillermo";
const edad = 50;

let numero1= 4;
let numero2= 5;

//variables con camelCase y constante con mayusculas

let resultadoSuma = numero1 + numero2;
let resultadoResta = numero1 - numero2;
let resultadoMultiplicacion = numero1 * numero2

const FACTOR = 5;

console.log (resultadoSuma + FACTOR)
console.log (resultadoResta)
console.log(resultadoMultiplicacion)


let num1 = prompt ("ingrese el numero 1");
let num2 = prompt ("ingrese el numero 2");

console.log(parseInt(num1) + parseInt(num2));

let algo = 3

console.log(typeof(algo));

alert("CUIDADO")


/* let verdad = true;
let falso = false;

console.log(verdad);
console.log(falso);

/* //Estructura de condicional if

if(condicion) {
    //codigo a realizar cuando la condicion es verdadera
} */


/* if(true) {
    console.log("la condicion es verdadera");
}

if(edad == 25) {
    console.log("tienes 25");
}

function mensaje() {
    console.log("hola a todos");
}

mensaje ();

function pedirDatos() {

    let nombre = prompt("Hola como estas? Ingresa nombre");
    alert ("El nombres ingresado es = " + nombre);
    
}

pedirDatos (); */

function pedirDatos (nombre) {
    console.log(`Hola como estas ${nombre}`);

}

pedirDatos ("andres");
pedirDatos ("gulle");
pedirDatos ("carlos");

function sumar (num1,num2) {
    return num1 + num2;
}

let resultado = sumar (4,5);
console.log(resultado - 20);


const suma = ( x , y) => { return x + y }

console.log(suma (3,4));


/* for */

for (let i = 0; i < 100; i=i +2) {
    console.log("Buenas gente" , i);
    
}

for (let i = 1; i < 3; i++) {
    alert ("BIENVENIDOS");   
}

let numero = parseInt(prompt("Ingresar el numero"));

for (let i = 1; i <=10; i++) {

    let result=numero * i

    if ( i ===8 ) {
        break;
    }

    alert(numero + "X" + i + "=" + result );

}


//While

let usuario = prompt ("Ingrese su usuario");

while (usuario !="guillermo"){
    alert ("Usuario incorrecto");

    let usuario = prompt ("Ingrese su usuario");
}

alert ("Usuario correcto");

//switch

let entrada = prompt ("Ingrese el monto a pagar")

while (entrada != "ESC") {
    switch (entrada) {
        case "1000":
            alert ("Compra realizada");
            break
        case "1500":

        alert ("Compra realizada");
        break;

        default: 
        alert ("1 ENTRADA $1000, DOS ENTRADAS $1500");
        break;
    }
    entrada = prompt ("Ingresar monto")
}
//Funcion de suma

function calcular (x,z,y) {
    let suma = x + y 
    let resultado = suma * z
    return resultado
}

console.log(calcular(2,3,2));

//Cuenta de Stock de ventas

const stock = (x,y) => x - y ;

let stockInicial = 20;
let stockFinal = 5;

let mercaderiaVendida = stock(stockInicial,stockFinal);


console.log(mercaderiaVendida);




