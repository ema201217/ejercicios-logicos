// 1
// Hacer un programa para ingresar por teclado un número y luego emitir por pantalla un cartel aclaratorio indicando si el mismo es positivo, negativo o cero.

const isNumber = (numero) =>
  numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero"; // si el numero es mayor a 0 es positivo, si es menor a 0 es negativo sino es 0.

// console.log(isNumber(2));

// 2
// Hacer un programa para ingresar por teclado dos números y luego informar por pantalla con un cartel aclaratorio si el primer número es múltiplo del segundo.

const isMultiplo = (n1, n2) => {
  return n1 % n2 === 0 // si dividimos el numero 1 con el numero 2 y el resto de la division es 0 quiere decir que es multiplo de numero 2.
    ? `El numero ${n1} es múltiplo de ${n2}`
    : `El numero ${n1} NO es múltiplo de ${n2}`; // si la condición no se cumple imprime que no es múltiplo
};

// console.log(isMultiplo(77, 6));
// console.log(isMultiplo(12, 6));
// console.log(isMultiplo(18, 9));

// 3
// Hacer un programa para ingresar por teclado un número y luego informar por pantalla con un cartel aclaratorio si el mismo es par o impar.

const parOrImpar = (numero) =>
  numero % 2 === 0 // si el numero lo dividimos por dos y el resto es 0 entonces es par sino sera impar
    ? `El numero ${numero} es par`
    : `El numero ${numero} es impar`;

// console.log(parOrImpar(10));
// console.log(parOrImpar(102));
// console.log(parOrImpar(95));

// 4
// Hacer un programa para ingresar por teclado dos números y luego informar por pantalla la diferencia absoluta entre ambos. Ejemplo 1: Si se ingresan 3 y 8, se emite 5. Si se ingresan 8 y 3, se emite 5. Ejemplo 2: Si se ingresan -3 y 9, se emite 12. Si se ingresan -12 y -1, se emite 11.

