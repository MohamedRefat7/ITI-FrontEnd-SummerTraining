// var age = 10;
// var userName = "hamada";
// var i = 5;

// document.write("<h"+i+">my name is "+ userName+ " iam " + age +" years old</h"+i+">");
////////////////////////////////////////////////////
// var num = prompt("enter a number");
// if(isFinite(num)){
//     console.log("true");
// }
// var num2 = prompt("enter a number");
// if(isFinite(num2)){
//     console.log("true");
// }
// var num3 = prompt("enter a number");
// if(isFinite(num3)){
//     console.log("true");
// }
// var num4 = prompt("enter a number");
// if(isFinite(num3)){
//     console.log("true");
// }
// // sum = num1+num2+num3
// var sum=0;//
// do{
//     var num = prompt("enter number");
//     if(isFinite(num)){
       
//         sum = sum + Number(num);
//         console.log(sum);
//     }
// }while(Number(num)!==0 && sum<=100)

//  document.write("sum of numbers<br> is "+ sum+"<br> hamada");
//////////////////////////////

// var x = 5;//number

// var y = new Number(5)//object
// console.log(y.toString());

// var bool = true;//boolean

// var obj = new Boolean(0);//object

// var m = new Math();//static class/object

// console.log(Math.sqrt(16));
// console.log(Math.pow(2,3));
// var x = 100;
// var y = 30;
// var c = 0;
// console.log(Math.max(x,y,c,60,30));

// var x = parseInt(Math.random()*100);//0 1

// var x = Math.floor(Math.random()*100);
// var str = "2010/11/10";
// var d = new Date(2010,11,9);//object date;
// console.dir(d);

// // var str = "menna";
// // console.dir(str);

////////////////
//literal creation
// var arr = [100,"menna"];
// // arr[10] = "menna";
// // arr.push(false);
// arr.unshift(5);
// console.log(arr);
// var arr = ["menna","second",1];
// arr.reverse();

// construcotr creation
// var arr2 = new Array(100,"menna",false,null);
// console.log(arr2[1]);
// var x = ["m","e","n"];
// // var arr2 = [3,6,3];
// // //[2,3,10,3,6,3]
// // var arr3 = arr.concat(arr2);
// // console.log(arr3);
// // arr.pop();
// // arr.pop();
// // arr.shift();
// // console.log(arr);

// console.log(x.join(""));
//////////////////////////////

// var myArr = ["hello","bye","first","last"];
// for(var i=0;i<myArr.length;i++){

//      document.write("<h1>"+myArr[i]+"</h1>");
// }
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);

// var str = prompt("enter a word");
// // console.log(str.length);
//  var counter=0
// for(var i=0;i<str.length;i++){
//         if(str[i]=="e"){
//             counter++;
//         }
// }
// console.log(counter);
// if(str[0]=="e"){
//         counter++;
// }
// if(str[1]=="e"){
//     counter++;
// }
// if(str[2]=="e"){

// }

// var x = 10;
// var y = x;
// y=20;
// x=30

// console.log(x);//10
// console.log(y);//20

///////////////value type/////////
///stack


////////reference type/////
//stack heap
// var arr1 = ["first","second"];

// // var arr2 = arr1;//shallow copy
// var arr2 = [];//deep copy
// for(var i=0;i<arr1.length;i++){
//     arr2.push(arr1[i]);
// }
// // arr2.push(arr1[0]);
// // arr2.push(arr1[1]);

// arr2.push("last");
// console.log(arr1);//
// console.log(arr2);//
////////////////////
var ele = [];
var x = ["menna",ele];
// console.log(x.length);
ele.push(2);
ele.push(3);


// x[0] = x[0].toUpperCase();
// x[1].push(3);
// var ele = x[1];
// console.log(ele);
// ele.push("menna");
// document.write(ele[1]);
// document.write(x[1][1]);