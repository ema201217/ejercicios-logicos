// 1
// Hacer un programa para ingresar por teclado un número y luego emitir por pantalla un cartel aclaratorio indicando si el mismo es positivo, negativo o cero.

const isNumber = (numero) =>
  numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";

// console.log(isNumber(2));

// 2
// Hacer un programa para ingresar por teclado dos números y luego informar por pantalla con un cartel aclaratorio si el primer número es múltiplo del segundo.

const isMultiplo = (n1, n2) => {
  return n1 % n2 === 0
    ? `El numero ${n1} es múltiplo de ${n2}`
    : `El numero ${n1} NO es múltiplo de ${n2}`;
};

// console.log(isMultiplo(77, 6));
// console.log(isMultiplo(12, 6));
// console.log(isMultiplo(18, 9));

// 3
// Hacer un programa para ingresar por teclado un número y luego informar por pantalla con un cartel aclaratorio si el mismo es par o impar.

const parOrImpar = (numero) =>
  numero % 2 === 0
    ? `El numero ${numero} es par`
    : `El numero ${numero} es impar`;

// console.log(parOrImpar(10));
// console.log(parOrImpar(102));
// console.log(parOrImpar(95));

// 4
// Hacer un programa para ingresar por teclado dos números y luego informar por pantalla la diferencia absoluta entre ambos. Ejemplo 1: Si se ingresan 3 y 8, se emite 5. Si se ingresan 8 y 3, se emite 5. Ejemplo 2: Si se ingresan -3 y 9, se emite 12. Si se ingresan -12 y -1, se emite 11.

const diferencias = (n1, n2) => {
  let counter = 0;
  const min = n1 < n2 ? n1 : n2;
  const max = n1 > n2 ? n1 : n2;

  for (let i = min; i <= max; i++) {
    if (i != max) {
      counter++;
    }
  }
  return counter;
};

// console.log(diferencias(3, 8));
// console.log(diferencias(8, 3));
// console.log(diferencias(-3, 9));
// console.log(diferencias(-12, -1));

// 5
// Un negocio de perfumería efectúa descuentos según el importe de la venta. - Si el importe es menor a $100 aplicar un descuento del 5% - Si el importe es entre $100 y hasta $500 aplicar un descuento del 10% - Si el importe es mayor a $500 aplicar un descuento del 15% Hacer un programa donde se ingresa el importe original sin descuento y que se informe por pantalla el importe con el descuento ya aplicado.

const perfumeria = (price) => {
  const discount = price < 100 ? 5 : price > 100 && price <= 500 ? 10 : 15;
  const result = price - (price * discount) / 100;
  return `El precio con descuento es de ${result} y sin el descuento seria ${price}`;
};

// console.log(perfumeria(400));

// 6
// Hacer un programa para ingresar por teclado tres números y luego determinar e informar con una leyenda aclaratoria si los tres son iguales entre sí, caso contrario no emitir nada. Ayuda: Si A es igual a B y B es igual a C, entonces A y C son iguales.

const sonIguales = (n1, n2, n3) =>
  n1 === n2 && n2 === n3 ? "Los números son iguales" : "";

// console.log(sonIguales(10, 20, 10));
// console.log(sonIguales(10, 10, 10));

// 7
// Hacer un programa para ingresar por teclado tres números e informar con una leyenda aclaratoria si los tres son todos distintos entre sí, caso contrario no emitir nada. Ayuda: Si A es distinto de B y B es distinto de C, eso no significa que A y C sean distintos. Ejemplo: A=8, B=6 y C=8.

const sonDistintos = (n1, n2, n3) =>
  n1 !== n2 && n2 !== n3 ? "Los números son distintos" : "";

// console.log(sonDistintos(10, 20, 10));
// console.log(sonDistintos(8, 8, 8));

// 8
// Basado en los 2 ejercicios anteriores, hacer un programa para ingresar por teclado la longitud de los tres lados de un triángulo y luego listar que tipo de triángulo es:
// - Equilátero: si los tres lados son iguales.
// - Isósceles: si dos de los tres lados son iguales.
// - Escaleno: si los tres lados son distintos entre sí.

const triangulos = (l1, l2, l3) =>
  l1 == l2 && l2 == l3 && l1 == l3
    ? "Equilátero"
    : l1 == l2 || l2 == l3 || l1 == l3
    ? "Isósceles"
    : "Escaleno";

