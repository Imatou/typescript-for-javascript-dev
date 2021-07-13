export {}

namespace Japanese{
export class Person{
  constructor(public name:string){}
}
}

namespace English{
export class Person{
  constructor(public name:string, public middleName:string){}
}
}

const me = new Japanese.Person('あいう');
console.log(me.name);

const michael = new English.Person('Mic','Hoho');
console.log(michael);