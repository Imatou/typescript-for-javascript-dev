export {}

class Me{
  static isProgrammer: boolean = true;
  static firstName: string = 'amy';
  static lastName: string='Yasya';

  static work(){
    return `Hey, Let\'s Go ${this.lastName}`;
  }
}

let me = new Me();

console.log(Me.firstName);
console.log(Me.work());