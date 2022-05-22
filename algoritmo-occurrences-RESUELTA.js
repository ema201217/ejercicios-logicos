/* SEGUNDA TAREA:

Nos gustaría que escribieras un algoritmo que cuente el número de ocurrencias de una palabra en un diccionario. Aunque puede parecer que no tiene aplicaciones en el mundo real, este algoritmo se usa de hecho en bioinformática para informar deleciones en una secuencia de ADN. La entrada del algoritmo es un archivo JSON con claves enteras y una lista de valores de cadenas, por ejemplo:

Necesitamos una función para contar el número de ocurrencias de la cadena "crystalzoom" en la lista pero solo cuando las teclas donde aparecen son números consecutivos. La primera ocurrencia debe ser reemplazada por "crystalzoom" más el número de ocurrencias encontradas (es decir, "crystalzoom3", "crystalzoom5", etc.) y todas las demás coincidencias deben eliminarse de las listas de todas las claves consecutivas. Si se eliminan todas las cadenas de una clave, esta clave debe eliminarse del diccionario.

Veamos algunos ejemplos para ayudarte a entender el problema:

  "9": ["crystalzoom"],
  "10": ["ruby", "rails"]

En el ejemplo anterior, "crystalzoom" aparece solo una vez ya que "10" es un número consecutivo pero no contiene la cadena "crystalzoom". Por lo tanto, debe reemplazarse con "crystalzoom1":
 
    "9": ["crystalzoom1"],
    "10": ["ruby", "rails"]

Y, en este caso a continuación:

  "2": ["crystalzoom"],
  "3": ["python", "crystalzoom", "linux"],

Aquí "crystalzoom" está presente en dos claves y, dado que "2" y "3" son números consecutivos, la primera aparición se reemplaza con "crystalzoom2" y se elimina la segunda:

  "2": ["crystalzoom2"],
  "3": ["python", "linux"],

Y, si tenemos algo como esto:

  "2": ["crystalzoom"],
  "3": ["python", "crystalzoom", "linux"],
  "4": ["crystalzoom"],

En este caso, el número total de coincidencias de "crystalzoom" es 3, ya que "2", "3" y "4" son consecutivos. Sin embargo, después de eliminar "crystalzoom" de la tecla "4", se vacía, por lo que debe eliminarse:

  "2": ["crystalzoom3"],
  "3": ["python", "linux"],

Y en este último caso:

  "7": ["java", "crystalzoom", "cpp", "js"],
  "9": ["crystalzoom"],

Aquí "7" y "9" no son consecutivos, por lo que cuenta solo como 1 ocurrencia:

  "7": ["java", "crystalzoom1", "cpp", "js"],
  "9": ["crystalzoom1"],

Volviendo al ejemplo original, el resultado de su secuencia de comandos debería ser:

{
  "1": ["windows", "server"],
  "2": ["crystalzoom3"],
  "3": ["python", "linux"],
  "7": ["java", "crystalzoom1", "cpp", "js"],
  "9": ["crystalzoom1"],
  "10": ["ruby", "rails"]
}

Entregables:
• Un solo archivo de código.
• No es necesario cargar el archivo JSON desde el disco. También puede precargarlo como un valor de Javascript.
• Su secuencia de comandos debe manejar diferentes entradas en el formato descrito anteriormente. */


let obj = {
  1: ["windows", "server"],
  2: ["asss", "sdad", "crystalzoom"],
  3: ["python", "crystalzoom", "linux"],
  4: ["crystalzoom"],
  7: ["java", "crystalzoom", "cpp", "js"],
  9: ["sdds", "crystalzoom", "linux"],
  10: ["ruby", "rails", "crystalzoom", "linux"],
  11: ["ruby", "rails", "crystalzoom", "linux"],
  12: ["ruby", "crystalzoom"]
};

function occurrence(text) {
  let count = 0;  // variable contador de texto repetido
  let indexFirstElement; // indice de la primera palabra encontrada
  let numberBefore = 1; // numero anterior para determinar si es un numero consecutivo 
  let keyFirstElement = ''; // nombre de la clave del objeto donde se encuentra la primer palabra encontrada
  
  for (const key in obj) { // recorremos el objeto
    if (obj[key].includes(text)) {  // existe el texto en cada array 
      count++;  // aumentamos el contador si existe
      if (key - 1 == numberBefore) {  // si es un numero consecutivo!!
        if(count === 1){  // si el contador esta en uno, es la primer palabra encontrada siendo su clave de objeto consecutivo
          indexFirstElement = obj[key].indexOf(text)  // las variables globales obtienen su indice
          keyFirstElement = key   // y la clave correspondiente
        }

        obj[key].splice(obj[key].indexOf(text), 1);  // Eliminamos todos los elementos de cada array que coincide con el parámetro de la funcion ('text')

        obj[key].length === 0 && delete obj[key]  // Si alguna propiedad como valor tiene un array vació entonces lo eliminamos

      } else {   // Si la key no es un numero consecutivo entonces
        count = 0;  // reiniciamos el contador
        count++;  // le aumentamos 1

        if(count === 1){  // si el contador esta en uno, es la primer palabra encontrada siendo su clave de objeto consecutivo
          indexFirstElement = obj[key].indexOf(text)  // las variables globales obtienen su indice
          keyFirstElement = key   // y la clave correspondiente
        }

      }
      obj[keyFirstElement].splice(indexFirstElement, 1,text + count); // por ultimo colocamos en la clave del objeto e indice del array la palabra ingresada en la función mas el contador de repeticiones encontradas
    }
    
    numberBefore = key; // la variable que guarda el numero anterior al terminar cada ciclo recibe el valor de la key del objeto para luego en la vuelta que viene se pueda comprobar si el numero es consecutivo

  }
  
  return obj;
}
console.log(occurrence("crystalzoom"));