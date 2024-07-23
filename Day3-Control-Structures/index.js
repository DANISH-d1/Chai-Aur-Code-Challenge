
    /********************************-Activity No 1-If-else statement******************************/
    
    //Task No 1-
    const Number = -5;
    if (Number > 0) {
      // console.log('Number is Positive');
    } else{
      // console.log('Number is Negative');
    }

    //Task No 2-
    const age = 17;
    if (age >= 18) {
      // console.log('You are eligible for vote');
    } else{
      // console.log('You are not eligible for vote');
    }

    /********************************-Activity No 2-Nested if-else statement******************************/

    //Task No 3-

    const num1 = 10;
    const num2 = 20;
    const num3 = 30;

    if (num1 >= num2 && num1 >= num3) {
      // console.log(num1);

    } else if (num2 >= num1 && num2 >= num3){
      // console.log(num2); 
    } else {
      // console.log(num3);
    }

    /********************************-Activity No 3- Switch Case******************************/
    
    //Task No 4-

    const days = 2;
    switch (days) {
      case 1:
        console.log('monday');
        break;
      case 2:
        console.log('tuesday');
        break;
      case 3:
        console.log('wednesday');
        break;
      case 4:
        console.log('thursday');
        break;
      case 5:
        console.log('friday');
        break;
      case 6:
        console.log('saturday');
        break;
      case 7:
        console.log('sunday');
        break;
      default:
        console.log('Not matched');
        break;
    }

    //Task No 5-

    const score = 95;

    switch (true) {
      case score >= 90:
        console.log('A');
        break;
      case score >= 80:
        console.log('B');
        break;
      case score >= 70:
        console.log('C');
        break;
      case score >= 60:
        console.log('D');
        break;

      default:
        console.log('F');
        break;
    }
   

    /********************************-Activity No 4- Conditional(Ternary) Operator-******************************/
    
    //Task No 6-

    const checkNumber = 8;
    const result = checkNumber % 2 === 0 ? "even" : "odd";
    console.log(result);
    

    /********************************-Activity No 5-Combining Conditions-******************************/
    
    //Task No 7

    function checkLeapYear(year){
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
      } else {
        console.log(year + ' is not a leap year');
      }
    }
    checkLeapYear(2000);
