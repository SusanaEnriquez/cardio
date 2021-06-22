const inventors = [
  { name: "Albert", lastName: "Einstein", year: 1879, passed: 1955 },
  { name: "Isaac", lastName: "Newton", year: 1643, passed: 1727 },
  { name: "Galileo", lastName: "Galilei", year: 1564, passed: 1642 },
  { name: "Marie", lastName: "Curie", year: 1867, passed: 1934 },
  { name: "Johannes", lastName: "Kepler", year: 1571, passed: 1630 },
  { name: "Nicolaus", lastName: "Copernicus", year: 1473, passed: 1543 },
  { name: "Max", lastName: "Planck", year: 1858, passed: 1947 },
  { name: "Katherine", lastName: "Blodgett", year: 1898, passed: 1979 },
  { name: "Ada", lastName: "Lovelace", year: 1815, passed: 1852 },
  { name: "Sarah E.", lastName: "Goode", year: 1855, passed: 1905 },
  { name: "Lise", lastName: "Meitner", year: 1878, passed: 1968 },
  { name: "Hanna", lastName: "Hammarström", year: 1829, passed: 1909 },
];

// 1) Filter the list of inventors for those who were born in the 1500's
console.log(`1) Filter the list of inventors for those who were born in the 1500's :`);
  var newInventors = [];
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    if(inventor.year >= 1500 && inventor.year < 1600){
      newInventors.push(inventor);
    }
  }
  console.log(newInventors);  


// 2) Give us an array of the inventor name and last names
// ['Albert Einstein']
console.log(`2) Give us an array of the inventor name and last names :`);
  var names = [];
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    names.push(inventor.name + " " + inventor.lastName);
  }
  console.log(names);  

// 3) Sort the inventors by birthdate, oldest to youngest
console.log(`3) Sort the inventors by birthdate, oldest to youngest :`);

// 4) How many years did all the inventors live?
console.log(`4) How many years did all the inventors live ?`);
  var live = [];
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    live.push(inventor.name + " " + inventor.lastName + ", lived:" + (inventor.passed-inventor.year))
  }
  console.log(live); 

// 5)  is at least one person 19 ? true or false
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];
console.log(`5)  is at least one person 19 ? true or false`);
  var onlyOne = false;  
  for (let i = 0; i < people.length; i++) {
      const p = people[i];
      if(2021 - p.year == 19){
        answer = true;
      } 
    }
    console.log(onlyOne);
  

// 6) all are over 19 ? true or false
console.log(`6) all are over 19 ? true or false`);
  var all = false;  
  for (let i = 0; i < people.length; i++) {
      const p = people[i];
      if(2021 - p.year >= 19){
        answer = true;
      } 
    }
    console.log(all);

// 7) find and return the comment with the id of 823423
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

console.log(`7) find and return the comment with the id of 823423`);
  function find(id)  {
  for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if(comment.id === id ){
        return(comment)
      }
    }
  }
  console.log(find(823423));