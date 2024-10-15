//-----------------------------------Sync in JS
//Synchronous means the code is executed line by line
// console.log(1);
// console.log(2);

//-----------------------------------Async in JS
//Asynchronous means the code is not executed line by line
//Asynchronous allows to execute next instructions immediately 
//and doesn't wait for the previous instructions to finish
//concurrent flow

// console.log("hi");
// setTimeout(() => {
//     console.log("timeout");
// },4000); //2 seconds = 2000ms
// console.log("bye");

//------------------------------------Callbacks(functions passed as arguments)
// Synchronous callback
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sum){
//     sum(a,b);
// }
// calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//     console.log(a*b);
// });


//Asynchronous callback
// const hello = () => {
//     console.log("hello after 4000ms");
// };
// setTimeout(hello, 4000);

//-------------------------------------------------------------
//--------------------------------------Callback hell
//Nested callbacks stacked on top of each other forming a pyramid structure
//Pyramid of Doom
// function getData(data,getNextData){
//     setTimeout(()=>{
//         console.log("data",data);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// };

//Callback hell:
//getData(1,getData(2,getData(3,getData(4,getData(5)))));(not a call back hell)
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             })
//         });
//     });
// });
//-------------------------------------------------------------

//--------------------------------------Promises
//Promises solves Callback hell
//Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation
//Promise is a special object that is used to handle asynchronous operations
//Promise is a constructor function that is used to create new promises
//Promise is an object that can be either fulfilled or rejected
//Promise has 3 states
//Pending, Fulfilled, Rejected
//Pending - initial state
//Fulfilled - when the promise is resolved
//Rejected - when the promise is rejected

// let promise = new Promise((resolve,reject) => {
//     console.log("Promise")
//     // resolve(123);
//     // reject(456);
// })
// console.log(promise);

// function getData(data,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//         console.log("data",data);
//         resolve("Success");
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     });
// };
// let final = getData(52);
// console.log(final);
// setTimeout(() => {
//     console.log(final);
// },5000);

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         resolve("Success");
//         // reject("Failed");
//     })
// };
// let res = getPromise();
// res.then((mes) => {
//     console.log("Promise resolved with",mes);
// });
// res.catch((err) => {
//     console.log("Promise rejected with ",err);
// });

// function asyncFun() {
//     return new Promise((resolve,reject) => {
//         console.log("fetching 1..");
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFun1() {
//     return new Promise((resolve,reject) => {
//         console.log("fetching 2..");
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         },4000);
//     });
// }

// // let p1 = asyncFun();
// asyncFun().then((data) => {
//     console.log(data);
//     // let p2 = asyncFun1();
//     asyncFun1().then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);
// })
//if we call both functions first and then apply then operation
// then it might not work as intended

//-------------------------------------------------------------
// -----------------------------------Promise Chaining
// function getData(data){
//     return new Promise((resolve,reject) => {
//         console.log("fetching",data,"...");
//         setTimeout(()=>{
//         //if(data>1000)  reject("Failed");
//         console.log("data",data);
//         resolve("Success");
//     },5000);
//     });
// };
// let final = getData(123);
// //-------------------------Actual Chaining
// final.then((mes) => {
//     return getData(234);
// }).then((mes) => {
//     return getData(345);
// }).then((mes) => {
//     return getData(456);
// }).then((mes) => {
//     console.log("Done");
// })
//-------------------------My understanding
// final.then((mes) => {
//     console.log("Promise resolved with",mes);
//     getData(456).then((mes) => {
//         console.log("Promise resolved with",mes);
//         getData(789).then((mes) => {
//             console.log("Promise resolved with",mes);
//             getData(101112).then((mes) => {
//                 console.log("Promise resolved with",mes);
//             }).catch((err) => {
//                 console.log(err);
//             })
//         }).catch((err) => {
//             console.log(err);
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);
// })
//-------------------------------------------------------------

// -----------------------------------Async Await
//Promise is yet also bit complex to understand and used
//Async Await solves this problem
//Async Await is a syntactic sugar
//Async Await is an alternative to callbacks
//Async Await is an alternative to promises

//Async returns a promise
// async function hello(){
//     console.log("hello");
// }

//Await returns a value and pauses the execution of 
//surrounding async function
//await can only be used inside an async function
// function api() {
//     return new Promise((resolve,rejct) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         },1000);
//     });
// }

// async function getWeather(){
//     await api();//1st call
//     await api();//2nd call
// }

//-------------------------------------------------------------
//------------------------------With Async-Await
// function getData(data){
//     return new Promise((resolve,reject) => {
//         console.log("fetching",data,"...");
//         setTimeout(()=>{
//         //if(data>1000)  reject("Failed");
//         console.log("data",data);
//         resolve("Success");
//     },5000);
//     });
// };

// async function getAll(){
//     await getData(12);
//     await getData(23);
//     await getData(34);
//     console.log("Done");
// }
// getAll();

//Since, We have to make a function and then call that function to run Async-Await
//We can do this
// (async function(){
//     await getData(12);
//     await getData(23);
//     await getData(34);
//     console.log("Done");
// })();

// (async() =>{
//     await getData(12);
//     await getData(23);
//     await getData(34);
//     console.log("Done");
// })();
//This is IIFE(Immediately invoked function expression)

//-------------------------------------------------------------

// COMPARE THIS WITH LINES AFTER : 38,149