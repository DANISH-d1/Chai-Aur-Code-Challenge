

    /***************************Activity No 1 -  For loop********************************/
    
    //Task No 1- 
    for (let i = 1; i <= 10; i++) {
      // console.log(i);
    }

    const fun = ['A','B','C','D','E'];

    for(let i = 0; i < fun.length; i++){
      // console.log(fun[i]);
    }

    //Task No 2-

    for(let i = 5; i < 6; i++){
      for(let j = 1; j <= 10; j++){
        // console.log(i + '*' + j + '=' + i*j);
      }
    }

    const number = 10;
    for(let i=1; i<=10; i++){
      const result = number * i;
      // console.log(`${number} * ${i} = ${result}`);
    }

    /***************************Activity No 2 -  While loop********************************/

    //Task No 3-

    let sum = 0;
    let i = 1;
    while (i <= 10) {
      sum += i;
      i++;
    }
    // console.log(sum);

    //Task No 4-

    let j = 10;
    while (j >= 1) {
      // console.log(j);
      j= j - 1;
    }

    for(let i=10; i>= 1; i--){
      // console.log(i);
    }

    /***************************Activity No 3 - Do  While loop********************************/
    
    //Task No 5-
    let index = 1;
    do {
      // console.log(index);
      index++;
    } while (index <= 5);

    //Task No 6-
    // const num = 5;
    // let fact = 1;
    // for(let i=num; i>=1; i--){
    //   fact = fact * i;
    // }
    // console.log(fact);


    let nums = 5;
    let fact = 1;
    do {
      fact = fact * nums;
      nums--;
    } while (nums>=1);
    // console.log(fact);

  /***************************Activity No 4 - Nested loop********************************/
    
  //Task No 7-

  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "* ";
    }
    string += "\n";
  }
  // console.log(string);

  /***************************Activity No 5 - Loop Control Statements********************************/

  //Task No 8-

  for (let i = 1; i <= 10; i++) {
    if(i === 5){
      continue;
    }
      // console.log(i);
    }

  //Task No 9-

  for (let i = 1; i <= 10; i++) {
    if(i === 7){
      break;
    }
      console.log(i);
    }
