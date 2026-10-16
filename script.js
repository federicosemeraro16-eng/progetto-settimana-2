/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const products = [
  {
    name: "Iphone 6",
    category: "electronics",
    rating: 4,
    price: 600,
    img: "n/a",
    available: true,
  },
  {
    name: "Samsung Galaxy 8",
    category: "electronics",
    rating: 5,
    price: 700,
    img: "n/a",
    available: true,
  },
  {
    name: "Comodino",
    category: "house",
    rating: 3,
    price: 20,
    img: "n/a",
    available: false,
  },
  {
    name: "Cesoie da giardino",
    category: "garden",
    rating: 5,
    price: 50,
    img: "n/a",
    available: true,
  },
  {
    name: "TV 50 pollici",
    category: "electronics",
    rating: 5,
    price: 150,
    img: "n/a",
    available: false,
  },
  {
    name: "radio auto",
    category: "car",
    rating: 5,
    price: 200,
    img: "n/a",
    available: false,
  },
  {
    name: "Bagnoschiuma",
    category: "house",
    rating: 2,
    price: 4.99,
    img: "n/a",
    available: true,
  },
  {
    name: "armadio da giardino",
    category: "garden",
    rating: 5,
    price: 44,
    img: "n/a",
    available: true,
  },
  {
    name: "Innaffiatoio piante",
    category: "garden",
    rating: 5,
    price: 10,
    img: "n/a",
    available: true,
  },
  {
    name: "Armadio camera da letto",
    category: "house",
    rating: 3,
    price: 20,
    img: "n/a",
    available: false,
  },
  {
    name: "Monitor",
    category: "electronics",
    rating: 4,
    price: 73,
    img: "n/a",
    available: true,
  },
  {
    name: "Specchietto auto",
    category: "car",
    rating: 5,
    price: 8,
    img: "n/a",
    available: true,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formatPrice(price) {
  const formattedPrice = price.toFixed(2).replace(".", ",");
  return formattedPrice;
}

for (let i = 0; i < products.length; i++) {
  const formatted = formatPrice(products[i].price); // PASSI UN NUMERO
  console.log(`${products[i].name}: € ${formatted}`); // STAMPI QUELLO FORMATTATO
}
console.log(`--------------------------------------------------------------
`);
/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function stars(rating) {
  switch (rating) {
    case 5:
      return "★★★★★";
      break;
    case 4:
      return "★★★☆☆";
      break;
    case 3:
      return "★★★☆☆";
      break;
    case 2:
      return "★★☆☆☆";
      break;
    case 1:
      return "★☆☆☆☆";
      break;
    default:
      return "☆☆☆☆☆";
  }
}

for (let i = 0; i < products.length; i++) {
  const startOutput = stars(products[i].rating);
  console.log(
    `${products[i].name} rating ${products[i].rating} -> ${startOutput}`,
  );
}

console.log(`--------------------------------------------------------------
`);

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filter(categoria) {
  let productsFiltered = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category === categoria) {
      productsFiltered.push(products[i]);
    }
  }
  return productsFiltered;
}

console.log(filter("electronics"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`--------------------------------------------------------------
`);

function bestAvailable(available, rating) {
  let arrayFiltered = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].available === true && products[i].rating >= 3) {
      arrayFiltered.push(products[i]);
    }
  }
  return arrayFiltered;
}

console.log(bestAvailable(true, "electronics"));

console.log(`--------------------------------------------------------------
`);

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
