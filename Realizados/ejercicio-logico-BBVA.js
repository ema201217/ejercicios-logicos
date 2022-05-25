// Ejercicios- COBOL BBVA

/* 1-Entre tres hermanos deben repartirse $120 . El primero se lleva 7/15 del total, el segundo 5/12 del total y el tercero el resto. ¿Cuánto dinero se ha llevado cada uno?
 */

let hermano1 = 120 / 15 - 7 / 15;
let hermano2 = 120 / 12 - 5 / 12;
let hermano3 = 120 - hermano1 - hermano2;
// console.log(hermano3);

/* 2-Seis amigos viven en un edificio, cada uno en un piso distinto, Gabriela vive más abajo que Jorge, pero más arriba que Marcos; Nicolás vive tres pisos más abajo que Gabriela, Abel vive dos pisos más arriba que Gabriela y a cuatro pisos de Sandra. ¿Quién vive en el tercer piso?
Gabriela < Jorge
Gabriela > Marcos
Nicolas <3 Gabriela
Abel 2> Gabriela
Abel 4> Sandra

A.	Sandra 5 
E.	Abel 1
D.	Jorge 4
B.	Gabriela 3
C.	Marcos 2
F.  Nicolas 6
*/

const amigos = {
  Gabriela: 0,
  Jorge: 0,
  Marcos: 0,
  Nicolas: 0,
  Sandra: 0,
  Abel: 0,
};

const numRandom1 = () => Math.ceil(Math.random() * 6);

function logaritmo1() {
  return (
    // Gabriela vive más abajo que Jorge, pero más arriba que Marcos 
    amigos.Gabriela < amigos.Jorge &&
    amigos.Gabriela > amigos.Marcos &&
    // Nicolás vive tres pisos más abajo que Gabriela 
    amigos.Nicolas + 3 === amigos.Gabriela &&
    // Abel vive dos pisos más arriba que Gabriela 
    amigos.Abel - 2 === amigos.Gabriela &&
    // Abel vive a cuatro pisos de Sandra 
    amigos.Abel - 4 === amigos.Sandra &&

    // Los valores no pueden ser iguales - lógica correspondiente 
    amigos.Gabriela != amigos.Jorge &&
    amigos.Gabriela != amigos.Marcos &&
    amigos.Gabriela != amigos.Sandra &&
    amigos.Gabriela != amigos.Abel &&
    amigos.Gabriela != amigos.Nicolas &&
    amigos.Marcos != amigos.Sandra &&
    amigos.Marcos != amigos.Abel &&
    amigos.Marcos != amigos.Nicolas &&
    amigos.Marcos != amigos.Jorge &&
    amigos.Sandra != amigos.Abel &&
    amigos.Sandra != amigos.Nicolas &&
    amigos.Sandra != amigos.Jorge &&
    amigos.Abel != amigos.Nicolas &&
    amigos.Abel != amigos.Jorge
  );
}

function resultado1() {
  setInterval(function () {
    amigos.Gabriela = numRandom1();
    amigos.Jorge = numRandom1();
    amigos.Marcos = numRandom1();
    amigos.Nicolas = numRandom1();
    amigos.Sandra = numRandom1();
    amigos.Abel = numRandom1();

    if (logaritmo1()) {
      console.log(amigos);
      for (const key in amigos) {
        if (amigos[key] === 3) {
          console.log("La persona que vive en el tercer piso es:", key);
        }
      }
      clearInterval(this);
    }
  }, 1);
}

resultado1();
