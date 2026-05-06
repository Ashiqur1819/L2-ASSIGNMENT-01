# TypeScript Assignment Problems & Solutions

এই প্রজেক্টে কিছু গুরুত্বপূর্ণ TypeScript সমস্যা সমাধান করা হয়েছে, যেখানে মূল ফোকাস ছিল:

- Basic Type Safety
- Union Types
- Generics
- Interfaces & Type Intersections
- Classes & Inheritance
- Array & String Manipulation

---

## Problem Overview

### Problem 01: Even Number Filter

একটি অ্যারে থেকে শুধুমাত্র even সংখ্যা ফিল্টার করা হয়েছে।

```ts
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((item) => item % 2 === 0);
};
```

---

### Problem 02: Reverse String

একটি স্ট্রিং রিভার্স করা হয়েছে।

```ts
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
```

---

### Problem 03: Type Checking

Union type ব্যবহার করে ডেটার টাইপ চেক করা হয়েছে।

```ts
type StringOrNumber = string | number;

const checkType = (data: StringOrNumber): "String" | "Number" => {
  if (typeof data === "string") {
    return "String";
  } else {
    return "Number";
  }
};
```

---

### Problem 04: Generic Property Access

Generic ব্যবহার করে object থেকে safe ভাবে property access করা হয়েছে।

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

---

### Problem 05: Interface & Type Intersection

Book interface extend করে নতুন property যোগ করা হয়েছে।

```ts
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
```

---

### Problem 06: Class & Inheritance

Person class থেকে Student class extend করা হয়েছে।

```ts
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
```

---

### Problem 07: Array Intersection

দুইটি array এর common elements বের করা হয়েছে।

```ts
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  let lookedUpArr = new Set(arr1);

  return arr2.filter((item) => lookedUpArr.has(item));
};
```

---

## What I Learned

এই প্রজেক্ট থেকে আমি শিখেছি:

- TypeScript এর strict type system
- Generics এর power
- Interface vs Type ব্যবহার
- OOP (Class & Inheritance)
- Real-world utility functions তৈরি করা

---

## Author

MD. ASHIQUR RAHMAN
