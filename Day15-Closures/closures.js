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


/********************Activity No 1- Understanding Closures*********************/

//Task No 1-

function parentFunc(){
  const parentName = 'xyz';
  function childFunc(){
    console.log('My parent name is:',parentName);
  }
  return childFunc;
}

const callFunc = parentFunc();
callFunc();


//Task No 2-

function CloFunc(n){
  return function counFunc(){
    return n++;
  };
};

const counter = CloFunc(5);
// console.log(counter());
// console.log(counter());
// console.log(counter());


/********************Activity No 2- Practical Closures*********************/

//Task No 1-

function generateUniqueId(){
  // let uniqueId = Math.round(Math.random() * 10 + 1);
  let uniqueId = 2;
  console.log('Id before increment', uniqueId);
  return function(){
    //  const lastGeneratedId = uniqueId + 1;
    //  uniqueId = lastGeneratedId;
    //   return lastGeneratedId
    // return uniqueId = uniqueId + 1;
    return uniqueId += 1;
    }
  
}

// const callId = generateUniqueId();
// console.log(callId());
// console.log(callId());
// console.log(callId());


//Task No 2-

function closreFunc(username){
  
  return function (){
    return `Welcome Back ${username}`;
  }
}

// const callUser = closreFunc("shaikh");
// console.log(callUser());


/********************Activity No 3- Closures in Loops*********************/

//Task No 1-

// function loopClosure(){
//   let arr = [];
//    function n(){}
//   for(let i = 0; i < 3; i++){
//     arr.fill(n())
//   }
//   console.log(arr);
// }
// loopClosure();


/********************Activity No 4- Module Pattern*********************/

//Task No 1-

function closueFunction(){
  let collection = [1,2];

   function addItem(){
     collection.push(3);
     console.log(collection);
    }
    
  function removeItem(){
    collection.pop();
    console.log(collection);
  }
   return {
    addItem,removeItem
   };
}
// const method = closueFunction();
// method.addItem();
// method.removeItem();



/********************Activity No 5- Memoization*********************/

//Task No 1-


function result(a,b){
  const result = a + b;
  let preResult= result;
  function memo(){
    preResult += preResult;
    console.log('previous result was:', preResult);
  }
  memo();
  console.log(result);
}

// result(1,3)

function memoize(fn) {
  return fn;
}

const fn = (a, b) => a * b;
const memoizedFn = memoize(fn);

console.log(memoizedFn(1, 1)); // 1 (first call: cold)
console.log(memoizedFn(1, 1)); // 1 (not memoized: it'll execute the function again)
console.log(memoizedFn(1, 2)); // 2 (first call: cold)