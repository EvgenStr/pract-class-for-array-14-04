// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
"use strict";

function getSum(number) {
  if (number <= 0) return null;
  return number + getSum(number - 1);
}

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте
class Student {
  constructor(name, surname, isMale, contacts, faculty) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.faculty = faculty;
  }
  set name(newName) {
    this._validateString(newName);
    this._name = newName;
  }
  get name() {
    return this._name;
  }
  set surname(newSurName) {
    this._validateString(newSurName);
    this._surname = newSurName;
  }
  get surname() {
    return this._surname;
  }
  set isMale(newGender) {
    if (typeof newGender !== "boolean") throw new TypeError();
    this._isMale = newGender;
  }
  get isMale() {
    return this._isMale;
  }
  set contacts(newContacts) {
    this._contacts = newContacts;
  }
  get contacts() {
    return this._contacts;
  }
  set faculty(newFaculty) {
    if (!newFaculty instanceof University) throw new Error();
    this._faculty = newFaculty;
  }
  // get studentInfo() {
  //   return Object.entries(this);
  // }
  _validateString(value) {
    if (typeof value !== "string") throw new TypeError();
  }
}

class University {
  constructor(faculty, department) {
    this.faculty = faculty;
    this.department = department;
  }
  set faculty(newFaculty) {
    if (typeof newFaculty !== "string") throw new TypeError();
    this._faculty = newFaculty;
  }
  get faculty() {
    return this._faculty;
  }
  set department(newDepartment) {
    if (typeof newDepartment !== "string") throw new TypeError();
    this._department = newDepartment;
  }
  get department() {
    return this._department;
  }
}

const UNIVERSITY = new University("Math", "Computer science");
const std1 = new Student("John", "Doe", true, "4444", UNIVERSITY);
function getStudentInfo(student) {
  console.log(Object.entries(student));
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

function initArrayInt(amount) {
  const result = [];
  for (let i = 0; i < amount; i++) {
    result.push(getRandomInt(0, 5));
  }
  return result;
}

function getRandomIntArray(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEvenIndex(array) {
  for (let i = 0; i < array.length; i + 2) {
    console.log(array[i]);
  }
}

function getEvenElems(array) {
  return array.filter((element) => element % 2 === 0);
}

function getZeroElems(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      result.push(i);
    }
  }
  return { zeroIndex: result, zeroCount: result.length };
}

const arr = initArrayIntArray(25);
// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
// 4.1 Для каждого поля создать get и set с проверкой типов.

class Book {
  constructor(author, title, year, publishingOffice) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publishingOffice = publishingOffice;
  }
  set author(value) {
    this._validateString(value);
    this._author = value;
  }
  get author() {
    return this._author;
  }
  set title(value) {
    this._validateString(value);
    this._title = value;
  }
  get title() {
    return this._title;
  }
  set year(value) {
    if (typeof value !== "number") throw new TypeError();
    this._year = value;
  }
  get year() {
    return this._year;
  }
  set publishingOffice(value) {
    this._validateString(value);
    this._publishingOffice = value;
  }
  get publishingOffice() {
    return this._publishingOffice;
  }
  _validateString(value) {
    if (typeof value !== "string") throw new TypeError();
  }
}
class EBook extends Book {
  constructor(author, title, year, publishingOffice, format, isbn) {
    super(author, title, year, publishingOffice);
    this.format = format;
    this.isbn = isbn;
  }
  set format(value) {
    if (typeof value !== "number") throw new TypeError();
    this._format = value;
  }
  get format() {
    return this._format;
  }
  set isbn(value) {
    if (typeof value !== "number") throw new TypeError();
    this._isbn = value;
  }
  get isbn() {
    return this._isbn;
  }
}
// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
