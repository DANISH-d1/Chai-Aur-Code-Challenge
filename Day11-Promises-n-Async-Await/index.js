/********************Activity No 1 - Understanding Promises*********************/

//Task No 1-

const taskOnePromise = new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log('Task 1 done');
  },2000)
})

//Task No 2-

const taskTwoPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve('Task 2 done');
    } else{
      reject('ERROR: something went wrong');
    }
  },2000)
})

taskTwoPromise.then((msg) => {
  console.log(msg);
}).catch((error) => {
  console.log(error);
})


/********************Activity No 2 - Chaining Promises*********************/

//Task No 1-

const taskThreePromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({username:'JavaScript', id: 123})
    }else {
      reject('ERROR: something went wrong')
    }
  },1000)
});

taskThreePromise.then((user) => {
  console.log(user);
  return user.username;
})
.then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
})


/********************Activity No 3 - Using Async/Await*********************/

//Task No 1-

const awaitPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  },1000)
})

async function promiseFunction(){
  const message = await awaitPromise;
  console.log(message); 
}

promiseFunction();


//Task No 2-

const tryCatchPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve('Promise resolved')
    }else {
      reject('ERROR: Promise not resolved')
    }
  },1000)
});

async function checkPromise(){
  try {
    const checkMsg = await tryCatchPromise;
    console.log(checkMsg);
  } catch (error) {
    console.log(error);
  } finally{
    console.log('Promise Either Resolved or Rejected');
  }
}

checkPromise();


/********************Activity No 4 - Fetching Data from Api*********************/

//Task No 1-

const apiPromise = new Promise((resolve,reject) =>{
  const response = fetch('https://api.github.com/users/hiteshchoudhary');
  resolve(response);
})

apiPromise.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})

//way two
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
})


//Task 2 -

async function getAlldata() {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  const data = await response.json();
  console.log(data);
}

getAlldata();


/********************Activity No 5 - Concurrent Promises*********************/

//Task No 1-

const promiseOne = new Promise((resolve,reject) => {
  resolve('Promise One');
})
const promiseTwo = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Promise Two')
  },1000)
})

Promise.all([promiseOne,promiseTwo]).then((values) => {
  console.log(values);
});