// *Variables

var numeroA = 230; /* *Puede cambiarse el valor en cualquier momento */
var textoA = "Hola";
console.log(numeroA);
console.log(textoA);

let numeroB = 330; /* *Solo puede cambiarse de esta forma */
numeroB = 340;
console.log(numeroB);

const pi = 3.14; /* *No puede cambiarse */
console.log(pi);

// * Scope y hoisting

{
  var a = 10;
}
console.log(a); /* es global */

{
  let b = 10;
  console.log(b); /* tiene que ser adentro porque es local */
}

{
  const c = 10;
  console.log(c); /* tiene que ser adentro porque es local */
}

// * Operadores

let n1 = 10;
let n2 = 20;
let t1 = "Lionel";
let t2 = "Messi";

let suma = n1 + n2;
console.log(suma);

let suma2 = t1 + " " + t2;
console.log(suma2);

let resta = n1 - n2;
console.log(
  resta
); /* Si quisiera restar texto, me aparece NaN (not a number) */

let multiplicacion = n1 * n2;
console.log(multiplicacion);

let division = n1 / n2;
console.log(division);

// * Incrementador y decrementador

console.log(++n1); /* Esto suma uno */

let incrementador = ++n1 * n2; /* acá suma 1, y después multiplica */
console.log(incrementador);

let incrementador2 = n1++ * n2; /* acá multiplica, y después suma 1 */
console.log(incrementador2);

// * Operadores de comparación

/* De igualdad */
console.log("igualdad");
console.log(5 == 5);
console.log(5 == "5");

/*  Igualdad estricta */
console.log("igualdad estricta");
console.log(5 === 5);
console.log(5 === "5");

/* Desigualdad */
console.log("Desigualdad");
console.log(5 != 5);
console.log(5 != "5");

/* Desigualdad estricta */
console.log("Desigualdad estricta");
console.log(5 !== 5);
console.log(5 !== "5");

/* Mayor que */
console.log("Mayor que");
console.log(10 > 5);
console.log(5 > 5);

console.log("Mayor o igual que");
console.log(10 >= 5);
console.log(5 >= 5);

/* Menor que */
console.log("Menor que");
console.log(10 < 5);
console.log(5 < 5);

console.log("Menor o igual que");
console.log(10 <= 5);
console.log(5 <= 5);

/* And */
console.log("And");
console.log(5 < 10 && 10 > 5);

/* Or */
console.log("Or");
console.log(5 > 10 || 10 > 5);

/* Negar */
console.log("Negar");
let algoTrue = 5 < 10;
console.log(!algoTrue);
