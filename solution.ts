// ! problem 1

type InputType = string | number | boolean;

const formatValue = (param: InputType): InputType => {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param * 10;
  } else if (typeof param === "boolean") {
    return !param;
  } else {
    return "the type of inputed data isn't acceptable";
  }
};

// const user = formatValue(false);
// console.log(user);

// ! problem 2

const getLength = (param: string | any[]): number => {
  if (typeof param === "string") {
    return param.length;
  } else if (Array.isArray(param)) {
    return param.length;
  } else {
    throw new Error("inaapropriate data type");
  }
};

// const user = getLength([1, 3, 6, 8]);
// console.log(user);

// !problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const user1 = new Person("shawon", 29);
// console.log(user1.getDetails());

// const user2 = new Person("soriful", 25);
// console.log(user2.getDetails());

// ! problem 4

type BookObj = {
  title: string;
  rating: number;
};

// const books: BookObj[] = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book D", rating: 3.3 },
//   { title: "Book E", rating: 4.3 },
// ];

const filterByRating = (params: BookObj[]): BookObj[] => {
  return params.filter((param) => param.rating >= 4);
};

// console.log(filterByRating(books));

//! problem 5

type UserObjData = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// const users: UserObjData[] = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

const filterActiveUsers = (params: UserObjData[]): UserObjData[] => {
  return params.filter((param) => param.isActive === true);
};

// console.log(filterActiveUsers(users));

/*

title (string)
author (string)
publishedYear (number)
isAvailable (boolean)

Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]
*/

//! problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (param: Book) => {
  const availability = param.isAvailable === true ? "Yes" : "No";

  console.log(
    `Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available: ${availability}`
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

// printBookDetails(myBook);

//! problem 7

type Arr = any[];

// const arr1: Arr = [1, 2, 3, 4, 5, 6];
// const arr2: Arr = [4, 5, 6, 7, 8, 9];

const getUniqueValues = (param1: Arr, param2: Arr): Arr => {
  const uniqueValues = Array.from(new Set(param1.concat(param2)));
  return uniqueValues;
};

// console.log(getUniqueValues(arr1, arr2));

// ! problem 8

type ProductObj = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: ProductObj[]): number => {
  if (products.length > 0) {
    return products.reduce((acc, item) => {
      const isDiscount = item.discount ? item.discount : 0;
      const initialDiscount = (item.price * isDiscount) / 100;
      // const basePrice = item.price * item.quantity;
      const initialPrice =
        item.price * item.quantity - initialDiscount * item.quantity;

      return acc + initialPrice;
    }, 0);
  } else {
    return 0;
  }
};

// const products: ProductObj[] = [];

// console.log(calculateTotalPrice(products));
