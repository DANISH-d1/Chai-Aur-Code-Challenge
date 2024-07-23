

    /*********************Activity No 1- Object creation and Access*************************/

    //Task No 1 & 2-

    const book = {
      title: 'History',
      author: 'villiam',
      year: 2004
    }
    // console.log(book);
    // console.log(book.title);
    // console.log(book.author);

    // book.author = 'Sam';
    // console.log(book);

    /*********************Activity No 2- Object Methods*************************/

    //Task No 3 & 4-

    const book2 = {
      title: 'English',
      author: 'Robin',
      year: 2000,
      func: function(){
        return `${book2.title}, ${book2.author}`
      },
      change: function(year){
        book2.year = year;
        console.log(book2);
      }
    }
    // console.log(book2.func());
    // book2.change(2024);


    /*********************Activity No 3- Nested Objects*************************/

    //Task No 5 & 6-

    const book3 = {
      title: 'JavaScript',
      author: 'Brendan Eich',
      year: 1995,
      library: {
        name: 'js',
        books: 'no1'
      }
    }
    console.log(book3.library);
    console.log(book3.library.name);

    const library = [{
      name: 'python',
      books: 'bk1'
    },{
      name:'java',
      books: 'bk2'
    }];

    // console.log(library);
    library.forEach((bk) => {
      // console.log(bk.name);
    });


    const courses = [
      {courseName: 'js', price: 10000, startingDate: '20th july'},
      {courseName: 'py', price: 5999, startingDate: '18th july'},
      {courseName: 'html css', price: 1999, startingDate: '30th july'},
    ];

    // console.log(courses[2].price);

    const selected =  courses.filter((c) => {
      return c.price > 5000
    });
    // console.log(selected);

    courses.forEach((c) => {
      console.log(`The starting date of course ${c.courseName} is ${c.startingDate}`);
    })

    /*********************Activity No 4- The this Keyword*************************/

    //Task No 7-

    const book4 = {
      title: 'JavaScript',
      author: 'Brendan Eich',
      year: 1995,
      book: function() {
        console.log(`The title of book is: ${this.title} and year of publish is: ${this.year}`);
      },
    }
    // book4.book();


    /*********************Activity No 5- Object Iteration*************************/

    //Task No 8 & 9-

    const book5 = [{
      title: 'js',
      year: 2000
    },{
      title: 'py',
      year: 1995
    }];

    for (const value in book5) {
      // console.log(book5[value]);
    }


    const course = {
      course1: 'js',
      course2: 'py',
      course3: 'php',
      course4: 'nodeJs',
    }

    // console.log(Object.keys(course));
    // console.log(Object.values(course));

    for (const key in course) {
      // console.log(course[key]);
      // console.log(`${key} : ${course[key]}`);
    }


    const arr = [10,20,30,40,50];

    for (const key in arr) {
    //  console.log(`at index ${key} value is ${arr[key]}`);
    }

