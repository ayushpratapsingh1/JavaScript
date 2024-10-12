//---------------------------------Prototype
// const student = {
//     fullName : "Ayush",
//     marks : 100,
//     printMarks: function(){
//         console.log("marks = ",this.marks);
//     }
//     //prototypes is a special property in javascript
//     //prototypes are the properties that are added to the objects created
// }

// const employee = {
//     calcTax(){
//         console.log("Tax is 30 %");
//     }
// }

// const karanarjun = {
//     salary:50000,
//     calcTax(){
//         console.log("Tax is 20 %");
//     }
// };

// karanarjun.__proto__=employee;//now karanarjun can access the properties of employee
// karanarjun.calcTax();//referenced by karanarjun

//if object and prototype have the same property
//then the object's property will be accessed
//calcTax inside karanarjun will be accessed

//---------------------------------Classes
//class is a blueprint of an object
//class is a user defined data type
//class is a template
//class is a syntax to create objects

// class Car
// {
//     constructor(mileage){
//         this.brand="Maruti";
//         this.mileage=mileage;
//     }
//     start(){
//         console.log(`${this.brand} Car started`);
//     }
//     stop(){
//         console.log(`${this.brand} Car stopped`);
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let obj = new Car(10.5);
// obj.start();
// obj.stop();
// console.log(obj);
// obj.setBrand("BMW");


//------------------------------------Inheritance
//inheritance is a concept in javascript
//inheritance is a way to create a new class from an existing class
//inheritance is a way to create a new object from an existing object

// class Car
// {
//     constructor(brand,mileage){
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log(`${this.brand} Car started`);
//     }
//     stop(){
//         console.log(`${this.brand} Car stopped`);
//     }
// }

// class Maruti extends Car
// {
//     constructor(brand,mileage){
//         super(brand,mileage);//super is used to call the constructor of the parent class
//     }
//     setBrand(){
//         this.brand="Maruti";
//         super.start();//super is used to call the method of the parent class
//     }
//     start(){
//         console.log(`${this.brand} Car will be started`);
//     }//Method overriding is a concept in javascript
//     //Method overriding is a way to create a new method from an existing method
// }
// console.log(Maruti);
// let obj = new Maruti("Maruti",10.5);
// obj.start();
// obj.stop();
// obj.setBrand();
// console.log(obj);


//------------------------------------Task 1
// class User {
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(`User name is ${this.name} and his mail is ${this.email}.`);
//     }
// }
// let ayush=new User("Ayush","ayushpratap8382@gmail.com");
// ayush.viewData();

//------------------------------------Task 2
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(name,email){
//         this.name=name;
//         this.email=email;
//     }
// }

// let sahil = new Admin("Sahil","sahilpratap8382@gmail.com");
// sahil.viewData();
// sahil.editData("Ayush","ayushpratap8382@gmail.com");
// sahil.viewData();


//------------------------------------Error-Handling
//try-catch-finally
//try-catch is a syntax
//try-catch is a way to handle errors

// let a = 10;
// try{
//     console.log(a/b);
// } catch(err) {
//     console.log("Error",err);
// } finally{
//     console.log("Finally block");
// }









