//Activity No 1- Task 1:

import { addTwoNumbers } from './index2.js';

addTwoNumbers(5,5);


//Activity No 1- Task 2:

import { person } from './index2.js';

console.log(person);
console.log(person.age);
person.course = 'js';
console.log(person);


//Activity No 2- Task 1: Named exports

import {name , ageOfPerson} from './index2.js';

console.log(name);

ageOfPerson(21);


//Activity No 2- Task 1: Default exports

import defaultModule from './index2.js';

defaultModule();


//Activity No 3- Task 1: Importing Entire Module


import * as User from './index2.js';

// User.addTwoNumbers(1,1);  
// console.log(User.person);
// console.log(User.name);
/*
here we assign a name for entire module user
 using dot notation we can acces any module which is present in the index2.js file
 */


//Activity No 4- Task 1,Task 2:
//Activity No 5- Task 1,Task 2:
