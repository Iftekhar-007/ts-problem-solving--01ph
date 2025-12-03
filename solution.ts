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
    return 0;
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
  return params.filter((param) => param.rating >= 4 && param.rating <= 5);
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
  const result: Arr = [];

  for (let i = 0; i < param1.length; i++) {
    let exist: Boolean = false;
    for (let k = 0; k < result.length; k++) {
      if (param1[i] === result[k]) {
        exist = true;
      }
    }

    if (!exist) {
      result.push(param1[i]);
    }
  }

  for (let j = 0; j < param2.length; j++) {
    let exist = false;
    for (let k = 0; k < result.length; k++) {
      if (param2[j] === result[k]) {
        exist = true;
      }
    }

    if (!exist) {
      result.push(param2[j]);
    }
  }

  return result;
};

const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];

const okay = getUniqueValues(a1, a2);

console.log(okay);

type ProductObj = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: ProductObj[]): number => {
  return products.reduce((acc, item) => {
    const discountPercent = item.discount ?? 0;
    const priceAfterDiscount = item.price * (1 - discountPercent / 100);
    const totalPrice = priceAfterDiscount * item.quantity;

    return acc + totalPrice;
  }, 0);
};
