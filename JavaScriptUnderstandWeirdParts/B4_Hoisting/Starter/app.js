// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');


// function expression
// not initialized but created on the fly when the javascript engine gets to this line.
var greetFunc = function (name) {
    console.log('Hello ' + name);
};
greetFunc('John'); // invoke with variable pointing to that memory location.

var greeting = function(name) {
    return 'Hello ' + name;
}('John'); // IIFE invoked immediately after creation
console.log(greeting); // notice where we pass the arguments.

// console.log(greeting()); // <-- cant do this because greeting is
                        // a string and not a function since it was 
                        // immediately invoked...

// wrap in parens to allow this. otherwise it expects a function name.
// now it assumes this will be a function expression instead of
// a function statement.
var firstName = 'John';

(function(name) {
    var greeting = 'Inside IIFE:  hello';
    console.log(greeting + ' ' + name);
})(firstName); // the iffe weeeeeeee wwooooowww uhhh ahhhhhh

// IIFE is apparently a legit ass tool... prob something about dem
// modules or some shizzzzzz....

// also we can use the invoke () inside the outer parens or outside them.
