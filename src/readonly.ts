export {};

class VisaCard{
  // readonly owner:string;

  constructor(public readonly owner:string){
    // this.owner = owner;
  }

}

let myVisa = new VisaCard('MMMM');
console.log(myVisa.owner);
