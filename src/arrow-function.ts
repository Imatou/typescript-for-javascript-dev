export {}

let bmi = (height:number, weight:number):number=>{
  return weight / (height * height);
}

console.log(bmi(1.65,54.3));