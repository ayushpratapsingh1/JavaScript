//---------------for loop
// for(let i = 1; i <= 100000; i++)
// {
//     console.log("ayush");
// }
// console.log("End")

//---------------for
// for(var i = 1;i <= 10;i++)
// {
//     console.log(i);
// }
// console.log(i);//not executed if i we let i instead of var(scope problem)

//---------------while
// let i=0;
// while(i<5)
// {
//     console.log(i);
//     i++;
// }

//---------------do-while
// let i = 5;
// do {
//     console.log(i);
//     i++;
// } while (i < 5)

//---------------for-of loop
// let str = "ayush";
// let i=0;
// for(let j of str)
// {
//     i++;
//     console.log(j);
// }
// console.log(i);

//---------------for-in loop
// let student = {
//     name: "Harish",
//     gender: "Female",
//     age: 24,
//     size: "32-24-36"
// }
// for(let key in student)
// {
//     console.log(student[key]);
// }

//---------------Task 1
// let i = 0;
// while(i<=100)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++;
// }

//---------------Task 2
// let i=20,k;
// while(k !== i)
// {
//     k = prompt("Guess number");
//     if(k == i)
//         alert("You guessed it right");
//     else
//         alert("Try again");
// }

// let game = 25;
// let guess = prompt("Guess number");
// while(guess != game)
// {
//     guess = prompt("You entered wrong number.Guess again");//prompt return string
// }
// alert("Congrats,You guessed it right");

//---------------------------String-----------------------------
// let str = "Ayush";
// let str2 = "Knows";
// console.log(str + " " + str2);
// console.log(str[1]);//y

//Template Literal-Special String
// let sen=`This is template literal`;
// console.log(sen);
// console.log(typeof(sen));

//Need of template literal
// let obj={
//     item:"laptop",
//     price:"50000",
// };
// console.log("Item is "+obj.item+" and price is "+obj.price);
// let out="The Item is ${obj.item} and price is ${obj.price} rupees";
// let out1=`The Item is ${obj.item} and price \tis ${obj.price} rupees`;
// Placeholders usage in template literal is known as String Interpolation
//console.log(out1,out1.length);

//-----------------String Functions(Strings are immutable)
//let str=" ayuSh ";
// str = str.toLowerCase() + "Yes  ";
// str = str.toUpperCase();
// str = str.trim();//removes whitespaces
// let str1 = str.slice(0,1);// returns a substring
// str = str.concat(str1);
// str = str.replace("A","PI");
// let str2 = str.charAt(0);
// str[0]="K";// not working because immutability
// str = str.replace(" ","k");
// console.log(str,str2.length);


//---------------Task 3
// let str = prompt("Enter your name");
// let id = `@${str}${str.length}`;
// console.log('@'+str+str.length);
// console.log(id);

