//truthy:'Allah',5,true,{},[],All others accept falsy
//falsy: '',0,false,null,undefined

//check truthy
let myVar = 5;
//check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
//you check negative or falsy anything
if (!myMoney) {

}

const money = 80
let food;
if (money > 100) {
    food = 'birani';
}
else {
    food = 'cha biscuit khabo';
}
//ternary or shortcut
let food1 = money > 100 ? 'birani' : 'cha biscuit khabo';
console.log(food1);
//for more condition
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);
//number to string conversion

const num1 = 52;
console.log(num1) //yellow type number seen
const numStr = num1 + '';
console.log(numStr) //stringy type light color number seen

//string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);
//
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser();
// use|| if the left side is false then right side will be executed
isActive || hideUser();
//toggle boolean
isActive = !isActive;