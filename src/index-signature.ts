export {}
interface Profile{
  underTwenty:boolean;
  [index:string]:string|number|boolean;
}

let profile:Profile={underTwenty:false,name:'tata'};
profile.name='hana';

