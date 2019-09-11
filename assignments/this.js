/* The for principles of "this";
/*in your own words. explain the four principle for the "this" keyword below.*

1. Points to describe a specific object
2. Binds to an object
3.
4.
*
/* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let egg = function(Iwantbaconalso){
    return  "I want waffles also.";
}
console.log(egg())





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
function tacos(tomatoes){
this.lettuce = `lettuce`;
this.tomatoes = tomatoes;
this.cheese = function(){
    console.log(this.lettuce + this.tomatoes);
    console.log(this);
 };
}
const mytacos = new Lovethistaco(`tacogrande`);
const burrito = new Lovethisburrito(`burritogrande`);

mytacos.cheese();
burrito.cheese();



// Principle 4

// code example for Explicit Binding
