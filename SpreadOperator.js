

//Spread Operator ...
//Used to split up array elements or Object properties.
const newArray = [...oldArray, 1, 2];

const numbers = [1,2,3,4];

const newNumbers = [...numbers, 5,6];

console.log(newNumbers);


const person = {
  age: "20"
};

const newPerson = {
  ...person,
  name: "Praveen"
  
}

console.log(newPerson)

////Rest Operator
// used to merge function arguments in to an array

const filter = (...args) => {
    return args.filter(el => el === 1);
  }
  
  
  console.log(filter(1,2,3));

  o/p = [1]