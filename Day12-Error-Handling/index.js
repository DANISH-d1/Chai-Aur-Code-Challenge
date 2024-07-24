/*********************Activity No 1- Error handling with try-catch***********************/

//Task No 1 & 2
const functionOne = () => {
  try {
    console.log(Danish);
  } catch (error) {
    console.log('ERROR: something went wrong');
  }
}

functionOne();


function divideNumbers(num,denominator){
  try {
    if (denominator === 0) {
      throw new Error('Invalid Denominator')
    }
    const result = num / denominator;
    console.log(result);
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}

divideNumbers(5,0);


/*********************Activity No 2- Finally Block***********************/

//Task No 3-

let error = false;

try {
  if (error) {
    console.log('Code runs');
  } else {
    throw new Error('Condition is false');
  }
} catch (error) {
  console.log('ERROR:', error.message);
} finally{
  console.log('Code runs but some Errors are there');
}



function functionTwo(){
  // throw new Error('ERROR: something went wrong')
  log;
}

function functionMain(){
  try {
    functionTwo();  //so here when try got the error try block directly goes to the catch block and runs remaining code
    console.log('function two called here'); //because before running this log try got error this line will not execute
  } catch (error) {
    // console.log(error.message);
    console.log('error');
  } finally{
    console.log('finally block runs');
  }
}

// functionMain();



/*********************Activity No 3- Custom Error Objects***********************/

//Task No 4 & 5-





/*********************Activity No 4- Error Handling in Promises***********************/

//Task No 6 & 7-

const promiseOne = new Promise((resolve,reject) => {
  const num = -5;
  if (num > 0) {
    resolve('Number is greater than zero');
  } else{
    reject('Number is less than zero');
  }
})

promiseOne.then((msg) => {
  console.log(msg);
}).catch((rejMsg) => {
  console.log(rejMsg);
})


const promiseTwo = new Promise((resolve,reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      resolve('Message runs after 1 second')
    } else{
      reject('Message doesnt runs')
    }
  }, 1000)
});

async function runPromiseTwo(){
  try {
    const  checkMsg = await promiseTwo;
    console.log(checkMsg);
  } catch (error) {
    console.log(error);
  }
}
// runPromiseTwo();



/*********************Activity No 5-Gracefull Error Handling in Fetch**********************/

//Task No 8 & 9-

fetch('https://api.com/main/danishshaikh')
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch(() => {
  console.log('ERROR: fetch failed');
})


async function checkApi(){
  try {
    const response = fetch('https://api.com/main/danishshaikh')
    const data = (await response).json();
    console.log(data);
  } catch (error) {
    console.log('ERROR: APi fetch failed');
  }
}

checkApi();