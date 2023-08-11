// 2d line:-
// var c = document.getElementById("myCanvas"); // myCnavas id ko isse select kar liya
// var ctx = c.getContext("2d"); // jetne v 2d tool hai wo ctx me dedo 
// ctx.moveTo(0, 0); // path set kiya
// ctx.lineTo(200, 100); // line set ki
// ctx.stroke(); // stroke diya yani ek color diya






// circle:-
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();






// Hello World :-
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);






// Stroke text Hello World:-
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World", 10, 50);






// linear gradient:-
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);






// Circular Gradient :-
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// // Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);







function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();



function canvas() {
    const canvas = document.querySelector("canvas"); // canvas tag ko select kiya gaya hai // aur hmne yahan pe const liya hai var nahi q ki const jo hai wo memory management bht ache se karta hai bs issliye liye hai
    const context = canvas.getContext("2d"); // getContext ka use hmlog tools ko select karne ke liye karte hai // to iss line ka meaning ye hai ki jetne v canvas ke 2d tool hai usko select karke canvas me dedo, aur wo sare tools ko context me save kar liya

    canvas.width = window.innerWidth; // canvas ka width window ke inner widht ke equal ho jaye // inner width mtlb window ka bs wo wala part jisme hmlog ko apna website dekhta hai
    canvas.height = window.innerHeight; // canvas ka height window ke inner height ke equal ho jaye // inner height mtlb window ka bs wo wala part jisme hmlog ko apna website dekhta hai


    window.addEventListener("resize", function () { // addEventListener se andar ka event resize lekha hua hai // iska mtlb jab v resize ho hmlog ka woindow tab tab ye function chalna chahiye
        canvas.width = window.innerWidth; // aur jab ye function chalega to window ke size ke hisab se hmlog ka canvas wapas se set ho jayega 
        canvas.height = window.innerHeight;
        render(); // ye function hmne neeche banaya hai
    });

    function files(index) { // function banaya hai jiska naam hai file, uske andar ek parameter pass kiya hai jiska naam hai index
        var data = ` 
    // paste all images here!!
 `; // jetne v images hai jo hm render karenge scrolling pe wo sare isse me store rahenge
        return data.split("\n")[index]; // data ko split kar do aur usko pass kar do next line me phir usko pass kar do array ke andar with the parameter index
    }

    const frameCount = 300; // maan lo hamare data me 300 images hai to hmlog ko frame count me 300 lekhna hoga // naam se hi samajh aa raha hai frame // agar hamare data me 400 image hue to frame count 400 hoga 
                            // jetne framecount rahega utna hi canvas chalega // agar aapke pass 200 image hai aur aap frame count ko 100 hi rakhte hai bs to canvas 100 image render karke stop ho jayega
    const images = [];
    const imageSeq = { // imageSeq naam ka object banaya hai isme // isse ye hoga ki jab jab mae start karuga to frame count 1 se start hoga
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image(); // new Image() - isse hmlog ko haar baar ek naya image tag(img) mil rha hai 
        img.src = files(i); // iss line ka use se haar baar hmlog ko img tab me source(src) lag ke mil raha hai
        images.push(img); // jo blank arrray hmne banaya tha images karke usme hmlog aone sare images ko store kar le rahe hai
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1, // haar image render hone ke baad hmlog ka frame count decrease hota rahega taki sare images render ho paye
        snap: "frame", // iska use se hmlog ya to direct 1 se 2 se 3 ..... jaa sakhte hai mtlb beech me 1.2, 1.3 aese numbers nahi aane dega aur image hmlog ka glich nahi hoga
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page>canvas`,
            //   set start end according to preference
            start: `top top`, // pehela top hmlog ka element ke liye hota hai aur second top hmlog ka screen ke liye hota hai
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render, // jab jab mae render karun mera render function chala dena
    });

    images[1].onload = render; // jab jab mae page ko load karun wapas se mera pehela frame chala dena aur render kar dena

    function render() {
        scaleImage(images[imageSeq.frame], context); // images[imageSeq.frame] - ye hmlog ka image hai // context -  hmlog ne upar banaya tha jisme hamare sare tools save hai
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width; // iss line se mil raha hai hmlog ko apna horizontal ratio
        var vRatio = canvas.height / img.height; // iss line se mil raha hai hmlog ko apna vertical ratio
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2; // iss line se hmlog ka canvas jo hai wo rehta hai hamesha centre me
        var centerShift_y = (canvas.height - img.height * ratio) / 2; // iss line se hmlog ka canvas jo hai wo rehta hai hamesha centre me
        ctx.clearRect(0, 0, canvas.width, canvas.height); // pechle image clear ho gaye hai
        ctx.drawImage( // iske help se hm kar rahe hai images ko draw
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "// object you want to pin it.",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}
canvas();