/* EJERCICIO 1. LOS CUATRO ATLETAS

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

// Resolución personal

B = 1°
A = 2°
D = 3°
C = 4°

*/

const corredores = { A: 0, B: 0, C: 0, D: 0 }; // Inicializamos cada corredor con un valor 0

const logaritmo1 = () => {
  return (
    corredores.C > corredores.B && // C ha llegado inmediatamente detrás de B
    corredores.D > corredores.A && // D ha llegado en medio de A
    corredores.D < corredores.C && // y C
    corredores.B < corredores.A // B menor que A porque sino B y A van a tener la misma posición
  );
}; // Condicionales a cumplir para detenernos al momento que se cumpla la condición

const numRandom1 = () => Math.ceil(Math.random() * 4); // Función que nos devuelve un numero aleatorio del 1 al 4 (4 porque son cuatro corredores)

function resultado1() {
  return new Promise((resolve) => {
    // me retorna una promesa para manejar la asincronía
    setInterval(function () {
      corredores.A = numRandom1(); // cada corredor recibe el valor aleatorio entre 1 y 4
      corredores.B = numRandom1();
      corredores.C = numRandom1();
      corredores.D = numRandom1();

      if (logaritmo1()) {
        // si se cumple la condición
        console.log('"A" llego', corredores.A + "°");
        console.log('"B" llego', corredores.B + "°");
        console.log('"C" llego', corredores.C + "°");
        console.log('"D" llego', corredores.D + "°");
        resolve(clearInterval(this)); // La promesa resuelve en el cierre del intervalo
      }
    }, 1);
  });
}

/* EJERCICIO 2. CABALLOS 

El caballo de Mac es mas oscuro que el de Smith, pero mas rápido y mas viejo que el de Jack, que es aun mas lento que el de Willy, que es mas joven que el de Mac, que es mas viejo que el de Smith,que es mas claro que el de Willy,aunque el de Jack es mas lento y mas oscuro que el de Smith. ¿Cual es el mas viejo, cual es mas lento y cual es mas claro?


// Resolución personal

                  Mac             Smith           Jack            Willy
Tono               2                1               2              2
Edad               2                1               1              1                            
Velocidad          2                2               1              2

MAC + tono SMITH
MAC + velocidad JACK
MAC + edad JACK
WILLY + velocidad JACK
MAC + edad WILLY
MAC + edad SMITH
WILLY + tono SMITH
SMITH + velocidad JACK
JACK + tono SMITH
*/

const caballos = {
  // objeto con dueños de los caballos y sus propiedades necesarias.
  Mac: { tono: 0, edad: 0, vel: 0 }, // inicializamos cada propiedad en 0
  Smith: { tono: 0, edad: 0, vel: 0 },
  Jack: { tono: 0, edad: 0, vel: 0 },
  Willy: { tono: 0, edad: 0, vel: 0 },
};

const numRandom2 = () => Math.ceil(Math.random() * 2); // funcion que nos devuelve un numero aleatorio entre 1 y 2

const logaritmo2 = () => {
  const { Mac, Smith, Jack, Willy } = caballos;

  return (
    // Algoritmo creado a partir de la consigna
    Mac.tono > Smith.tono && // Mac es mas oscuro que el de Smith
    Mac.vel > Jack.vel && // pero mas rápido que el de Jack
    Mac.edad > Jack.edad && // mas viejo que el de Jack
    Willy.vel > Jack.vel && // Jack, que es aun mas lento que el de Willy,
    Mac.edad > Willy.edad && // Willy, que es mas joven que el de Mac
    Mac.edad > Smith.edad && // Mac, que es mas viejo que el de Smith
    Willy.tono > Smith.tono && // Smith,que es mas claro que el de Willy
    Smith.vel > Jack.vel && // aunque el de Jack es mas lento que el de Smith
    Jack.tono > Smith.tono // aunque el de Jack es mas oscuro que el de Smith
  );
};

