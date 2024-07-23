
  /**************************Activity No 1: Arithmetic Operators*****************************/
  //Task no 1- Add two numbers:
    const num1 = 10;
    const num2 = 20;
    const sum = num1 + num2;
    // console.log(sum);

    function total(num1,num2){  //we can also create a function for add two numbers
      return num1 + num2;
    }
    // console.log(total(num1,num2));
    // console.log(total(10,40));

    //Task no 2- Subtract two number:
    const subNum1 = 10;
    const subNum2 = 5;
    const subtract = subNum1 - subNum2;
    // console.log(`After the Subtraction of Numbers ${subNum1} - ${subNum2} is : ${subtract}`);
    
    function subtraction(subNum1,subNum2){ //same for the subtraction we can create a function
      // const subtract = subNum1 - subNum2;
      // console.log(subtract); //both ways are correct
      return subNum1 - subNum2;
    };
    // subtraction(50,30)
    // console.log(subtraction(100,50));


    //Task no 3 - Multiply two numbers:
    const mul1 = 5;
    const mul2 = 10
    const multiply = mul1 * mul2;
    // console.log(multiply);
    
    //Task no 4 - Divide two numbers:
    const div1 = 100;
    const div2 = 5;
    const divide = div1 / div2;
    // console.log(divide);


    //A function which take any type of Arithmetic operator and perform operation.
    function performOperations(operator,val1,val2){
      if (operator === '+') {
        return val1 + val2;
      
      } else if (operator === '-'){
        return val1 - val2;
      
      } else if (operator === '*'){
        return val1 * val2;
      
      } else if (operator === '/'){
        return val1 / val2;
      }
    }
    // console.log(performOperations('+',5,5));
    // console.log(performOperations('-',10,5));
    // console.log(performOperations('*',10,5));
    // console.log(performOperations('/',100,10));

    //Task no 5- Find the remainder
    const rem1 = 6;
    const rem2 = 4;
    const remainder = rem1 % rem2;
    // console.log("Remainder is :",remainder);


  /**************************Activity No 2:Assignment Operators*****************************/
    
    //Task no 6-  use the += operator to add a number

    let totalNumber = 10;
    const number = 10;
    totalNumber += number;
    // console.log(totalNumber);

    //Task no 7-  use the -= operator to add a number

    let taskNo7 = 10;
    const number1 = 5;
    taskNo7 -= number1;
    // console.log(taskNo7);

    /**************************Activity No 3: Comparison Operators*****************************/

    //Task no 8-  use the comparison operator '> and <'
    const age = 19;
    if (age > 18) {
      // console.log('You can Drive Car');
    } else {
      // console.log('You cannot Drive Car');
    }

    //Task no 9- use the comparison operator '>= and <='
    const payment = 500;
    if (payment >= 5000) {
      // console.log('you got a gift Voucher');
    } else if (payment <= 5000){
      // console.log('For a gift Voucher, bill should be 5000 at least');
    }

    //Task no 10- use the comparison operator '== and ==='

    const value1 = 5;
    const value2 = '5';

    // console.log(value1 == value2); // true - The values are the same after type conversion
    // console.log(value1 === value2); // false - The values are different types and not equal

    const bool = true;
    const num = 1;

    // console.log(bool == num); //true - The boolean value true gets converted to 1
    // console.log(bool === num); // false - The values are different types and not equal
    
    
    /**************************Activity No 4: Logical Operators*****************************/

    //Task no 11- use the logical operator '&&'
    
    const person = [{
      name: 'Danish',
      age: 21,
      nationality: 'Indian'
    },{
      name: 'Shaikh',
      age: 22,
      nationality: 'Dubai'
    }];

    person.forEach((person) => {
      if (person.age > 18 && person.nationality === 'Indian') {
      // console.log(person.name ,'You can Drive Car');
    } else {
      // console.log(person.name,'Sorry some condition is not satisfied');
    }
    })

    //Task no 12- use the logical operator '||'

    const a = 5;
    const b = -5;
    
    if( a > 0 || b > 0){
      // console.log('condition is true');
    } 

    //Task no 13- use the logical operator '!'

    const condition = false;

    if(!condition){
      console.log('Condition');
    }

  /**************************Activity No 5: Ternary Operators*****************************/

  //Task no 14- use Ternary operator
  
  // const checkNumber = 5;
   
  // console.log(checkNumber > 0 ?  'no is positive' : 'no is negative');

    function checkNumber(value){
      return value > 0 ? 'Number is positive' : 'Number is negative';
    }
    
    console.log(checkNumber(10));
    console.log(checkNumber(-10));