// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id); // mapeamos y devolvemos un array con IDs de los Managers
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  return paddockManagers
    .map((paddockManager) => paddockManager.name)  // mapeamos y devolvemos un array con los nombre de los administradores
    .sort(); // ordenamos de forma ascendente al abecedario
}

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.

function sortPaddockTypeByTotalArea() {
  return paddockType
    .map((type) => {  // mapeamos los tipos de cultivos
      return {  // retornamos por cada iteracion un objeto con las propiedades que ya tenian + una nueva agregada que es areas con el filtro de todos los paddocks que pertenecen al tipo de cultivo y luego acumulamos las areas con un reduce
        ...type,  
        areas: paddocks
          .filter((paddock) => paddock.paddockTypeId === type.id)
          .reduce((acum, el) => (acum += el.area), 0),
      };
    })
    .sort((a, b) => b.areas - a.areas) // ordenamos los objetos empezando con el que mas areas tiene
    .map(({ name }) => name); // mapeamos y devolvemos los nombres de cada tipo de cultivo.
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
  return paddockManagers  
    .map((manager) => { // mapeamos los administradores de los campos
      return {
        ...manager, // colocamos las mismas propiedades que ya tiene cada objeto
        hecCount: paddocks.filter(  // le agregamos una propiedad que representa la cantidad de hectáreas
          ({ paddockManagerId }) => paddockManagerId === manager.id 
        ).length, // longitud de los elementos filtrados
      };
    })
    .sort((a, b) => b.hecCount - a.hecCount)  // ordenamos de forma descendente basándonos en la cantidad de hectáreas que tiene cada administrador a cargo
    .map(({ name }) => name); // mapeamos los nombre de cada administrador 
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  const obj = {}; 
  let arr = [];
  farms.forEach((farm) => { // recorremos las granjas 
    paddockManagers.forEach((manager) => {  // recorremos los administradores
      paddocks.forEach((paddock) => { // recorremos los paddocks
        if (
          farm.id === paddock.farmId &&     // si el ID de la granja se relaciona con el paddock con el ID farmId
          manager.id === paddock.paddockManagerId && // si el ID del administrador se relaciona con el paddock con el ID paddockManagerId
          !arr.includes(manager.name) // si no esta incluido en el array el nombre del administrador
        ) { 
          arr = [...arr, manager.name];   // el array es igual a lo que ya tiene el array + el nuevo nombre del administrador
          obj[farm.name] = arr.sort(); // en la propiedad que es el nombre de la granja le asignamos el valor de un array ordenamos de forma ascendente de acuerdo al nombre de la granja
        }
      });
    });
    arr = []; // por cada finalización del array de administradores (paddockManagers) reiniciamos el valor de array para que los valores viejos no se ingresen en una propiedad que no corresponde
  });
  return obj;
}


// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
  return paddocks
     // 1 es el ID de paltos y 20000 m2 equivale a 2 hectáreas.
     .filter((paddock) => paddock.paddockTypeId === 1 && paddock.area > 20000)  // filtramos las tipos de campos con ID 1 que representa el cultivo de Paltos y los compos mayores a 20000m2 (2 hectáreas)
     .map(({ area }) => area) // mapeamos y devolvemos un array de las areas
     .sort((a, b) => b - a); // ordenamos las areas de forma descendiente
 }

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  let arr = [];
  paddocks.forEach((paddock) => {
    if (
      paddock.paddockTypeId === 3 &&  // si el campo es de tipo con ID 3 que representa el cultivo de Cerezas
      paddock.farmId === 3 && // si la granja es de ID 3 que representa 'FORESTAL Y AGRICOLA LO ENCINA'
      paddock.area > 1000  // si el area es mayor a 1000m2
    ) {
      arr = [    // el array va recibir los valores que se introducen por cada condición cumplida y el nuevo administrador
        ...arr, 
        ...paddockManagers
          .filter(   // filtramos los administradores que coincide con el ID del administrador con la relación que se obtiene de paddock con la propiedad 'paddockManagerId' que representa la Foreign key.
            (manager) =>
              manager.id === paddock.paddockManagerId &&  
              !arr.includes(manager.name) // Si no esta incluido en el array el nombre del administrador
          )
          .map(({ name }) => name), // mapeamos y nos devuelve el array con los nombres de los administradores
      ];
    }
  });
  return arr.sort(); // retornamos el array de los administradores pero ordenados de manera ascendente al abecedario
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  let obj = {};
  let arr = [];
  paddockManagers.forEach((manager) => {  // recorremos el array de administradores
    farms.forEach((farm) => { // recorremos el array de granjas
      arr = [ // array va a ser igual al valor que obtiene array por cada filtración que se hace
        ...arr, 
        ...paddocks // filtramos los campos que coincide con la granja y el administrador
          .filter(
            (paddock) =>
              paddock.farmId === farm.id &&
              paddock.paddockManagerId === manager.id
          )
          .fill(farm.name), // por cada iteración rellenamos cada ubicación que corresponde con el nombre de la granja
      ];
      obj[manager.name] = [...new Set(arr)].sort(); // el objeto recibe una clave con el nombre del administrador y recibe como valor un array de los campos que tiene a cargo, ordenados de forma ascendente respecto al abecedario.
    });
    arr = []; // al finalizar las iteraciones de las granjas reiniciamos el valor del array para evitar introducir datos no validos en una propiedad en la que no corresponde

  })
  return obj;
}


// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  const obj = {};
  let objValue = {};
  // recorremos los tipos de cultivos
  paddockType.forEach((type) => {
    // recorremos los paddocks y destructuramos en el callback
    paddocks.forEach(({ paddockManagerId, paddockTypeId, harvestYear }) => {
      // recorremos los administradores
      paddockManagers.forEach((manager) => {
        // declaramos cada propiedad por cada iteración nombre del tipo - año de cultivo
        const prop = `${type.name}-${harvestYear}`; 
        // buscamos la relación entre el administrador
        paddockManagerId === manager.id && 
        // y el tipo de cultivo que administra
        type.id === paddockTypeId && 
        // si esto da true entonces
          // asignamos a la variable objValue el objeto con el id y el nombre del administrador de ese cultivo
          (objValue = { id: manager.id, name: manager.name }); 

          // la clave del objeto es el asignado anteriormente y el valor el objeto del administrador con su id y su nombre
        obj[prop] = objValue; 
      });
    });
  });

  return obj;
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  let managerNew = { id: 7, taxNumber: "123254524", name: "FRANCISCO EMANUEL ARROYO" };
  let paddockNew = {
      paddockManagerId: 7,
      farmId: 1,
      paddockTypeId: 4,
      harvestYear: 2017,
      area: 9000,
    }
    paddockManagers.push(managerNew);
    paddocks.push(paddockNew);

    return sortFarmManagerByAdminArea().findIndex(managerName=>managerName === managerNew.name) + 1
} 

// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
console.log("Pregunta 8");
console.log(paddocksManagers());
console.log("Pregunta 9");
console.log(newManagerRanking());
