/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).
*/

/*
    MINI TASK
        -Imposta la variabile della bicicletta più leggera: Inizia con una bicicletta di riferimento.
        -Itera sugli indici dell'array usando for...in.
        -Accedi agli oggetti usando l'indice: Ogni volta che attraversi un indice, usa l'indice per ottenere l'oggetto bicicletta e il suo peso.
        -Confronta il peso di ogni bicicletta con il peso più leggero trovato finora.
        -Aggiorna la bicicletta più leggera quando ne trovi una con un peso inferiore.
*/

//creo un array di oggetti 
let biciDaCorsa = [
    { nome:'Pinarello-Dogma' , peso: 6.8},
    { nome:'Vento SL', peso: 6.2},
    { nome:'Corsa V8' , peso: 5.8},
    { nome:'Graziella Gran Turismo', peso: 8.9},
    { nome:'Graziella 3.0', peso: 7.8},
]


// Trova la bici con il peso minore con ciclo for in per iterare l'array
let biciLeggera = biciDaCorsa[0];
//ottengo l'indice
for (let i in biciDaCorsa) {
    //accedo a ogni elemento .peso e lo confronto 
  if (biciDaCorsa[i].peso < biciLeggera) {
    // aggiorno la variabile 
    biciLeggera = biciDaCorsa[i];
  }
  console.log(biciDaCorsa[i].peso,biciDaCorsa[i].nome)
}

// Stampa la bici con il peso minore
document.write(`La bici più leggera è: ${biciLeggera.nome} con un peso di ${biciLeggera.peso}kg.`);