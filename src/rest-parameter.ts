export {}

const reducer = (accumulator:number, currentValue:number)=>{
  return accumulator + currentValue;
}

const sum = (...values: number[])=>{
  return values.reduce(reducer);
}

console.log(sum(1,2,3,4,5,6,7));

// let result:number = [1,2,3,4,5].reduce(reducer);
// console.log(result);