function resultado2() {
  return new Promise((resolve) => {
    // me retorna una promesa para manejar la asincronía
    const { Mac, Smith, Jack, Willy } = caballos; // Destructuramos el objeto "caballos"
    setInterval(function () {
      // por cada intervalo
      Mac.tono = numRandom2(); // colocamos en cada clave de los distintos caballos un valor random entre 1 y 2
      Mac.edad = numRandom2();
      Mac.vel = numRandom2();

      Smith.tono = numRandom2();
      Smith.edad = numRandom2();
      Smith.vel = numRandom2();

      Jack.tono = numRandom2();
      Jack.edad = numRandom2();
      Jack.vel = numRandom2();

      Willy.tono = numRandom2();
      Willy.edad = numRandom2();
      Willy.vel = numRandom2();

      if (logaritmo2()) {
        // Si el logaritmo se cumple
        for (const key in caballos) {
          // recorremos el objeto
          caballos[key].tono === 1 && // si el tono tiene el valor de 1 es el mas claro
            console.log("El caballo mas claro es el de", key);
          caballos[key].edad === 2 && // si la edad tiene el valor de 2 es el mas viejo
            console.log("El caballo mas viejo es el de", key);
          caballos[key].vel === 1 && // si la velocidad tiene el valor de 1 es el menos rapido
            console.log("El caballo mas lento es el de", key);
        }
        resolve(clearInterval(this)); // La promesa resuelve en el cierre del intervalo
      }
    }, 1);
  });
}

/* EJERCICIO 3. LOS CUATRO PERROS

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Este ultimo come mas que el galgo; el alano come mas que el galgo y menos que el dogo, pero este come mas que el podenco. ¿Cual de los cuatro perros come menos?

// Resolución personal

dogo    = el que mas come        = 4
podenco = el que come maso menos = 3
alano   = el que no come tanto   = 2
galgo   = el que come menos      = 1

*/

const perros = {
  // creamos un objeto de perros
  galgo: 0,
  dogo: 0,
  alano: 0,
  podenco: 0,
};

function logaritmo3() {
  // creamos el logaritmo en base a la consigna
  return (
    perros.podenco > perros.galgo && // podenco. Este ultimo come mas que el galgo
    perros.alano > perros.galgo && // el alano come mas que el galgo
    perros.alano < perros.dogo && // el alano come menos que el dogo
    perros.dogo > perros.podenco // el dogo, pero este come mas que el podenco
  );
}

const numRandom3 = () => Math.ceil(Math.random() * 4); // nos devuelve un numero random entre 1 y 4 (cuatro perros)

function resultado3() {
  return new Promise((resolve) => {
    // me retorna una promesa para manejar la asincronía
    setInterval(function () {
      // por cada intervalo
      perros.galgo = numRandom3(); // modificamos el valor de cada propiedad
      perros.dogo = numRandom3();
      perros.alano = numRandom3();
      perros.podenco = numRandom3();

      if (logaritmo3(perros)) {
        // cuando se cumple el logaritmo
        for (const key in perros) {
          // recorremos el objeto
          perros[key] === 1 && // si el valor que tiene el perro es igual a 1 quiere decir que es el perro que menos come
            console.log("El perro que menos come es el", key);
        }
        resolve(clearInterval(this)); // La promesa resuelve en el cierre del intervalo
      }
    }, 1);
  });
}

/* EJERCICIO 4. SEIS AMIGOS DE VACACIONES 

Seis amigos desean pasar sus vacaciones juntos y deciden cada dos, utilizar diferente medios de transportes; sabemos que Alejandro no utiliza el coche ya que este acompaña a Benito que no va en avion.Andres viaja en avion. Si Carlos no va acompañado de Dario ni hace uso del avion, podría usted decirnos en que medio de transportes llega a su destino Tomas.

// Resolución personal

                           coche        avion      indefinido    
Alejandro con Benito = 1     0            0            1
Andres con Dario = 2         0            2            0
Carlos con Tomas = 3         3            0            0

*/

const amigos = {
  // creamos un objeto de los amigos
  Alejandro: 0,
  Benito: 0,
  Carlos: 0,
  Dario: 0,
  Tomas: 0,
  Andres: 0,
};

const transportes = {
  // creamos los transportes que existen en la consigna
  coche: 0,
  avion: 0,
  indefinido: 0,
};

const numRandom4 = () => Math.ceil(Math.random() * 3); // nos devuelve un numero entre 1 y 3 (son 3 grupos de dos amigos cada uno ya que son 6 en total)

