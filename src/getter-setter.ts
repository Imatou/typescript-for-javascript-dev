export {}

class MyNumberCard{
  private _owner:string;
  private _secretNumber:number;

  constructor(owner:string,secretNumber:number){
    this._owner = owner;
    this._secretNumber = secretNumber;

  }

  get owner():string{
    return this._owner;
  }

  set secretNumber(secretNumber:number){
    this._secretNumber = secretNumber;
  }

  debugprint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('わたし',123456789);
console.log(card.owner);
