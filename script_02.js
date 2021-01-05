const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Sors-moi la liste des titres des livres du CDI

const bookTitles = books.map ( book => ({title:book.title}));
console.log(bookTitles)

// Est-ce que tous les livres ont été au moins empruntés une fois ?


const booksBorrowed = books.filter(function(book) {
  return book.rented > 1
});
  if (booksBorrowed.length == books.length){
    console.log("Tous les livres ont été emrpuntés au moins une fois")
  } else {
    console.log("Certains livres n'ont jamais été emrpuntés")}

// Quel est livre le plus emprunté ?

const mostRented = books.reduce(function(prev, current) {
  return (prev.rented > current.rented) ? prev : current
})
console.log(mostRented)


// Quel est le livre le moins emprunté ?
books.sort(function(a, b){
  if(a.rented < b.rented) { return -1; }
  if(a.rented > b.rented) { return 1; }
  return 0;
})
console.log('Le livre le moins emrpunté est ' +books[0].title + "(" + books[0].rented + " fois)");


// Supprime le livre avec l'ID: 133712 ;

const finalArray = books.filter(item => item.id != 133712)
console.log(finalArray)
