const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

const entrepreneursNames = entrepreneurs.map( person => ({first:person.first, last:person.last}) );
console.log(entrepreneursNames)

// Remplace dates par âge

const entrepreneursAge = entrepreneurs.map( person => ({first:person.first, last:person.last, age:2020 - person.year}) );
console.log(entrepreneursAge)


// Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName

const entrepreneursNewKeys = entrepreneursAge.map( person => ({firstName:person.first, lastName:person.last, age:person.age }) );
console.log(entrepreneursNewKeys)


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("Né.e.s dans les 70's :")

const entrepreneursBornInSeventies = entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980
});
console.log(entrepreneursBornInSeventies)
