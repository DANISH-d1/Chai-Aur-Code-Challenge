//Activity No 1- Task 1:
export function addTwoNumbers(num1,num2){
  console.log(num1 + num2);
}

// addTwoNumbers(10,5);


//Activity No 1- Task 2:

export const person = {
  name: 'Danish',
  age: 21,
  address: 'Akola'
};


//Activity No 2- Task 1: Named Export

const name = 'Danish Shaikh';

function ageOfPerson(age){
  console.log('Age is:', age);
}

export { name, ageOfPerson };

//Activity No 2- Task 1: Default exports

function defaultModule(){
  console.log('this is Default Export');
};

export default defaultModule;



