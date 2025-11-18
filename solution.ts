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

const getLength = (param: string | any[]): number => {
  if (typeof param === "string") {
    return param.length;
  } else if (Array.isArray(param)) {
    return param.length;
  } else {
    throw new Error("inaapropriate data type");
  }
};

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

type BookObj = {
  title: string;
  rating: number;
};

const filterByRating = (params: BookObj[]): BookObj[] => {
  return params.filter((param) => param.rating >= 4);
};

type UserObjData = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (params: UserObjData[]): UserObjData[] => {
  return params.filter((param) => param.isActive === true);
};

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

type Arr = any[];

const getUniqueValues = (param1: Arr, param2: Arr): Arr => {
  const uniqueValues = Array.from(new Set(param1.concat(param2)));
  return uniqueValues;
};

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
