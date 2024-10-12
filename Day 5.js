// minimize redundancy
// function newly(){
//     console.log("new");
//     console.log("old");
// }
// newly();

// function messages(k){//parameter
//     console.log(k);
// }
// messages("Hii");//argument

// function messages(n,k){
//     console.log(k*n);
// }
// messages(5,"HIi");

//Sum
// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(121,954);

// function sum(a,b){
//     s = a + b;
//     return s;
// }
// console.log(sum(121,954));

//------------------------Arrow Functions
// const sum = (a,b) => {
//     return a+b;
// };//stored result in sum (function variable)
// console.log(sum(121,954));
// let mul = (a,b) => {
//     return a*b
// };
// console.log(mul(121,954));
// const printHello = () => {
//     console.log("Hello");
// };
// printHello();

//------------------------------Task 1
// function vowel(s){
//     count = 0;
//     for(let i of s){
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             count++;
//         }
//     }
//     return count;
// };
// console.log("Number of vowels in 'ayush'",vowel("ayush"));

//------------------------------Task 2
// const county = (s) =>{
//     count = 0;
//     for(let i of s){
//         if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Number of vowels in 'ayush'",county("ayush"));


//------------------------------for-each
//functions can be passed as parameter and can be returned as a value
// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val,idx,arr){
//     console.log(val,idx,arr);
// })
// let arr1 = ['Pune','Mumbai','Delhi'];
// arr1.forEach((val,idx,arr) => {
//    console.log(val,idx,arr); 
// })

//higher-order functions are functions that take other functions 
//as parameters or return functions as values

//------------------------------Task 3
// arr = [1,2,3,4,5];
// let calcSquare = (val) => {
//     console.log(val**2);
// }
// arr.forEach(calcSquare);

// arr.forEach((val) => {
//     console.log(val**2);
// })

//------------------------------Map(returns a new array)
// let arr = [6,5,8,7,4,5];
// let newArr = arr.map((val) => {
//     return val**2;
// })
// console.log(arr);
// console.log(newArr);

//------------------------------Filter(filter out based on condition)
// let arr = [6,5,8,7,4,5];
// let newArr = arr.filter((val) => {
//     return val%2 == 0;
// })
// console.log(arr);
// console.log(newArr);

// ------------------------------Reduce
//(adds accumulator and currentValue and stores the result to accumulato and current Value is increased by 1)
//multiple inputs but single output
// let arr = [6,5,8,7,4,5];
// let sum = arr.reduce((accumulator,currentValue) => {
//     return accumulator+currentValue;
// })
// console.log(sum);

//find max
// let max = arr.reduce((prev,curr) =>{
//     return prev > curr ? prev : curr;
// })
// console.log("Max",max,"in",arr);


//------------------------------Task 4
// let arr = [84,58,95,75,69,78];
// let newArr = arr.filter((val) => {
//     return val > 90;
// })
// console.log(arr);
// console.log(newArr);

//------------------------------Task 5
// let n = prompt("Enter a number");
// let arr = [];
// for(let i=0;i<n;i++){
//     arr[i]=i+1;
// }
// console.log(arr);
// let sum = arr.reduce((prev,curr) => {
//     return prev + curr;
// })
// console.log("Sum of array is",sum);
// let product =arr.reduce((prev,curr) => {
//     return prev * curr;
// })
// console.log("Product of array is",product);