// console.log(triangulos(10, 20, 10));
// console.log(triangulos(10, 10, 10));
// console.log(triangulos(10, 20, 30));
// 9
// Hacer un programa para ingresar tres números y listar el máximo de ellos.

const elMayor = (n1, n2, n3) => (n1 > n2 ? n1 : n2 > n3 ? n2 : n3);

// console.log(elMayor(20, 30, 111));
// console.log(elMayor(2, 10, 5));
// console.log(elMayor(27, 4, 21));

// 10
// Hacer un programa para ingresar cinco números y listar el máximo de ellos.

const elMayor2 = (n1, n2, n3, n4, n5) => {
  let arr = [n1, n2, n3, n4, n5];
  let mayor = 0;
  arr.forEach((n) => {
    if (mayor === 0 || mayor < n) {
      mayor = n;
    }
  });
  return mayor;
};

// console.log(elMayor2(20, 30, 111, 900, 20));
// console.log(elMayor2(2, 10, 5, 102, 34));
// console.log(elMayor2(27, 4, 21, 29, 3));

// 11
// Hacer un programa para ingresar cinco números y listar cuántos de esos cinco números son positivos.

const contadorPositivos = (n1, n2, n3, n4, n5) => {
  let arr = [n1, n2, n3, n4, n5];
  let contador = 0;
  arr.forEach((n) => {
    n > 0 && contador++;
  });
  return contador;
};

// console.log(contadorPositivos(20, 30, 111, -900, 20));
// console.log(contadorPositivos(-2, -10, 5, -102, 34));
// console.log(contadorPositivos(27, 4, -21, -29, 3));

// 12
// Hacer un programa para leer tres números diferentes y determinar e informar el número del medio. Ejemplo: si se ingresan 6, 10, 8, se emitirá 8.

const elMedio = (n1, n2, n3) => {
  const min = n1 < n2 && n1 < n3 ? n1 : n2 < n1 && n2 < n3 ? n2 : n3;
  const max = n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 > n3 ? n2 : n3;
  const medium = min < n1 && max > n1 ? n1 : min < n2 && max > n2 ? n2 : n3;
  return medium;
};

// console.log(elMedio(6, 10, 8));
// console.log(elMedio(12, 10, 23));
// console.log(elMedio(62, 13, 87));

// 13
// Hacer un programa para ingresar por teclado la fecha de nacimiento de una persona, ingresando día, mes y año como 3 datos individuales. Luego ingresar la fecha actual ingresando día, mes y año como 3 datos individuales. Calcular luego la edad en años de esa persona y listarlo por pantalla.

// Ejemplo 1. Si se ingresa como fecha de nacimiento: 3/12/2000 y la fecha actual es 26/2/2019 la edad de esa persona es 18 ya que los 19 recién los cumple en diciembre.

// Ejemplo 2. Si se ingresa como fecha de nacimiento: 3/1/2000 y la fecha actual es 26/2/2019 la edad de esa persona es 19.

//Ejemplo 3. Si se ingresa como fecha de nacimiento: 28/2/2000 y la fecha actual es 26/2/2019 la edad de esa persona es 18 ya que le faltan 2 días para cumplir los 19 años.

const calcularAnios = (fechaNac, fechaActual) => {
  fechaNac = fechaNac.split("/").map((n) => +n);
  fechaActual = fechaActual.split("/").map((n) => +n);
  let edad = fechaActual[2] - fechaNac[2];
  if (
    fechaNac[1] > fechaActual[1] ||
    (fechaActual[1] === fechaNac[1] && fechaNac[0] > fechaActual[0])
  ) {
    edad -= 1;
  }
  return `La persona tiene ${edad} años`;
};

console.log(calcularAnios("3/12/2000", "26/2/2019"));
console.log(calcularAnios("3/1/2000", "26/2/2019"));
console.log(calcularAnios("28/2/2000", "26/2/2019"));
console.log(calcularAnios("3/12/2011", "25/5/2022"));

// 14
// Un año es bisiesto si es múltiplo de 4, exceptuando a los años que son múltiplos de 100 pero que no sean múltiplos de 400. Esto último significa que el año 1900 no es bisiesto, pero el año 2000 si lo es. Hacer un programa para que ingresar un año y listar por pantalla si es bisiesto o no lo es.

