// console.log("hello");
// var z = 10;
// console.log(z);
// var x = 20
// console.log(x+z);

/////////////myfunc//////////
// function myFunc(arg)
// {

//     console.log(arg);
// }

////////calling//////////
//  myFunc("hello",10);
//  myFunc(5);
//  var x=10;
//  var z = 20;
//  var sum = x+z;

//  myFunc(sum)

//  myFunc();
//////////////////////

// function sumNums(x,y){
//     // console.log(arguments);
//     if(!x || !y){
//         throw("arguments are empty")

//     }
//     if(arguments.length!==2){
//         throw("argumets number should be 2");
//     }
//     if(isFinite(x)||isFinite(y)){
//         throw("arguments should be string");
//     }
//     var num1 = prompt(x);
//     var num2 = prompt(y);
//     alert(Number(num1)+Number(num2));

// }






// sumNums();


// sumNums("enter your age","enter your date of birth");
// var num1 = prompt("enter num1");
// var num2 = prompt("enter num2");
// alert(Number(num1)+Number(num2));


// var n1 = prompt("enter your age");
// var n2 = prompt("enter your date of birth");
// alert(Number(n1)+Number(n2));

// console.log("aaa");

// alert("hello")

// var f = isFinite("5");

// if(isFinite("5")){

// }


// function myFunc(x,y,z){
//     var sum = x+y+z;
//      return sum;

// }
// // console.log(myFunc);

// var test = function(x,y){
//     // console.log(x+y);
//     return x+y;
// }
// var res = test(100,20);

// console.log("aaa");

// // var f = isFinite("5");
// // if(isFinite("5"))

// var num1 = Number("5");
// num1+10

// var res = myFunc(20,60,20);
// var x = console.log(res);//x=undefiend

//////////////////////////
//function global scope
// if(true){
//     var x = 10;
// }

// for(var i=0;i<5;i++){
//     console.log(i);
// }

// console.log(x);
// console.log(i);
// console.log(z);

// function test(){
// //function scope
//     var z = 10;
//     console.log(z);
// }

// test();
// console.log(z);

// (function(){
//     console.log("hello");
//     var x = 10;
//     console.log(x);





// })();//self envoked function

//////hoisting///////
//var x; //var test;//undefiend

// alert(x);
// var x = 10;
// // console.log(z);//error
// //  z = 30;//not hoisted

// // test();

// // function test(){
// //     console.log("hello");
// // }
// console.log(test);
// var test = function(){
//     console.log("hello")
// }
// console.log(test);

// function test(){
//     //var x;
//     console.log(x);//undefiend
//     var x = 10;



// }

// test();


// var x = 10;//global

// function test(){
//    //var x;//shadowing local
//     console.log(x);//
//     var x = 20;
// }
// test();
// console.log(x);//10//global

////////////////////////////
//hoisting var x;a b
// function b() {
//     var myvar = 1;
//     console.log(myvar);//1
// }
// console.log(x);//undefined
// a();
// b();
// function a() {
//     var myvar = 2;
//     console.log(myvar);//2
// }
// var x = 5;


// function f1(x, y) {
//     //hoisting var z ;var zz=3
//     if (x > 3) {
//         var z = 3;
//     }
//     else {
//         var zz = 3;
//     }
//     console.log(z, zz);//undefiend 3
//       zzz = 300;
// }
// f1(1, 3);
// alert(zzz);// 300


///////////////
//total =400;number 400
function square(num)
{
    //total = 400
	 total = num * num;
	return total;
}
var total = 50;
var number = square(20);
alert(total);// 400




