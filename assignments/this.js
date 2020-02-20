/* The for principles of "this";
/*in your own words. explain the four principle for the "this" keyword below.*

1. Window/Global Object Binding - When in the global scope, the value of “this” will be the window/console Object;
2. Implicit Binding- Whenever a function is called by a preceding dot, the object before that dot is this.
3. New binding- Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
4. Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
/* write out a code example of each explanation above
*/
/* test*/
// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding
const ImplicitBind = {
Ilovecereal:'They call me blue',
Maybeonasunday: function(name) {
    console.log(` ${this.Ilovecereal} Nice to meet you ${name}`);
    console.log(this);

}
};
ImplicitBind.Maybeonasunday('Sike!');

//let mybob = function(chicken,Eat){
    //return chicken - Eat
//}

//console.log(mybob(1,1))


// Principle 3

// code example for New Binding
/*function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
  */



// Principle 4

// code example for Explicit Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

  jerry.speak.call(newman);
  newman.speak.apply(jerry);