/*********************Activity No 1- Basic Recursion***********************/

//Task No 1- Factorail Number

//5 => 5*4*3*2*1

function factorial(n){
  if (n === 0) {
    return 1;
  } else return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(6));


//Task No 2 - Fibonacci Number


function fibrecursion(n){

  if(n <= 1) return n;
  return fibrecursion(n - 1) + fibrecursion(n - 2);
}

console.log(fibrecursion(3));


/*********************Activity No 2- Recursion with Arrays***********************/

//Task No 1-

function arrayRecursion(arr){
  console.log(arr);
  if (arr.length <= 0) {
    return 0;
  }
  return arr[arr.length -1] + arrayRecursion(arr.slice(0, arr.length-1));
}
console.log(arrayRecursion([1,2,3,4]));


//Task No 2-


/*********************Activity No 3- String Manipulation with Recursion***********************/

//Task No 1-

function reverseString(str){
  if(str === ""){
    return "";
  } else{
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString('hello'));