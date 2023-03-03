/*
Fundamental or six rotna:
1.variable(let,const) three types of variable
2.condition:(<,>,===,!==,<=,>=) && ,||,if,else if,else
3.array:declare,length,index,push,pop,indexOf,includes
4.for loop,whileloop
5.function: how return, how parameter set
6.Object:how declare,property,luding array,Object
--------------------------------
ES6:
1.template string by ${}
2.spread operator (...)copy an array and add a new element to an array
3.use filter to remove an element from an array.
4.Arrow function,no parameter,single parameter,multiple parameter,multiline
5.destructuring:Object destructuring,Array destructuring
6.Object declaration shorthand,function parameter default value,Optional chainning(?.)
----------------------------------
Browser API:
1.local storage & session storage
2.location API
3.History API
4.fetch
----------------------------------
others:
1. array:map,forEach,filter,find
2.ternary operator
3.logical and ,logical or,&&,||
4.JSON(stringify,parse)

*/
Example 1:
const x = 50;
const y = 60;
const obj = {
    x: x,
    y: y
};
// Shortcut:
const obj1 = { x, y }

Example 2:
const name = 'solimullah';
const area = 'dhaka';
const nobab = {
    name: name,
    area: area
};
// Shortcut:
const nobab2 = { name, area };