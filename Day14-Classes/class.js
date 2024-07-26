//Activity 1 - Class Defination:

//Task 1 & 2-

class Person{
  name = 'Danish';
  age = 21;
  method(){
    return 'Greeting Message';
  }

  method2(){
    const updatedAge = this.age = 22;
    console.log(updatedAge);
  }

  static methodstatic(){
    return 'Good Morning';
  }
 
}

const person = new Person();
// console.log(person);
// console.log(person.method());
// person.method2();

console.log(Person.methodstatic());  //like this we can call a static method wihtout using instance of a class 


//Activity 2 - Class Inheritance:

//Task 1 & 2-

class Student extends Person {
  studentId = 1;

  method3(){
    return this.studentId;
  }

  method(){
    return `New message ${this.studentId}`;
  }

}

const student = new Student();
console.log(student.method3());
console.log(student.method());



//Activity 3 - Static Methods and Properties:

//Task 1 & 2-


//Activity 4 - Getters and setters:

//Task 1 & 2-

class Person1 {
  firstName = 'Shaikh';
  lastName = 'Danish';
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(val){
    const parts = val.split(' ');
    this.firstName = parts[0]
    this.lastName = parts[1]
    parts = 'Danish Shaikh'
  }
}


const person1 = new Person1();
console.log(person1.fullName);