
    /*******Activity No 1- Array Creation and Access*******/

    //Task No 1-

    const Arr1 = [1,2,3,4,5];
    // console.log(Arr1);

    // console.log(Arr1[0]);
    // console.log(Arr1[4]);

   /*******Activity No 2- Array Methods(Basic)*******/

   //Task No - 3,4,5,6;

   const Arr2 = [1,2,3,4,5];
    // console.log(Arr2);

   Arr2.push(6);
  //  console.log('updated Array after push operation:',Arr2);

   Arr2.pop();
  //  console.log('updated Array after pop operation:',Arr2);

   Arr2.shift();
  //  console.log('updated Array after shift operation:',Arr2);

   Arr2.unshift(1);
  //  console.log('updated Array after unshift operation:',Arr2);

  /*******Activity No 3- Array Methods(intermediate)*******/

  //Task No - 7,8,9;

  const Arr3 = [1,2,3,4,5];

  Arr3.map((element) => {
    const newArr = element + 1;
    // console.log(newArr);
  })

  const value = Arr3.filter((arr) => {
    return arr % 2 === 0;
  })
  // console.log(value);

 
  Arr3.reduce((element) => {
   const sum = Arr3.reduce((acc,curVal) => acc + curVal, 0)
    // console.log(sum);
  });


  /*******Activity No 4- Array Iteration*******/

  //Task No- 10,11;

  const Arr4 = [10,20,30,40,50];

  for(let i=0; i < Arr4.length; i++){
    // console.log(Arr4[i]);
  }

  const Arr5 = [1,2,3,4,5];

  Arr5.forEach((arr) => {
    // console.log(arr);
  })


  /*******Activity No 5-Multi-Dimensional Array*******/

  //Task No- 12,13;

  const info = [
    ['Danish', 21, 'Akola'],
    ['Raj', 26, 'Mumbai'],
    ['Joy', 25, 'Pune'],
  ];

  info.forEach((ele) => {
    console.log(ele);
  });

  console.log(info);
  console.log(info[0]);
  console.log(info[0][2]);
  console.log(info[1][1]);
  console.log(info[2][0]);

  console.log(info.flat(Infinity));

 