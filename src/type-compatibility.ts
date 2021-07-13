export {}

let fooCompatible:any;
let barCompatible:string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString:string;
let barString:string = 'string';

fooString = barString;

let fooStringLiteral: 'foo' = 'foo';
fooString = fooStringLiteral;

interface Animal{
  age:number;
}

class Person{
  constructor(public age:number){}
}

let me:Animal;
me = new Person(55);

class A{
  age:number = 15;
}

let a:A;
a = new Person(20);

