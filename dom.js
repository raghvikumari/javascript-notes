// What is DOM?
// - It means Document Object Model
// - It is the javascript of front-end






/* There are 4 pillars of DOM
    - Selection of an element 
    - Changing HTML
    - Changing CSS
    - Event Listener */






// Selection of an element:-
/* - iska mtlb hota hai koi element jo HTML me lekha hai usko hmlog ko javascript me select karna hai.*/
// eg:-
// document // HTML ka jo page hai usko hmlog document maan rahe hai
// document.querySelector // iska mtlb hai javascript me baethe baethe kisi HTML ka document se kisi query ko select kar lo
// document.querySelector("iske andar jo v naam lekhege wo select ho jayega");
// // eg :-
// document.querySelector("h1"); // h1 select ho jayega isse 
// /* - agar id select karni hai to double quotes ke andar #id_name use karo 
//     aur agar class select karni hai to double quotes ke andar .class_name use karo */ 
// var a = document.querySelector("h1"); // isko ek variable ke andar issliye daa rahe hai taki isko baar baar select nah karna pade
// console.log(a);






// Changing HTML :-
// 1st Method -
// var a = document.querySelector("h1");
// a.innerHTML = "Changed HTML"; // innerHTML is used to change the HTML 
// // 2nd Method-
// document.querySelector("h1").innerHTML = "hui";
/* h1.textContent = "<h1>hello</h1>";*/ /* isse v html ko change kar sakhte hai aur isse jo double 
                                    quotes ke andar rehta hai to hmlog ka text me convert ho jata hai
                                    jaese iska outout ayega <h1>hello</h1> */
/* par agar yahi hmlog innerHtml ka use karke lekhte to hmlog ko output me hello milta bs 
<h1></h1> ko innerHtml tag me convert kar deta hai */






// Changing css :-
// var a = document.querySelector("h1");
// a.style.isme jo aapka maan kare wo css ki property dene hai = "";
// - .style lagana jarurui chahe aape css ki file ka kuch v rahe
// eg:-
// a.style.color = "red";
// css ki property hmlog camel case me lekhte hai 






// Event Listeners:-
// iska mtlb hai ki aap koi event perform karoge
// var a = document.querySelector("h1");
// a.innerHTML = "kaese ho";
// a.style.color = "yellow";
// a.style.backgroundColor = "black";
// // a.addEventListener("kon sa event listener jorna hai uska naam eg- click", function () { // it means ki h1 pe jake Event Listener ko jor do

// // }); // jaese hi click karenge function ke andar lekha hua code chalne lagega
// a.addEventListener("click", function () {
//     // console.log("hey");
//     a.innerHTML = "changed";
// })





// var flag = 0;
// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     if (flag == 0) {
//         bulb.style.backgroundColor = "yellow";
//         flag = 1;
//     } else {
//         bulb.style.backgroundColor = "transparent";
//         flag = 0;
//     }
// });






// Selecting multiple elements in a single time:-
// var h = document.querySelectorAll("h1");
// console.log(h);

// h.forEach(function (e) { // ye sare h1 ko select kar lega
//     console.log(e);
// });






// agar kisi element ko id se uthana hai :-
// document.getElementById("id_name"); // koi # tag nahi sirf id_name






// agar kisi element ko class se uthana hai :-
// document.getElementsByClassName("className"); // koi . nahi sirf class ka naam lekhna hoga