function logaritmo4() {
  return (
    // logaritmo de acuerdo a la consigna y un poco de interpretación lógica de mi parte.

    // Alejandro no utiliza el coche ya que este acompaña a Benito que no va en avion
    amigos.Alejandro === amigos.Benito &&
    amigos.Alejandro !== transportes.coche &&
    amigos.Benito !== transportes.avion &&
    // Esta primera parte también no esta diciendo que Benito tampoco viajo en coche ya que fue con Alejandro y que Alejandro tampoco viajo en avion.
    amigos.Alejandro !== transportes.avion &&
    amigos.Benito !== transportes.coche &&
    // Andres viaja en avion
    amigos.Andres === transportes.avion &&
    // Si Carlos no va acompañado de Dario ni hace uso del avion
    amigos.Carlos !== amigos.Dario &&
    amigos.Carlos !== transportes.avion &&
    // Esta parte es interpretación personal
    // Si Alejandro solo viaja con Benito quiere decir que no viaja ni con Carlos,Dario,Andres y Tomas
    amigos.Alejandro !== amigos.Carlos &&
    amigos.Alejandro !== amigos.Dario &&
    amigos.Alejandro !== amigos.Andres &&
    amigos.Alejandro !== amigos.Tomas &&
    // Como Carlos no hace uso del avion entonces nos queda Dario que hace grupo con Andres que viaja en avion
    amigos.Dario === transportes.avion &&
    // Entonces Tomas no viaja en avion y el grupos que queda es el de Tomas con Carlos
    amigos.Tomas !== transportes.avion &&
    // y para finalizar los valores de los distintos transportes no pueden ser iguales
    transportes.avion !== transportes.coche &&
    transportes.avion !== transportes.indefinido &&
    transportes.coche !== transportes.indefinido
  );
}

function resultado4() {
  return new Promise((resolve) => {
    // me retorna una promesa para manejar la asincronía
    setInterval(function () {
      // por cada intervalo
      amigos.Alejandro = numRandom4(); // cambiamos los valores de las propiedades de cada transporte y amigos
      amigos.Andres = numRandom4();
      amigos.Benito = numRandom4();
      amigos.Tomas = numRandom4();
      amigos.Dario = numRandom4();
      amigos.Carlos = numRandom4();
      transportes.avion = numRandom4();
      transportes.coche = numRandom4();
      transportes.indefinido = numRandom4();

      if (logaritmo4()) {
        // Si se cumple el algoritmo
        for (const transporte in transportes) {
          // recorremos los objetos en donde se cumple la condicion
          for (const amigo in amigos) {
            if (
              transportes[transporte] === amigos[amigo] && // si el transporte es igual al valor que tiene el amigo
              amigo === "Tomas" // y el amigo es Tomas
            ) {
              console.log(
                `El transportes que utilizo "${amigo}" fue un "${transporte}"`
              );
              resolve(clearInterval(this)); // La promesa resuelve en el cierre del intervalo
            }
          }
        }
      }
    }, 1);
  });
}

/* EJERCICIO 5. SILENCIO 

Si Angela habla mas bajo que Rosa y Celia habla mas alto que Rosa,¿habla Angela mas alto o mas bajo que Celia?

// Resolución personal

Celia = 3 = muy alto
Rosa = 2 = no tan bajo ni tan alto
Angela = 1 = mas bajo

*/

const mujeres = {
  // creamos un objeto de mujeres
  Angela: 0,
  Rosa: 0,
  Celia: 0,
};

const numRandom5 = () => Math.ceil(Math.random() * 3); // nos devuelve un numero aleatorio entre 1 y 3 (tres mujeres)

function logaritmo5() {
  // logaritmo de acuerdo a la consigna
    return mujeres.Angela < mujeres.Rosa &&  // Angela habla mas bajo que Rosa
           mujeres.Celia > mujeres.Rosa; // Celia habla mas alto que Rosa
}

function resultado5() {
  return new Promise((resolve) => { // retornamos una promesa para manejar la asincronía
    setInterval(function () {   // por cada intervalo
      mujeres.Angela = numRandom5();    // cambiamos los valores de las mujeres
      mujeres.Rosa = numRandom5();
      mujeres.Celia = numRandom5();

      if (logaritmo5()) {   // si se cumple el logaritmo
        if (mujeres["Angela"] < mujeres["Celia"]) { // si el valor de Angela es menor que el valor de Celia es mas baja la voz de Angela
          console.log("Angela habla mas bajo que Celia");
        } else { // sino la voz de Angela es mas alta
          console.log("Angela habla mas alto que Celia");
        }
        resolve(clearInterval(this));
      }
    }, 1);
  });
}

/* MANEJO ASÍNCRONO */
(async () => {      // función autoejecutable utilizando async await y try catch
  try {
    console.log("EJERCICIO 1. LOS CUATRO ATLETAS");
    await resultado1();
    console.log("\nEJERCICIO 2. CABALLOS");
    await resultado2();
    console.log("\nEJERCICIO 3. LOS CUATRO PERROS");
    await resultado3();
    console.log("\nEJERCICIO 4. SEIS AMIGOS DE VACACIONES");
    await resultado4();
    console.log("\nEJERCICIO 5. SILENCIO");
    await resultado5();
  } catch (error) {
    console.log("Ocurrió un error inesperado, vuelva a intentarlo");
    console.clear()
  }
})();
