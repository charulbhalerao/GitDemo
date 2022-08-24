console.log('hello');
/* alert('yoo');
 var b=('apple');
console.log(b);
var someNumber=(99);
console.log(someNumber);
document.getElementById('HeadingText').innerHTML='Charul relax'
document.getElementById('someText').innerHTML='Om Ignoray Namah'
var age = prompt('Enter your age');

document.getElementById('DisplayAge').innerHTML= age;
*/

/* Functions
1. create the function  
2. call the function
*/

/* Lets create a function that takes in a name & returns Hello name.
eg. Enter your name : "Charul"
Return: Hello Charul
*/

function greeting(yourName) {
  
   var result = 'Hello' + ' ' + yourName; //String Concatenation
   console.log(result);
}

var Name = prompt('What is your name?');
greeting(Name);

/* Arguments in a function
eg. Function greeting (yourName) //Here yourName is an input to the function
var result = 'Hello' + ' yourName';
Then call the function:
greeting (yourName) // Here yourName is the argument
*/