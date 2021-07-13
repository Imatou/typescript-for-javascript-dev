export {}

let bmi = (height:number,weight:number):number=>weight/(height * height);

bmi(1.78,79);

let bmi2 = (height:number,weight:number,printable?:boolean):number=>
{
  if(printable){
    console.log(weight/(height * height))
  }
  return weight/(height * height);
}

bmi2(1.78,79,true);