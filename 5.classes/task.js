//Задача №1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 100;
     this.type = null;
  }
  fix() {
     this.state *= 1.5; 
  }

  set state(n) {
     if (n < 0) {
        this.state = 0;
     } if (n > 100) {
        this.state = 100;
     } else {
        this._state = n;
     }
  }
  get state() { 
     return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
     super(name, releaseDate, pagesCount, state, type);
     this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
     super(name, releaseDate, pagesCount, state, type);
     this.author = author;
     this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
     super(author, name, releaseDate, pagesCount, state, type);
     this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
     super(author, name, releaseDate, pagesCount, state, type);
     this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
     super(author, name, releaseDate, pagesCount, state, type);
     this.type = "detective";
  }
}


// Задача №2. Библиотека

class Library {
  constructor(name, books) {
     this.name = name;
     this.books = [];
  }


  addBook(book) {
     if (book.state > 30) {
     this.books.push(book);   
     }
  }
  findBookBy(type, value) {
  let findIdexBook = this.books.find(item => item[type] === value)
     if (findIdexBook)  {
        return findIdexBook;
     } else {
        return null;
     }
}
giveBookByName(bookName) {
let findName = this.books.findIndex(item => item.name === bookName);
  if (findName > -1) {
     return this.books.splice(findName, 1) [0];
  } else {
     return null;
  }
}

}


//Задача №3. Журнал успеваемости

class Student {
  constructor(name) {
     this.name = name;
     this.subjects = {
     };
  };
  
addMark(mark,subjectName) {
  if(!this.subjects[subjectName]){
    this.subjects[subjectName] = [];
  }
  if (mark >= 1 && mark <= 5) {
     this.subjects[subjectName].push(mark);
  } else {
     console.log("Ошибка, оценка должна быть числом от 1 до 5");
  }
  return this.subjects[subjectName];
}
   getAverageBySubject(subjectName){
      if(this.subjects[subjectName]){
       return this.subjects[subjectName].reduce((sum, item) => sum + item,0) / this.subjects[subjectName].length;
      }else{
         console.log("Несуществующий предмет");
      }
   }

   getAverage(){
     const AverageMarksArrays = [];
       for (let i = 0; i < Object.keys(this.subjects).length; i++) {
           AverageMarksArrays.push(this.subjects[Object.keys(this.subjects)[i]]);
       }
       let allAverageMarks = AverageMarksArrays.flat();
       let sumTotal = 0;
       allAverageMarks.forEach((averageMark) => {sumTotal += averageMark});
       return sumTotal / allAverageMarks.length;
     }

     exclude(reason){
        delete this.subjects;
        delete this.mark;
        this.exclude = reason;
     }
}