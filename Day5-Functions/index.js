
    /***********************Activity No 1-Function Declaration***************************/
    
    //Task No 1-
    function printEvenOrOdd(num){
      if(num % 2 === 0){
        console.log(`Number ${num} is Even`);
      } else{
        console.log(`Number ${num} is Odd`);
      }
    }
    // printEvenOrOdd(3);
    // printEvenOrOdd(6);

    //Task No 2-

    function printSquare(number){
      return  number * number

    }
    // console.log(printSquare(6));
    // console.log(printSquare(2));

    /***********************Activity No 2-Function Expression***************************/
    
    //Task No 1-
  
    function MaxNumber(num1,num2){
      if (num1 >= num2) {
        return num1
      } else {
        return num2
      }
    }
    // console.log(MaxNumber(20,100));

    //Task No 2-
    const str1 = 'Danish';
    const str2 = ' shaikh';
    function addTwoString(){
      // const concat = str1.concat(str2);
      // console.log(concat);
      return str1 + str2
    }
    // addTwoString();
    // console.log(addTwoString());

    /***********************Activity No 3-Arrow Function***************************/
    
    //Task No 1-

    const cal = (sum1,sum2) => {
      return sum1 + sum2
    }
    // console.log(cal(5,5));

    //Task No 2-
    const str = 'Danish';

    const checkString = (str) => {
      if(str.includes('z')){
        return true;
      } else {
        return false;
      }
    }
    // console.log(checkString(str));

    /***********************Activity No 4-Function Parameters and Default Values***************************/
    
    //Task No 1-

    function showProduct(product1, product2 = 10){
      console.log(product1,product2);
    }
    // showProduct(1);

    //Task No 2-

    function personData(name,age = 21){
      console.log(`Welcome Mr.${name} you are very young just ${age} happy to see you`);
    }
    // personData('Danish');


    /***********************Activity No 5-Higher Order-Functions***************************/
    
    //Task No 1-
    // function func(){
    //   console.log('this is function');
    // }

    // function higherOrderFunc(func,num){
    //   console.log('this is High order funtion');
    //   for(let i=0; i < num; i++){
    //     func();
    //   }
    // }

    // higherOrderFunc(func(),3);

    function call(a,b,cb){
      let result = a + b;
      cb(result);
    }
    call(2,4, (val) => console.log(val));