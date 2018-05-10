class Pet{
  legs = 4;
}

class Dog extends Pet{                
  call = 'woof';
  
  noise = () => console.log(this.call);
  countLegs = () => console.log(this.legs);
}

class Snake extends Pet{   
  call = 'hiss';
  legs = 0;
  
  noise = () => console.log(this.call);
  countLegs = () => console.log(this.legs);
}

const fido = new Dog();
fido.noise();      // woof
fido.countLegs();  // 4

const iggs = new Snake();
iggs.noise();      // hiss
iggs.countLegs();  // 0

