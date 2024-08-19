  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
const multByTwo = function (num){
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const resultsOne = nums.map(function (num){ return num * 2; });
console.log(resultsOne);

// Simplfied w/ map() + arrow function
const resultsTwo = nums.map(num => num * 2);
console.log(resultsTwo);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentsWithIds = students.slice(0, 2).map(student => ({
  id: student.id,
  name: student.name
}));
console.log(studentsWithIds);

const ages = [24, 25, 26];

const studentsWithIdsTwo = students.map((student, index) => ({
  ...student,
  age: ages[index]
})); 

console.log(studentsWithIdsTwo);