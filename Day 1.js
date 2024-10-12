//Dynamically typed language-no need to tell about the type of variable
//Variable name can start with underscore(_),letter or $
//only letter,digit,underscore,$ are allowed
//reserved words cannot be variable names

// console.log("hii ayush");
// console.log("now on");
// alert("go");
name="ayush";//string
age=24;//integer
price=99.99;//decimal
x=null;//we know what it is and it is empty
y=undefined;//don't know what it is
follow=false;//boolean
let name1="ayush";//cannot be redeclared and block scope
name1="ayush1";
var name2="ayush";//can be redeclared and modified and global scope
const name3="ayush";//cannot be redeclared neither it can be modified and block scope
let a;//by default undefined
{
    let a=5;
    //console.log(a);
}

//Primitive Data types:Number,String,Undefined,Null,Big int,Boolean,Symbol
let k=null;
let age1=5;
isfollow=true;
//console.log(a);
let z=BigInt("125622");
let p=Symbol("Hello");
//Non-primitive: Objects(collection of values)
const student={
    fullname :"Ayush",
    age:20,
    cgps:7.5,
    isPass: true
};// we can update keys and full collections despite of being constant
//console.log(student.fullname);
student.age+=1;
student.fullname="AyushPratapSingh";
//console.log(student.fullname);
//console.log(student["age"]);

//---------------------------Task 1-----------------------------
const product={
    proname: "Parker Jotter Pen",
    price: 270,
    ratings: 4,
    discount: "5%",
    mrp:286
};
//console.log(product);

//---------------------------Task 2-----------------------------
const profile={
    id:"sk",
    posts:195,
    followers: 569000,
    following: 4,
    follow: false
};
//console.log(profile);
