// Problem - 01

const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((item) => item % 2 === 0);
};

// Problem - 02

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// Problem - 03

type StringOrNumber = string | number;

const checkType = (data: StringOrNumber): "String" | "Number" => {
  if (typeof data === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Problem - 04

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Problem - 05

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

type BookWithStatus = Book & {
  isRead?: boolean;
};

const toggleReadStatus = (book: Book): BookWithStatus => {
  return { ...book, isRead: true };
};

// Problem - 06

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem - 07

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  let lookedUpArr = new Set(arr1);

  return arr2.filter((item) => lookedUpArr.has(item));
};
