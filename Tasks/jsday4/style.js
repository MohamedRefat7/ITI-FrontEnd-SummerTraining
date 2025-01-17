// function add(x, y) {
//     if(!x || !y)
//     {
//                throw("arguments are empty")
//              }
//              if(arguments.length!==2){
//                  throw("argumets number should be 2");
//              }
//     return x + y;
//   }
//   console.log(add(3,4))
//////////////////////////////////////////

///////////////////////////////////////////
// function add(){
//     let x=Array.from(arguments);
//     return x.reduce(function(acc , cur){
//         return acc + cur;
//     })
// }
// console.log(add(3, 4, 7,8));
/////////////////////////////////////////////
function day(z){
    var d = new Date(z);
    console.log(z);
    var dd=(d.getDay());
    console.log(dd);
    switch(dd){
        case 0:return("sunday");break;
        case 1:return("monday");break;
        case 2:return("tuesday");break;
        case 3:return("wednesday");break;
        case 4:return("thursday");break;
        case 5:return("friday");break;
        case 6:return("saturday");break;
    }
    
}
var x=day("2022,7,21");
console.log(x);

// func(1,2,3,7,9,2);
// function rev(){
//     console.log(arguments);
//     var x =[];
    
//     for (var i=0;i<arguments.length; i++){
//          var m = arguments[i];
//          x.push(m)
        
         
//     }
//     return x.reverse();

// }
// console.log(rev(0,1,2,3,4,5));