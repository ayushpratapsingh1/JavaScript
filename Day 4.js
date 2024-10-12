// Arrays are mutable
// let marks_student = [96,15,75,95,85,75];
// console.log(marks_student,marks_student.length);

//let heroes = ["ironman","thor","hulk","spiderman","captain america"];
// console.log(heroes,heroes.length);

// for(let i of heroes)
//     console.log(i);

// for(let i = 0; i<heroes.length ; i++)
//     console.log(heroes[i]);

// let i = 0;
// do {
//     console.log(heroes[i]);
//     i++;
// }while(i < heroes.length); 

//----------------------------Task 1
// let marks = [85,79,97,58,68,96,75,95,96,75,68];
// let sum = 0;
// for(let j of marks)
//     sum+=j;
// let avg = sum/marks.length;
// console.log(avg);

//----------------------------Task 2
//let price = [250,645,300,900,50];
// for(let j=0;j<price.length;j++)
// {
//     console.log(`value at index ${j} before offer is ${price[j]}`);
//     price[j]=price[j]*0.9;
//     console.log(`value at index ${j} after offer is ${price[j]}`);
// }
// console.log(price);

//--------------Array methods
//push() : add to end
//pop() : remove from end & return
//unshift() : add to start 
//shift() : remove from start & return 
//splice(start,delete,add) : remove and add at any position
//slice() : copy part of an array
//sort() : sort ascending
//sort(desc) : sort descending
//reverse() : reverse the array
//indexOf() : search for an element
//toString() : convert to string

//------------------------Practice
//let food = ["pizza","burger","samosa"];
// food.push("momos","noodles");
// console.log(food);
// let del = food.pop();
// console.log(food,del);
// console.log(food.toString());
//let mark=[85,79,97,58,68,96,75,95,96,75,68];
// console.log(mark.toString());
// console.log(food.concat(mark));//multiple arrays can be concatenated
// food.unshift("kachori");
// console.log(food);
// let k = mark.shift();
// console.log(mark,k);
// let sli = mark.slice(0,3);
// console.log(mark,sli);
//console.log(mark);
//mark.splice(1,3,100,200); 
//mark.splice(1,0,101); //add
//mark.splice(3,1); //remove
//mark.splice(1,1,100); //replace
//mark.splice(4); //remove till end
//console.log(mark);

//------------------------Task 3
// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(company);
// company.shift();
// console.log(company);
// company.splice(1,1,"Ola");
// console.log(company);
// company.push("Amazon");
// console.log(company);