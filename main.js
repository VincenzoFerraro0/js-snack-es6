/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

/*
    MINI TASk
      Crea un array di oggetti.
      
*/

//creo un array di oggetti 
let biciDaCorsa = [
  { nome: 'Pinarello-Dogma', peso: 6.8 },
  { nome: 'Vento SL', peso: 6.2 },
  { nome: 'Corsa V8', peso: 5.8 },
  { nome: 'Graziella Gran Turismo', peso: 8.9 },
  { nome: 'Graziella 3.0', peso: 7.8 },
]
// Dichiaro la variabile temporanea
let biciLeggera = biciDaCorsa[0];
// ciclo per ogni oggetto
for (let i in biciDaCorsa) {
  //singolo oggetto
  let elemento = biciDaCorsa[i]
  //Confronto 
  if (elemento.peso < biciLeggera.peso) {
    biciLeggera = elemento;
  }
}
// Stampa la bici con il peso minore
console.log(biciLeggera);

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


/*
    MINI TASk
    Inizializza un array di squadre con nome, punti e falli subiti inizialmente a zero.
    Crea un nuovo array vuoto
    crea funzione per generare numeri random
    cicla l'array di oggetti 
    etrai il singolo elemento
    assegna alle chiavi appropriate la funzione per generare numeri casuali
    inserisci ogni elemento del ciclo nel nuovo array con le sole informazioni scelte
    stampa il nuovo array

*/
let squadre = [
  { nome: 'Milan', punti: 0, falliSubiti: 0 },
  { nome: 'Napoli', punti: 0, falliSubiti: 0 },
  { nome: 'Atalanta', punti: 0, falliSubiti: 0 },
  { nome: 'Inter', punti: 0, falliSubiti: 0 },
  { nome: 'Roma', punti: 0, falliSubiti: 0 }
]

const newArray = [];

function GeneraNumerRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}


for (let i in squadre) {

  //singolo oggetto
  let elemento = squadre[i]

  elemento.punti = GeneraNumerRandom(1, 50)
  elemento.falliSubiti = GeneraNumerRandom(1, 50)

  //inserisco ogni elemento del ciclo nel nuovo array con le sole informazioni scelte
  newArray.push(
    {
      nome: elemento["nome"],
      falliSubiti: elemento["falliSubiti"]
    }
  )

}
console.log(newArray)