// Ejemplo 1. Si se ingresa el año 2020 se indicará como bisiesto.
// Ejemplo 2. Si se ingresa el año 2019 se indicará como no bisiesto.
// Ejemplo 3. Si se ingresa el año 1800 o 1900 se indicará como no bisiesto.
// Ejemplo 4. Si se ingresa el año 1600 o 2000 se indicará como bisiesto.

const isBisiesto = (anio) => {
  let isBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  return isBisiesto;
};

console.log(isBisiesto(2020));
console.log(isBisiesto(2019));
console.log(isBisiesto(1800));
console.log(isBisiesto(1600));

// 15
// Hacer un programa para ingresar por teclado las cuatro notas de los exámenes obtenidas por un alumno y luego emitir uno solo de los cartel de acuerdo a las siguientes condiciones:
// - “Promociona”, si obtuvo en los cuatro exámenes nota 7 o más.
// - “Rinde examen final”, si obtuvo nota 4 o más en por lo menos tres exámenes.
// - “Recupera Parciales”, si obtuvo nota 4 o más en por lo menos uno de los exámenes.
// - “Recursa la materia”, si no aprobó ningún examen parcial.

const examenesDevolucion = (nota1, nota2, nota3, nota4) => {
  let notas = [nota1, nota2, nota3, nota4];
  let respuesta;
  const promosiona = notas.every((nota) => nota >= 7); // Si todas dan true promociona va a valer true si alguna es falsa entonces promociona valdrá false.
  let contadorNotasMayor3 = 0; // contador para la cantidad de notas mayores a 3 y menores a 7.

  for (const nota of notas) {
    // recorremos cada elemento del array de notas.
    if (nota > 3 && nota < 7) {
      // si la nota es mayor a 3 y menor a 7.
      contadorNotasMayor3++; // aumenta el valor del contador en uno.
    }
  }

  respuesta = promosiona // si esto es true
    ? "Promociona"
    : contadorNotasMayor3 >= 3 // si el contador de notas es mayor o igual a tres
    ? "Rinde examen final"
    : contadorNotasMayor3 < 3 && contadorNotasMayor3 >= 1 // si el contador des notas es menor a 3 y mayor o igual a 1
    ? "Recupera Parciales"
    : // sino
      "Recursar de materia";

  return respuesta;
};

console.log(examenesDevolucion(6, 6, 6, 6));
console.log(examenesDevolucion(2, 3, 4, 4));
console.log(examenesDevolucion(6, 6, 1, 6));
console.log(examenesDevolucion(8, 8, 8, 7));
console.log(examenesDevolucion(2, 2, 3, 2));

// 16
// Hacer un programa para ingresar por teclado cuatro números. Si los valores que se ingresaran están ordenados en forma creciente, emitir el mensaje “Conjunto Ordenado”, caso contrario emitir el mensaje: “Conjunto Desordenado”.
// Ejemplo 1: si los números que se ingresan son 8, 10, 12 y 14, entonces están ordenados.
// Ejemplo 2: si los números que se ingresan son 8, 12, 12 y 14, entonces están ordenados.
// Ejemplo 3: si los números que se ingresan son 10, 8, 12 y 14, entonces están desordenados.

/* const isOrder = (n1, n2, n3, n4) => {
  let arr = [n1, n2, n3, n4];
  for (let i = 0; i < arr.length; i++) {
    

  }
}; */

// 17
// Una empresa de electricidad cobra el servicio a sus clientes de acuerdo a la siguiente escala:
// $ 10 por kilovatio (kW) por el consumo hasta los primeros 100 kW de consumo.
// $ 12 por kW por el consumo excedente de 101 a 200 kW.
// $ 15 por kW por el consumo excedente de 201 kW en adelante.

// Hacer un programa para que, dado el consumo en kilovatios de un determinado cliente, el programa calcule e informe el total a pagar por el mismo.
// Ejemplo 1: Un consumo de 55 kW, se calculará: $ 10 x 55= $ 550
// Ejemplo 2: Un consumo de 125 kW, se calculará: $ 10 x 100 + $ 12 x 25 = $1300.
// Ejemplo 3: Un consumo de 250 kW, se calculará: $ 10 x 100 + $ 12 x 100 + $ 15 x 50 = $ 2950.
