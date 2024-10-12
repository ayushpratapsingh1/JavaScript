let btn1 = document.querySelector("#btn1");
// let a = 0;
// btn1.onclick = (e) => {
//     // console.log("Btn1 was clicked");
//     // a++;
//     // console.log(a);
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
// }

//--------------Event Listener helps in adding multiple events
// btn1.addEventListener("click", (e) => {
//     console.log("Btn1 was clicked 1");
// });
// btn1.addEventListener("click", (e) => {
//     console.log("Btn1 was clicked now 2");
// });
// const handler3 = () =>{
//     btn1.addEventListener("click", (e) => {
//     console.log("Btn1 was clicked now 3");
// });
// };
// btn1.addEventListener("click", (e) => {
//     console.log("Btn1 was clicked now 4");
// });
// btn1.removeEventListener("click", handler3);
//Give same reference to the same function else it will not work

//----------------------Mouseover
// let b = 0;
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     b++;
//     console.log(`Div was hovered ${b} times.`);
// }

// Inline handle will have less priority then javascript handling
// Event object is passed as an argument
// Event listeners are executed in the order they are added
// Event listeners can be removed
// Event listeners can be added
// Event listeners can be added to multiple elements

//----------------------Task 1
let currMode1 =  "light";
btn1.addEventListener("click",(e) => {
    console.log("Mode Changed!");
    if( currMode1 === "light"){
        currMode1 = "dark";
        document.querySelector("body").classList.add("dark");
        // document.body.style.backgroundColor = "black";
        // document.body.style.color = "white";
    } else {
        currMode1 = "light";
        document.querySelector("body").classList.remove("dark");
        // document.body.style.backgroundColor = "white";
        // document.body.style.color = "black";
    }
});

//----------------------Task 2
let currMode = "light";
let div = document.querySelector("div");
div.addEventListener("mouseover", (e) => {
    if(currMode === "light") {
        document.querySelector("body").classList.add("change");
        document.querySelector("div").classList.add("div2");
        document.querySelector("div").innerText = "Hovered!!";
        currMode = "dark";
    } else {
        document.querySelector("body").classList.remove("change");
        document.querySelector("div").classList.remove("div2");
        document.querySelector("div").innerText = "Hover";
        currMode = "light";
    }
});
