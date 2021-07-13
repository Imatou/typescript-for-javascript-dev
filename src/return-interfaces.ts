export{}

class Witch{}

class Monk{}

class Taro extends Witch{}

interface Wise {
  teach():void;
}
interface Walier{
  attack():void;
}

class Jiro implements Wise,Walier{
  teach(){
    console.log('*****');
  }
  attack(){
    console.log('!!!!!!');

  }

}

const jiro = new Jiro();
jiro.attack();
jiro.teach();