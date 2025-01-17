// function test(e,div){
//     //var div = document.getElementsByTagName("div")[0];
    
//         if(e.target!==div){
//             alert(e.target.value);

//         }
   
// }
// var newWin;
// function openWin(){
//    newWin =  open("page.html");
// }

// function closeWin(){
//     //window.close();
//     newWin.close();
// }
// function printWin(){
//     window.print();
// }

// function backPage(){
//     // history.back();
//     // history.forward();
//     // history.go(-2);
//     // location.reload();
//     location.replace("page.html");
// }
// // console.log(window.navigator);
// // console.log(window.history);
// console.log(window.location);
//string Object
// array Object

//object Object

//literal creation // anonmous object

var emp4 = {
    name: "hamada",
    age: 25,
    email:"mmm@aaa.ccc",
    address:["ismailia","cairo"],
    printData:function(){
        alert(this.name);
    }
}
// document.write(emp1.name);//name
// document.write(emp1.address[1]);
// console.log(emp1.age);
// emp1.printData();
// emp1.name = "menna";//set
// console.log(emp1);
var emp3 = {
    name:"menna",
    age:60
}

// console.log(emp2);

/////////////////////////
////////constructor creation

//function constructor//////////

function Employee(n,a,e,add){

    this.name = n;
    this.age = a;
    this.email = e;
    this.address =add;
    /////////prototype////
    this.print = function(){
        alert(this.name);
    }
}

var emp1 = new Employee("menna",30,"aaa@aaa.ccc",["ismailia","cairo"])//{}
// emp1.name = 25;
// console.log(emp1);//obj
// alert(emp1.name);
// emp1.print();
// emp1.age = 40;
// var emp2 = new Employee("hamada");//{}
// console.log(emp2);

// console.log(emp3);
// console.log(emp4);
// Object.defineProperty(emp1,"name",{
//         value:"menna",
//         writable:false,
//         configurable :false,
//         enumerable:true
      
        
// })
var n = "menna"
Object.defineProperty(emp1,"name",{
       get:function(){
            return n;
       },
       set:function(val){
        if(isFinite(val)){
            throw("you should enter chacters")
        }
        n = val;
        

       },
        configurable :false,
        enumerable:true
      
        
})

emp1.name = "hamada";
emp1.name = "aya";


function Rectangle(){

}

//methode area return
//methode permiter return
//displayInfo (document.write)

var rec = new Rectangle(2,2);
console.log(rec.area());//4;
console.log(rec.prem());//8;
rec.dispayInfo();//width is 2 height is 2 area = 4 per=8


var rec2 = new Rectangle(2,1);
console.log(rec.area());//4;
console.log(rec.prem());//8;
rec.dispayInfo();//w