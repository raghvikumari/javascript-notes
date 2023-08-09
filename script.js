// var let const

// es5 - var
// es6 - let const

// var function scoped hota hai => var apne parent function me kahin v use ho sakhta hai
// var adds itself to the window object
// eg:-
// function abcd() {
//     for (var i = 1; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd();






// let braces scoped hota hai 
// let doesn't adds itself to the window object
// eg:-
// function abc() {
//     for (let i = 1; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// abc();

// alert, prompt, console are not the part of the javascript they are fetched from window object which is browser






// browser context api contains:-
// - window object
// - stack
// - heap memory - all the variables and data are stored in heap memory






// Execution context mtlb jab v hum function chalayenge function apna ek khud ka imaginary container bana lega
// jisme teen cheeje hogi
// 1 - variables
// 2 - functions inside that parent function
// 3 - lexical enviroment of that function
// ye jo imaginary container hai isse hi hm executional context kahte hai

// function chalte ke hi sath sabse pehele executional context banta hai

// By Definition - Exceution context is a container where the function's code is executed and it's
// created whenever a function is called, it contains 3 things, variables, functions and lexical enviroment

// lexical enviroment hota hai ek chart jisme ye likha hota hai ki aapka particular function kis
// cheejo ko access kar sakhta hai and kinko nahi, matlab ki it holds it's scope and scope chain






// how to copy reference values
// It is done with the help of spread operator
// eg:-
// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();
// console.log(b);
// console.log(a);

// var obj = { name: "Harsh" };
// var copyobj = { ...obj };
// console.log(obj);
// console.log(copyobj);






// js me kuch v lekho wo mainly do prakar me se kisi ek prakar ko belong karti hai
// - truthy and falsy
// falsy values - 0 false undefined null NaN(Not a Number) document.all
// except falsy values every other values are truthy values

// eg:-
// if (7) { // means jo jo values falsy me mentioned hai jab wo hua tabhi false hoga agar 7 ke jagah pe 0 hota to yr statement false hota
//     console.log("hey");
// }
// else {
//     console.log("hello");
// }






// foreach loop sirf array pe chalta hai matlab ki jab bhi tumhare pass ek array ho, tab hmlog foreach loop use karte hai

// var a = [1, 2, 3, 45, 12, 54, 85, 74, 12, 9];

// a.forEach(function (val) { // isme jo function use hua hai annonymous function bolte hai
//     console.log(val + 2);
// })

// foreach kabhi v by default kabhi v aapke original array me changes nahi karta

// forin loop objects par loop karne ke liye hota hai

// var obj = {
//     name: "harsh",
//     age: 24,
//     city: "bhopal"
// };

// for (var key in obj) {
//     console.log(key); // ye bs obj ke andar jo alag alag names hai usko print karega uski values nahi
// };

// for (var key in obj) {
//     console.log(obj[key]); // ye obj ke andar ka names ka value ko v print kar sakhta hai
// }

// for (var key in obj) {
//     console.log(key, obj[key]); // isse dono print hoga
// }






// callback functions
// jab bhi koi code jo baad me chalta hai app likhoge, kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua
// ya nahi, aise code ke completion par js ko bataya jata hai ke wo complete hogaya hai aur app usse chala sakhte ho, ye batane ka kaam
// call back ka hai

// eg:- 
// setTimeout(function () {  // It is a asynchronus js
//     console.log("2 sec baad chalo");
// }, 2000);

// aesa code jo baad me chalta hai use hum el function dedete hai ki jab comp hojaye to ye function chalana, aur wo function ek normal 
// function hi hota hai aur usse call back function bolte hai






// first class function :- 
// iska help se function ko as a value use kar sakhte hai

// eg:- 
// function abcd(a) {
//     a();
// }
// abcd(function () { console.log("hey"); });






// Higher Order functions
// These are the functions which Accept a function in a parameter or retun a function or both
// Aesa funtion jo accept kar le ek aur func ya fir wo return karde ek aur function
// Foreach is a higher order function
// eg :-
// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function ());






