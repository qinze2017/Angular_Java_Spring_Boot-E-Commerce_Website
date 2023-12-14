var a = true;
var num = 88.8;
var firstName = "Mike";
var lastName = 'London';
/* wrong ones :
found = 0;
grade = "A";
firstName = false;*/
console.log(a);
console.log("The num is : " + num);
//console.log("Hi, I am "+ firstName + " " + lastName);
// use template Strings
console.log("Hi, I am ".concat(firstName, " ").concat(lastName));
