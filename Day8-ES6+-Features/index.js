
    /************************Activity No 1- Template Literals*****************************/

    //Task No 1 & 2

    const dataOfPerson = {
      name: 'DANISH',
      age: 21
    }
    const temp = `
      name: ${dataOfPerson.name},
      age: ${dataOfPerson.age}
    `;
    // console.log(temp);
  
    const tempString = `
      hello everyone,
      welcome to the coding world
    `;
    // console.log(tempString);

    /************************Activity No 2- Destructuring*****************************/

    //Task No 3 - Array Destructuring:

    const numberArr = [1,2,3,4,5];
    //one way of accesing the value of array
    const firstValue = numberArr[0] 
    const secondValue = numberArr[1] 
    // console.log(firstValue);
    // console.log(secondValue);

    //now using Array Destructuring

    const [num1,num2,num3] = [10,20,30,40,50];
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);

    // const [name , surname] = ['Danish', 'Shaikh']
    // console.log(name);

    //Task No 4 - object Destructuring:

    const person = {
      name: 'Danish',
      age: 21,
      address: 'akola'
    };

    const {name , age} = person
    // console.log(name);
    // console.log(age);
     
    const {address} = person
    // console.log(address);


    /************************Activity No 3- Spread and Rest operator*****************************/

    //Task No 5 & 6 - Spread and rest operators:

    /* [Spread operator] - is used to unpack elements from an array or properties 
    from an object and place them into another array or object.

    [Rest operator] - the rest operator is only used in function arguments or for destructing,
    its allows a function to accept an infinte number of arguments and collect them as an array.
    */
    const arr1 = [1,2,3,];  
    const arr2 = [...arr1,4,5,6]

    // console.log(arr2);

    
    const obj1 = {name: 'Danish'};
    const obj2 = {age: 21};

    const mergedObj = {...obj1,...obj2};
    // console.log(mergedObj);
    

    function printNumber(...num){
      console.log(num);
    };

    // printNumber(1,2,3,4,5)


    //using for of loop- 

    // function sumOfNumbers(...num){
    //   let sum = 0;
    //   for (const key of num) {
    //     sum += key;
    //   } 
    //   return sum;
    // }
    // console.log(sumOfNumbers(1,2,3,4,5));
    // console.log(sumOfNumbers(1,2,3,4,10));
    // console.log(sumOfNumbers(10,20,30,40));


    //using forEach()-

    function sumOfNumbers(...nums){
      let sum =0;
      nums.forEach((n) => {
        sum += n;
      });
      console.log(sum);
    }
    // sumOfNumbers(1,2,3,4,5);
    // sumOfNumbers(1,2,3,4,5,6);
    // sumOfNumbers(10,20,30);
    
    
    /************************Activity No 4- Default Parameters*****************************/

    //Task No 7 -

    function returnProduct(product1,product2 = 1){
      console.log(`first product is: ${product1} and second is: ${product2}`);
    }
    // returnProduct(2,4) //op- first product is: 2 and second is: 4
    // returnProduct(5) //op- first product is: 5 and second is: 1


    /************************Activity No 5- Enhanced Object Literals *****************************/

    //Task No 8 & 9 -

    const pets = {
      dog: {
        name: 'sam',
        age: 3
      },
      cat:{
        name: 'meenu',
        age: 2
      }
    }

    const favPet = {pets}
    console.log(favPet.pets.cat);

    const courseName = 'JavaScript';
    const coursePrice = 5999;
    const newCourse = function(){
      console.log('New Courses Soon!!');
    } 

    const buyedCourse = {
      courseName ,
      coursePrice,
      newCourse
    };

    console.log(buyedCourse);
    console.log(buyedCourse.courseName);
    buyedCourse.newCourse();
