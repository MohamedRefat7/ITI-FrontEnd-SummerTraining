// function addDiv(){
//     var div = document.createElement("div");
//     div.textContent = "hello";
//     div.style.color = "red";
//     div.style.height = "200px";
//     div.style.background = "green";
//     document.body.append(div);
// }
// function test(e){
    
//     console.log(e);
 
//         alert("hello "+this.value);
// }
// /////////////////////////////
// //select elem////
// // var btn = document.querySelector("button");
// // btn.addEventListener("click",addDiv);

// var inp = document.querySelector("input");
// inp.addEventListener("change",test);//test(event)

// function validate(e){
    
//    var inp = document.getElementsByTagName("input")[0];
//    var span = document.getElementsByTagName("span")[0];
//    if(inp.value===""){
//     e.preventDefault();
//        span.textContent = "this field is required"
//    }
//    else if(isFinite(inp.value)){
//         e.preventDefault();
//         span.textContent = "you should enter characters";
//         // inp.value = "";
//    }
// //    else{
// //     span.textContent = "";
// //     alert("hello " +inp.value);
// //     inp.value = "";
// //    }
// }

//////////////////////

// setTimeout(function(){
//     console.log("hello");
// },3000);

var res = setInterval(function(){
    console.log("hello");
},1000);




function test(){
    clearInterval(res);

}
