// console.log("Hii");
// Different files for script, style and HTML block increases readbility 
// and also decreases cache usage
// window object is browser's object used globally and has lots of methods
// window.alert("Hello")

//------------------------------DOM
// document object model(HTML model and is like tree structure)
// console.dir() helps to see all the properties of an object
// console.dir(document.body);
// console.dir(document.head);


// Background change(dynamic changes)
// document.body.style.backgroundColor = "black";
// document.body.childNodes[3].innerText="Hii Ayush";
// document.body.childNodes[3].style.color="red";

//----------------DOM manipulation
// let head = document.getElementById("header");
// console.dir(head);//when id value does not exist returns null

// let head = document.getElementsByClassName("header");
// console.dir(head);//returns an html collection
//when class value does not exist returns empty collection

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let paras = document.querySelector("p");//1st element
// console.dir(paras);

// let parass = document.querySelectorAll("p");//1st element
// console.dir(parass);

// let classes = document.querySelectorAll(".header");
// console.dir(classes);

// let classes = document.querySelector("#header");
// console.dir(classes);

//DOM tree : text nodes,comment nodes,element nodes
//nodes:firstChild,lastChild,nextSibling,previousSibling used for navigation in tree

// document.querySelector("div").children

// let div = document.querySelector("div");
// console.dir(div);

// div.innerText-returns textual content of the element
// div.innerHTML-returns HTML content of the element

// div.textContent-returns hidden textual content of the element
// div.innerHTML-returns HTML content of the element

// let heading = document.querySelector("h1");
// heading.innerHTML = "Hii Ayush";
// heading.style.color = "red";
// heading.innerText = "New Heading";


//---------------------------------Task 1
// let heading = document.querySelector("h1");
// heading.innerText=heading.innerText+" from Ayush";
// heading.innerText=heading.innerText.concat(" from Ayush");    

// let div = document.querySelectorAll(".box");
// // div[0].innerText = "1";
// // div[1].innerText = "2";
// // div[2].innerText = "3";
// k = 0;
// for(let i of div)
// {
//     i.innerText = i.innerText+` ${k++} from Ayush`;
// }


//-------------------------------Day 7
// let div = document.querySelector("div");//Attribute
// console.log(div)

// let id =div.getAttribute("con");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","123"));

// let div = document.querySelector("div");
// console.log(div.style);

// para.style.backgroundColor = "blue";
// para.style.color = "white";
// para.innerText = "Hii";

// let newbtn = document.createElement("button");
// newbtn.innerText = "Button";
// console.log(newbtn);


// let div = document.querySelector("div");
// div.append(newbtn); // append and prepend
// // div.prepend(newbtn); 
// // div.after(newbtn); 
// // div.before(newbtn); 

// let newHead = document.createElement("h1");
// newHead.innerHTML = "<i>Hi I am DOM!</i>";
// document.querySelector("body").append(newHead);
// newHead.remove();//removes the element

// //------------------------------Task 1
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// document.querySelector("body").prepend(newBtn);


// //-------------------------------Task 2
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// // para.setAttribute("class","newClass");// It will remove and replace old styling
// para.classList.add("newClass");//append new class and its styling
// para.classList.remove("p1");//remove styling
// para.classList.toggle("p1");//add and remove styling