const diferencias = (n1, n2) => {
  let counter = 0;
  const min = n1 < n2 ? n1 : n2; // identificamos cual es el menor
  const max = n1 > n2 ? n1 : n2; // identificamos cual es el mayor

  // creamos un bucle comenzando desde el numero mas chico hasta llegar al mas grande
  for (let i = min; i <= max; i++) {
    // si la variable i no llega aun al numero mayor va a ir aumentando en uno el contador
    i != max && counter++;
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
  // determinamos con un if ternario el tipo de descuento correspondiente dependiendo del precio que se introduzca como argumento de la función.
  const discount = price < 100 ? 5 : price > 100 && price <= 500 ? 10 : 15;

  // al precio le restamos el porcentaje a descontar

  const result = price - (price * discount) / 100;
  return `El precio con descuento es de ${result} y sin el descuento seria ${price}`;
};

// console.log(perfumeria(400));

// 6
// Hacer un programa para ingresar por teclado tres números y luego determinar e informar con una leyenda aclaratoria si los tres son iguales entre sí, caso contrario no emitir nada. Ayuda: Si A es igual a B y B es igual a C, entonces A y C son iguales.

const sonIguales = (n1, n2, n3) =>
  n1 === n2 && n2 === n3 ? "Los números son iguales" : ""; // si numero 1 es igual al numero 2 y el numero 2 es igual al numero 3 entonces los numeros son iguales.

// console.log(sonIguales(10, 20, 10));
// console.log(sonIguales(10, 10, 10));

// 7
// Hacer un programa para ingresar por teclado tres números e informar con una leyenda aclaratoria si los tres son todos distintos entre sí, caso contrario no emitir nada. Ayuda: Si A es distinto de B y B es distinto de C, eso no significa que A y C sean distintos. Ejemplo: A=8, B=6 y C=8.

const sonDistintos = (n1, n2, n3) =>
  n1 !== n2 && n2 !== n3 ? "Los números son distintos" : ""; // si el numero 1 es distinto del numero 2 y el numero 2 es distinto del numero 3 entonces son distintos

// console.log(sonDistintos(10, 20, 10));
// console.log(sonDistintos(8, 8, 8));

// 8
// Basado en los 2 ejercicios anteriores, hacer un programa para ingresar por teclado la longitud de los tres lados de un triángulo y luego listar que tipo de triángulo es:
// - Equilátero: si los tres lados son iguales.
// - Isósceles: si dos de los tres lados son iguales.
// - Escaleno: si los tres lados son distintos entre sí.

const triangulos = (l1, l2, l3) =>
  l1 == l2 && l2 == l3 // si el lado 1 es iguala al lado 2 y el lado 2 es igual al lado 3 es un Equilátero
    ? "Equilátero"
    : l1 == l2 || l2 == l3 || l1 == l3 // si el lado 1 es igual al lado 2 o el lado 2 es igual al lado 3 o el lado 1 es igual al lado 3 es Isosceles
    ? "Isósceles"
    : "Escaleno"; // sino es un Escaleno

//  console.log(triangulos(10, 20, 10));
//  console.log(triangulos(10, 10, 10));
// console.log(triangulos(10, 20, 30));

// 9
// Hacer un programa para ingresar tres números y listar el máximo de ellos.

// si numero 1 es mayor que numero 2 entonces numero 1 es el mayor sino si numero 2 es mayor que el numero3 entonces el numero 2 es el mayor sino el mayor es el numero
const elMayor = (n1, n2, n3) => (n1 > n2 ? n1 : n2 > n3 ? n2 : n3);

// console.log(elMayor(20, 30, 111));
// console.log(elMayor(2, 10, 5));
// console.log(elMayor(27, 4, 21));

// 10
// Hacer un programa para ingresar cinco números y listar el máximo de ellos.

const elMayor2 = (n1, n2, n3, n4, n5) => {
  // creo un array con los valores que ingresan a la función
  let arr = [n1, n2, n3, n4, n5];
  // inicializamos una variable que va a tomar el valor del numero mayor al finalizar el bucle "foreach"
  let mayor = 0;
  // recorremos el array creado y preguntamos si el numero mayor es igual a 0 o mayor es menor al numero que se esta recorriendo del array ("n") entonces mayor va a ser igual al numero mayor.
  arr.forEach((n) => (mayor === 0 || mayor < n) && (mayor = n));
  return mayor;
};

// console.log(elMayor2(20, 30, 111, 900, 20));
// console.log(elMayor2(2, 10, 5, 102, 34));
// console.log(elMayor2(27, 4, 21, 29, 3));

// 11
// Hacer un programa para ingresar cinco números y listar cuántos de esos cinco números son positivos.

const contadorPositivos = (n1, n2, n3, n4, n5) => {
  // creo un array con los valores que ingresan a la función
  let arr = [n1, n2, n3, n4, n5];
  // inicializamos un contador en 0
  let contador = 0;
  // recorremos el nuevo array y preguntamos si el numero que va recorriendo ("n") es mayor a 0 entonces que me aumente en uno el contador de números positivos
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
  // identificamos el numero menor obtenido como parámetro
  const min = n1 < n2 && n1 < n3 ? n1 : n2 < n1 && n2 < n3 ? n2 : n3;
  // obtenemos el numero mayor obtenido como parámetro
  const max = n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 > n3 ? n2 : n3;
  // si el numero menos es menor que numero 1 y numero mayor es mayor que el numero 1 entonces el numero entremedio es el numero 1 , si el numero menor es menor que el numero 2 y el numero mayor es mayor que el numero 2 entonces el numero 2 es el numero intermedio sino se cumple ninguna condición es el numero 3.
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
  fechaNac = fechaNac.split("/").map((n) => +n); // convierto el string en un array de números
  fechaActual = fechaActual.split("/").map((n) => +n); // convierto el string en un array de números
  let edad = fechaActual[2] - fechaNac[2]; // obtengo la diferencia entre los años de diferencia
  if (
    fechaNac[1] > fechaActual[1] || // el indice 1 corresponde al numero del mes; si el mes de nacimiento es mayor que el del mes actual o si el mes de nacimiento es igual al mes actual y el numero de dia de nacimiento es mayor al del dia actual
    (fechaActual[1] === fechaNac[1] && fechaNac[0] > fechaActual[0])
  ) {
    edad--; // le restamos a la edad un 1
  }
  return `La persona tiene ${edad} años`;
};

// console.log(calcularAnios("3/12/2000", "26/2/2019"));
// console.log(calcularAnios("3/1/2000", "26/2/2019"));
// console.log(calcularAnios("28/2/2000", "26/2/2019"));
// console.log(calcularAnios("3/12/2011", "25/5/2022"));

// 14
// Un año es bisiesto si es múltiplo de 4, exceptuando a los años que son múltiplos de 100 pero que no sean múltiplos de 400. Esto último significa que el año 1900 no es bisiesto, pero el año 2000 si lo es. Hacer un programa para que ingresar un año y listar por pantalla si es bisiesto o no lo es.

// Ejemplo 1. Si se ingresa el año 2020 se indicará como bisiesto.
// Ejemplo 2. Si se ingresa el año 2019 se indicará como no bisiesto.
// Ejemplo 3. Si se ingresa el año 1800 o 1900 se indicará como no bisiesto.
// Ejemplo 4. Si se ingresa el año 1600 o 2000 se indicará como bisiesto.

const isBisiesto = (anio) => {
  // si dividimos el año por 4 y el resto es igual a 0, y al dividir el año por 100 y es distinto a 0, entonces es un año bisiesto; o si el año es dividido por 400 y el resto es 0 entonces también es bisiesto
  let isBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  return isBisiesto;
};

// console.log(isBisiesto(2020));
// console.log(isBisiesto(2019));
// console.log(isBisiesto(1800));
// console.log(isBisiesto(1600));

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

// console.log(examenesDevolucion(6, 6, 6, 6));
// console.log(examenesDevolucion(2, 3, 4, 4));
// console.log(examenesDevolucion(6, 6, 1, 6));
// console.log(examenesDevolucion(8, 8, 8, 7));
// console.log(examenesDevolucion(2, 2, 3, 2));

// 16
// Hacer un programa para ingresar por teclado cuatro números. Si los valores que se ingresaran están ordenados en forma creciente, emitir el mensaje “Conjunto Ordenado”, caso contrario emitir el mensaje: “Conjunto Desordenado”.
// Ejemplo 1: si los números que se ingresan son 8, 10, 12 y 14, entonces están ordenados.
// Ejemplo 2: si los números que se ingresan son 8, 12, 12 y 14, entonces están ordenados.
// Ejemplo 3: si los números que se ingresan son 10, 8, 12 y 14, entonces están desordenados.

const isOrder = (n1, n2, n3, n4) => {
  let isOrder = n1 <= n2 && n2 <= n3 && n3 <= n4; // si el numero 1 es menor o igual al numero 2 y el numero 2 es menor o igual que el numero 3 y si el numero 3 es menor o igual al numero 4.
  return isOrder ? "Números ordenados" : "Números desordenados"; // si "isOrder" es true entonces están ordenados sino están desordenados
};
console.log(isOrder(8, 10, 12, 14));
console.log(isOrder(8, 12, 12, 14));
console.log(isOrder(10, 8, 12, 14));

// 17
// Una empresa de electricidad cobra el servicio a sus clientes de acuerdo a la siguiente escala:
// $ 10 por kilovatio (kW) por el consumo hasta los primeros 100 kW de consumo.
// $ 12 por kW por el consumo excedente de 101 a 200 kW.
// $ 15 por kW por el consumo excedente de 201 kW en adelante.

// Hacer un programa para que, dado el consumo en kilovatios de un determinado cliente, el programa calcule e informe el total a pagar por el mismo.
// Ejemplo 1: Un consumo de 55 kW, se calculará: $ 10 x 55= $ 550
// Ejemplo 2: Un consumo de 125 kW, se calculará: $ 10 x 100 + $ 12 x 25 = $1300.
// Ejemplo 3: Un consumo de 250 kW, se calculará: $ 10 x 100 + $ 12 x 100 + $ 15 x 50 = $ 2950.

const servicioElectrico = (consumo) => {
  let cobroMinimo = 10 * 100; // obtenemos el precio al superar el primer nivel de cobro
  let cobroIntermedio = 12 * 100; // obtenemos el precio al superar el segundo nivel de cobro

  return consumo > 200 // si el consumo es mayor a 200 kW el importe a cobrar sera
    ? cobroMinimo + cobroIntermedio + (consumo - 200) * 15 // la suma del precio del primer nivel completo mas el segundo nivel completo mas la diferencia entre el consumo menos los dos primeros niveles de kW (100 + 100) multiplicado con el valor del KW (15)
    : consumo > 100 && consumo <= 200 // si el consumo es mayor a 100 y menor o igual a 200
    ? cobroMinimo + (consumo - 100) * 12 // sumame el valor del primer nivel completo mas la diferencia del consumo menos los 100 kw limites del primer nivel de cobro multiplicado por el precio del kW (12)
    : consumo * 10; // sino se cumple ninguna de las condiciones quiere decir que consumo es menor a 100 kw y corresponde al cobro del consumo que existe por los 10 que corresponde al primer nivel de cobro.
};

console.log(servicioElectrico(55));
console.log(servicioElectrico(125));
console.log(servicioElectrico(250));
