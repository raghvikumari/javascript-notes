// synchronus - ek ke baad dusara hoga, jab tak ek command comp nah ho, dusara suru nahi hoga
// eg :-
// console.log();

// asynchronus - sare kaam ek sath suru kar do, jiska answer pehele aajaye uska jawab de dena
// eg :- 
// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest 
// await // aesa kuch v use kar rahe hai to ye async me ata hai

// except above mentioned example we are using sync code






// async js kya hai?
/* - kai baar aapka final code dependent hota hai kisi aur server par, iss case me humein nahi pata
hota ki answer uske server se kab laut kar ayega, to hum iss case me sync code nahi lekh sakhte, isse
nipatne ke liye hum log async code likh dete hai taki blocking nah ho and jab bhi humara ans aaye, hamare
answer ke respect me chalne wala code chal jaye*/

/* async code ka main motive hota hai ki un cases mein jinmein hume pata nahi hota ki code ka answer 
ketne deer me ayega to jab bhi answer aa jaye uske answer ke repect me koi particular code chala dena*/

// eg :-
// setTimeout(callback,timeInms); // => Syntax 
// callback always refers to a function
// callback function hamesha async code me answer aane par chalta hai 






// javascript is not asynchronpus :-
// - javascript kabhi do kaam ek sath nahi karte 
// - javascript single threaded hota hai(ek baar me ek hi kaam kar sakhta hai), multi threaded nahi
// - jab v javascript me code lekhte hai to do stack banta hai ek main stack aur ek side stack
/* - jo bhi main stack me hota hai wo output karta hai and jo bhi side stack me hota hai wo behind the scenes 
processing kar sakhta hai aur jab uski processing complete ho use main stack mein laa kar chlaya jaa sakhta 
hai*/
/* - synchronous code always moves to main stack and asynchronous always moves to side stack */
/* - jab asynchronous code ka answer aa jayega tab wo main stack me aa jata hai */
/* - main stack aur side stack ke beech me jo connection hai usko "event loop" bana ke rakhta hai */
// eg:-
// console.log("hey1");
// console.log("hey2");
// setTimeout(function () {
//     console.log("hey3");
// }, 0); // -> 0 sec ka wait diye hai leken phir v pehele hey1 chala phir hey2 chala phir hey4 chala aur last me hey3 chala
// console.log("hey4");
/* aesa issliye hua q ki pehele main stack me hey1 hey2 hey4 chala gaya aur side stack me hey3 gaya
main stack sabse pehele excecute hota hai to pehele hey1 phir hey2 aur phir hey4 print hua.
hey3 last me hua q ki wo side stack me chala gaya tha */






/* fetch
   axios
   promises
   settimeout
   setinterval etc,
   inme se agar kuch v use kar rahe hai to hmlog async ka code lekh rahe hai,
   ye sab request ko bhejete hai */

/* then catch 
   callbacks
   async await etc,
   jab v request comp ho jaye uska answer yahan milega */






// callbacks:-
/* - callbacks hamesha ek function hota hai 
   - ye sirf tab chalta hai jab async code ka completion ho jata hai 
   - then catch
   - async await*/






// Promises :-
/* promises always accepts a function
It is also a constructor function
kuch code hm lekhenge to iska do hi output ho sakhta hai 
    - ya to ye code chal jayega mtlb response aa jayega
    - ya to code nahi chalega aur reject ayega
yahi do chiz promises ka enviroment hai 
- hmlog ye enviroment ko ek variable me save kar sakhte hai 
    - iss variable me jo v save hai wo teen hi state me ho sakhta hai 
        - pending 
        - resolve
        - reject 
    - agar resolve state me hua to variable ko bol sakhte hai "then"
    - agar reject state me hua to vaiable ko bol sakhte hai "catch" */
// eg - 1:-
// var ans = new Promise((res, rej) => {
//     if (true) { // true hai issliye res kaam kiya, agar yahan false hota to rej kaam karta 
//         return res();
//     } else {
//         return rej();
//     }
// })
// ans
//     .then(function () { // agar ans resolve hua to then chalega
//         console.log("Resolve hue tha");
//     })
//     .catch(function () { // agar ans reject hua to catch chalega
//         console.log("Reject hua tha");
//     })

// eg - 2:-
/* create a promise user will ask for a number in between 0 to 9 and if the number is below 5 resolve if not reject */
// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10); // this will give us a random num between 0 and 9

//     if (n < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// });
// ans
//     .then(function () { // agar ans resolve hua to then chalega
//         console.log("below 5");
//     })
//     .catch(function () { // agar ans reject hua to catch chalega
//         console.log("above 5");
//     }) 

// eg - 3:-
/*  sabse pehele ghar par aao 
    gate kholo aur gate lagao
    khana pakao aur khana khao
    internet chalao
    aur phir soo jao,
    ye sare task ko asynchronus manner me karo */

// var ans = new Promise(function (res, rej) {
//     return res("sabse pehele ghar par aao ");
// })
// var p2 = ans.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("gate kholo aur gate lagao");
//     })
// });
// var p3 = p2.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("khana pakao aur khana khao");
//     })
// });
// var p4 = p3.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("internet chalao");
//     })
// });
// var p5 = p4.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("aur phir soo jao");
//     })
// });






// async await:-
/* koi bhi aesa function jisme aap async code likhenge, kyuki async code hai to aap promises ka use kar sakhte hai,
jab uska answer ayega aapko then lagana padega, uss then ko lagane se bachne ke liye hmlog async await ka use 
karte hau 
    - ek await se ek then haat jayega*/
// eg :-
// function abcd() {
//     fetch(`https://randomuser.me/api/`) // isse jo data ayega wo raw data rahega 
//         .then(function (raw) {
//             return raw.json(); // ye jo v hmne fetch kiya hai usko read able form me le ayega
//         })
//         .then(function (data) {
//             console.log(data);
//         })
// };
// abcd(); // function call

// above example ab async await se karenge
// async function abcd() {
//     let raw = await fetch(`https://randomuser.me/api/`) // jab iska ans ayega
//     let ans = await raw.json(); // tabhi ye line chalegi
//     console.log(ans);
// };
// abcd(); // function call

// async await uses:-
/*  - node me bht use hai
    - fetch jab react wagera me use karenge tab, to give a call to the backend and bring some data
    - settimeout
    - setinterval */






/* [concept aside]
    concurrency and parallelism
    concurrency - javascript me synchronous code and async code ek sath process ho raha tha ye hai 
                    concurrency
    parallelism - focus karta hai diffenent processors and unke cores par kaam  ko chalaane par 
    throttling - kisi code ko control karna number of excecutions */