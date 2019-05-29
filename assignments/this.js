/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: Gets window or console Objects where Javascript is run. When in global, value of (this) is in the window or console object.
* 2. Implicit Binding: Implicit understanding that the context is to the left of the dot. Whenever a function is proceded by a dot, (this) applies to the object left of the dot.
* 3. New Binding: When you have a constructor function, 'this' refers to every instance of the object that is created and returned. i. e. 'new'
* 4. Explicit Binding: Allows you to use .bind, .call, or .apply to give a new object, by overriding what the current this keyword point to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whoAreYou(name) {
    console.log(this);
    return name;
}
whoAreYou('Misanthropy');

// Principle 2

// code example for Implicit Binding
const anObj = {
    greeting: "What's up",
    sayWhatsUp: function(name) {
        console.log(`${this.greeting}? My name is ${name}.`);
        console.log(this);
    }
};
anObj.sayWhatsUp('Zaija');

// Principle 3

// code example for New Binding
function GoodGuy(greeter) {
    this.greeting = "What's up ";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const rob = new GoodGuy('Richard?');
const richard = new GoodGuy('Rob?');

rob.speak();
richard.speak();


// Principle 4

// code example for Explicit Binding
function GoodGuy(greeter) {
    this.greeting = "What's up ";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const nick = new GoodGuy('William?');
const william = new GoodGuy('Nick?');

nick.speak.call(william);
william.speak.apply(nick);

william.speak();
nick.speak();