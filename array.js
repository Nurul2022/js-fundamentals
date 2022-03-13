// var friendsAge = [11, 13, 17];

var muriChanachurFee = [34, 55, 221, 3];

var nayikas = ['mahi', 'opu', 'sabana', "kopila"];

var oddNumbers = [1, 3, 5, 7, 9];

var vowels = ['a', 'e', 'i', 'o', 'u'];

//console.log(friendsAge);
//console.log(vowels);
//console.log(nayikas);
//console.log(nayikas.length);
var vowelsCount = vowels.length;
//console.log(vowelsCount); 
console.log(vowels.length);

//***************note*************
/*
// Why write Array?
/*Ans. Imagine, You have five friend and their age is also different, thats why need to declare Variable */
let salamAge = 11;
let kalamAge = 13;
let balamAge = 17;
let nurulAge = 15;
let israfAge = 20;
/* here need to write 5 line but Array declar one line, thats whe write Array, below details */

// To write Array of Number 
var friendsAge = [11, 13, 17, 15, 20];

// To write Array of name (string)
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];

// If you want to output/ show(console.log) or What's in the Array? below check
var friendsAge = [11, 13, 17, 15, 20]
// console.log(friendsAge); // rs [ 11, 13, 17, 15, 20 ]

/* if you want to how many an element have in the arrey? below process follow   */
var friendsAge = [11, 13, 17, 15, 20]
// console.log(friendsAge.length); // rs 5

/* "In array index start 0", if you find out specific an element in the array, "using indexOf" below..
supose we want to know index/position of 'sabana' */
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
var sabanaIndex = nayikas.indexOf('sabana')
// console.log(sabanaIndex);  // rs 2

/* if not exist an element in the array, result comes -1, "using indexOf" below...*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
var index = nayikas.indexOf('nusrat') // nusrat not exist an element in the array
// console.log(index);  // rs -1 

/* Different way to  find out specific an element in the array, "using []" below...
supose we want to know index/position of 'second'*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
var secondIndex = nayikas[2]
// console.log(secondIndex);  // rs sabana

/* if not exist an element in the array, result comes -1, "using []" below...*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
var index = nayikas[119] // 119 index not exist in the array
// console.log(index);  // rs undefined  

/* How to change an element of Array? If you want to change an element of array, using  below... 
supose we want to change index/position of '2 (sabana)'*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
nayikas[2] = 'nusrat';
// console.log(nayikas);  // rs [ 'mahi', 'opu', 'nusrat', 'kopila' ]

/* How to add an element to the end of your array? use push(). */
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
nayikas.push('nusrat');
// console.log(nayikas);  // rs [ 'mahi', 'opu', 'sabana', 'kopila', 'nusrat' ]

/* How to remove an element to the end of your array? use pop(). */
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
nayikas.pop();           // rs [ 'mahi', 'opu', 'sabana' 
nayikas.pop();          // rs [ 'mahi', 'opu' ]
// console.log(nayikas);  

/*If you want to removed an element keep in array (video ref 18-4)*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
// console.log(nayikas)        // [ 'mahi', 'opu', 'sabana', 'kopila' ]
var  lastItem = nayikas.pop();             // [ 'mahi', 'opu', 'sabana' ]
nayikas.pop();             // [ 'mahi', 'opu' ]
// console.log(nayikas);     
// console.log(lastItem)  // rs kopila  */

/* If you need to add an element to the beginning of your array, try unshift(). 
And you can add arrays together using concat().*/
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
nayikas.unshift('nusrat');
// console.log(nayikas);  // rs [ 'nusrat', 'mahi', 'opu', 'sabana', 'kopila' ]

/* JavaScript remome item from the begining */
var nayikas = ['mahi', 'opu', 'sabana', "kopila"];
nayikas.shift('nusrat');
// console.log(nayikas);  // rs [ 'opu', 'sabana', 'kopila' ] 