// Constructor Function :-
// normal func jismein this keyword ka istemmal ho and aap func ko call karte waqt new keyword ka use kare 
// jab aapke pass aisa bhi moka ho ke aapko ek jaisa properties waale abhut saare elements banane hai us waqt app constructor fuction use kar sakhte ho


// function saanchaOfBiscuit() { // ye hmlog ka saancha taiyar hogaya hai an isse biscuit nikal sakhte hai new keyword ka use karke
//     this.width = 12;
//     this.height = 12;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var biscuit1 = new saanchaOfBiscuit();
// var biscuit2 = new saanchaOfBiscuit();
// var biscuit3 = new saanchaOfBiscuit();

// console.log(biscuit1);
// console.log(biscuit2);
// console.log(biscuit3);

// function circularButtonBanao(color) {
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// var redbtn = new circularButtonBanao("red");
// var greenbtn = new circularButtonBanao("green");

// console.log(redbtn);






// First class Function :-
// A language is said to have First class function When the function in that language are treated as variable
// you can save them, you can pass them as arguments to another functions
// aese functions jo ki ek normal values ya phir ek variable ki tarah treat kiye jaa sakhte hai
// aese functions ko first class functions bolte hai 






// New keyword :-
// jab v new lagta hai tab hamesha apne maan me ek blank object bana lo 
// new keyword always creates a blank object just after this keyword is called
function abcd() {
    this.age = 12;
}

new abcd();
// { mtlb ki blank object ke andar age ek object bana hua hai 
//     age:12;
// }






// iife :- immediately invoked function expression 
// iife hai function ko turant ki kala, is tarike se ki hmlg koi v private variable bana paye
// eg :-
// var ans = (function () {
//     var privateval = 12;

//     return {
//         getter: function () {
//             console.log(privateval);
//         },
//         setter: function () {
//             privateval = val;
//         }
//     };
// })(); // used to make private variables 
// console.log(ans);
// console.log(ans.getter);






/* prototype :- it contains many helper properties and methods which we can use to complete our task,
let's say we can use to complete our task, let's say we create an array and we want to know 
lenght of it, what we do, we use length property on array, did we created .lenght*/






// prototype inheritance:-
/* inheritance is basically passing parent's features jo pass hue hai, to do the same thing in javascript
 with the help of protype(one extra property always given by javascript to every object) */

// var human = {
//     canFly: false,
//     cantalk: true,
//     canwalk: true,
//     haveemotions: true,
//     hasFourLegs: false
// };

// var sheriyansStudent = {
//     canMakeAmazingWebsite: true,
//     canMakeAwesomeAnimations: true,
//     canMakeWorldClassAwardedWebsites: true
// };

// sheriyansStudent.__proto__ = human; // iska mtlb ye hai ki human ki sari properties sheriyansStudent ne inherit kar li hai
// console.log(sheriyansStudent);






// this keyword:-
// this keyword is a special keyword in Javascript which changes it's value in different context 
// mtlb iska alag alag jagah pe alag alag value rahega

// this keyword in different context:-

// 1 - in global scope :-
// console.log(this); //gives window 

// 2 - in function scope
// function abcd() {
//     console.log(this); // gives window
// }
// abcd();

// 3 - in method scope (ek function jo object ke andar ho usse hm method kaehte hai)
// var obj = {
//     baatKaro: function () {
//         console.log(this); // gives object
//     }
// }
// obj.baatKaro(); // In any method "this" keyword always refers to parent object






// event listeners

var button = document.query("button");
button.addEventListener("click", function () {
    console.log(this);  // In event listener "this" keyword is equal to whatever written before addEventListener
})                      // In the above case "this" keyword refers to button






// call apply bind => agar tmhare pass koi function hai aur koi object hai aur tmhe function chalana hai uss object par aur by 
// default jo this ki value hai usse window naa rakh kar point karwana hai kisi object ki taraf 

// function abcd(){
//     console.log(this.age);
// }
// var obj = {age: 24}
// abcd.call(obj);