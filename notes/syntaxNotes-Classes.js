//React uses alot of ES6 features such as arrow functions & classes

//Classes are similar to constructor functions, but do not allow hoisting, meaning they must be declared before usage.
//  example of class:

class Pet{
  constructor(){            //constructor - one call per class, cannot have more. Sets up instantiated properties & methods
    this.legs = 4;
  }
}

/*
class Dog extends Pet{      //note it also supports inheritance similar to other languages. in this case Dog receives 'legs'
  constructor(){            
    this.call = 'woof';
  }
  noise(){
    console.log(this.call);
  }
}
*/

//const is simply a variable that does not receive changes / re-assignments. trying to change it throws an error except
//in certain cases like altering values inside an array.

//This will throw a reference error because if you extend a class you must call super(); in the child constructor before 'this' may be used.
//like so:

class Dog extends Pet{   
  constructor(){
    super();                
    this.call = 'woof';
  }
  noise(){
    console.log(this.call);
  }
  countLegs(){
    console.log(this.legs);
  }
}

const fido = new Dog();
fido.noise();      // woof
fido.countLegs();  // 4

//Changing variables of a subclass is as follows:
class Snake extends Pet{   
  constructor(){
    super();                
    this.call = 'hiss';
    this.legs = 0;
  }
  noise(){
    console.log(this.call);
  }
  countLegs(){
    console.log(this.legs);
  }
}

const iggs = new Snake();
iggs.noise();      // hiss
iggs.countLegs();  // 0

//Note in ES7 you can skip needing to use a constructor function and instead just assign the properties values:
// old:   constructor(){this.myProperty = 'value');
// new:   myProperty = 'value'
// note, doing this means you do NOT need to call super in your subclasses.

//See the refactored version of this branch for a comment-less version of this code using modern syntax.

//React uses classes as a way to create components.
