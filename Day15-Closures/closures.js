/*Lexical Scoping

function init() {  
  let name = "Mozilla"; 
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();



function outer(){
  let username = 'Danish';
  function inner(){
    let secret = "xyz";
    console.log('inner', username);
  }
  function innerTwo(){
    console.log('innerTwo', username);
    console.log(secret);
  }
  inner();
  innerTwo();
}
outer();

// console.log('To outer', username);

*/


//Closure -

function makeFunc() {         
  const name = "Mozilla";
  function displayName() { 
    console.log(name);
  }
  return displayName; //here just only executional context will not return here whole lexical hope will return
}

const myFunc = makeFunc(); 
myFunc();
/*
  makeFunc(); -
  here we execute then whole scope gone ab kese chalegi lexical scoping jbatk 
  outer function tha tbhi toh inner chl raha tha ab outer function hi gayb hogya tog ab?
*/
/* 
here is the interesting topic closures-
although apne waha se uska scope or execution context hta diya hain but memory ka role aajeyga

in makeFunc()-> 
  we return displayName; toh yaha sirf displayName nhi jayega uska
  agar outer function bhi exist karta hain uska bhi pura scope jayega
*/


/***************************Activity No 1- Understanding Closures***************************/