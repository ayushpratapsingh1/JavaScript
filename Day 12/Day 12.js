// Fetch API(Application programming interface)
// It provides an interface to access web resources via javascript
// It helps in making HTTP requests
// for fetching resources(sending/receiving data)
// It uses request and response objects
// It provides a way to fetch data asynchronously
// It provides a way to fetch data synchronously
// fetch() method returns a promise
// promise is an object that represents the eventual completion or failure of an asynchronous operation

const URL = "https://cat-fact.herokuapp.com/facts";
const fact = document.getElementById("fact");
let btn = document.getElementById("button");
// let promise = fetch(URL);
// console.log(promise);//status 200 means successful

// async function getFacts() {
// const getFacts = async () => {
//     console.log("Fetching data...");
//     let response = await fetch(URL);//no options are set then get request is performed
//     console.log(response);//200
// }
// getFacts();


//--------------------------Data Formats
//AJAX - Asynchronous JavaScript And XML
//AJAX is a technique for creating interactive web applications
//XML - Extensible Markup Language
//AJAJ - Asynchronous JavaScript And JSON
//JSON - JavaScript Object Notation
//json() method of the response object returns a promise
//-------------------------------------------------------------
//Request > Response > Promise (JSON) > Fetch API
//JSON() returns a second promise object that resolves 
//to a response object that contains the parsed JSON data

//---------------------------------------------------
// const getFacts = async () => {
//     console.log("Fetching data...");
//     let response = await fetch(URL);//no options are set then get request is performed
//     console.log(response);//200
//     let data = await response.json();
//     console.log(data[0].text);
//     let n = Math.floor(Math.random() * 5);
//     fact.innerText = data[n].text;
// }
// btn.addEventListener("click", getFacts);
//----------------------------------------------------
function getFacts() {
    console.log("Fetching data...");
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0].text);
        let n = Math.floor(Math.random() * 5);
        fact.innerText = data[n].text;
    })
}
btn.addEventListener("click", getFacts);

// Status
// 100 - 199 Informational
// 200 - 299 Successful
// 300 - 399 Redirection
// 400 - 499 Client Error(our error)
// 500 - 599 Server Error
// Header in api response is case sensitive