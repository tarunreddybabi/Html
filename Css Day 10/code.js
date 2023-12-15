// Find 2 greatest number
a=10;
b=24;
if(a>b){
console.log("a is greater than b")
}
else{
console.log("b is greater than a")
}

// Print numbers 1-10
for(i=0;i<11;i++){
console.log(i)
}

// print even numbers
for(i=2;i<11;i+=2)
{
console.log(i)
}

//Functions
function greet(name){
    console.log("Hello, " + name )
}
greet("Alex");

//vote
let age=16;
if(age>18){
console.log("Eligible for vote");
}
else{
console.log("Not eligible for vote");
}

//Even number
let i=6;
if(i % 2 == 0){
console.log("Number is even number");
}
else{
console.log("Number is odd number");
}

//series of numbers
let a=1;
let b=2;
let c=3;

let d=a-b;
let e=b-c;

if(d==e){
console.log("This Series is in Arthimetic Progession")
}
else{
console.log("This Series is not in Arthimetic Progession")
}