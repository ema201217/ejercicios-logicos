// A vending machine has the following denominations: 1$, 5$, 10$, 25$, 50$ and 100$. Your task is to write a program that will be used in a vending machine to return change. Assume that the vending machine will always want to return the least number of coins or notes. Devise a function getChange(m, p) where M is how much money was inserted into the machine and P the price of the item selected, that returns an array of integers representing the number of each denomination to return.

// Una máquina expendedora tiene las siguientes denominaciones: 1$, 5$, 10$, 25$, 50$ y 100$. Su tarea es escribir un programa que se utilizará en una máquina expendedora para devolver el cambio. Suponga que la máquina expendedora siempre querrá devolver la menor cantidad de monedas o billetes. Diseñe una función getChange(m, p) donde M es cuánto dinero se insertó en la máquina y P el precio del artículo seleccionado, que devuelve una matriz de números enteros que representan el número de cada denominación a devolver

//   m => dinero insertado
//   p => price article

function getChange(m, p) {
  const dens = [100, 50, 25, 10, 5, 1];
  let change = m - p;
  let arr = [];
  let index = 0;
  
  while (change != 0) {
    arr[index] = arr[index] || 0;
    while (change >= dens[index]) {
      change -= dens[index];
      arr[index] += 1;
    }
    index++;
  }
  return arr.reverse();
}

/* if (change >= 100) {
  change -= 100;
  arr[5] += 1;
} else if (change >= 50) {
  change -= 50;
  arr[4] += 1;
} else if (change >= 25) {
  change -= 25;
  arr[3] += 1;
} else if (change >= 10) {
  change -= 10;
  arr[2] += 1;
} else if (change >= 5) {
  change -= 5;
  arr[1] += 1;
} else if (change >= 1) {
  change -= 1;
  arr[0] += 1;
} else {
  change = 0;
} */

// Example:
console.log(getChange(95000000000, 123)); // should return [2,0,0,1,1,949999998]
console.log(getChange(500, 99)); // should return [1,0,0,0,0,4]
console.log(getChange(200, 91)); // should return [4,1,0,0,0,1]
console.log(getChange(250, 123)); // should return [2,0,0,1,0,1]

//javier.podavini@rappi.com
