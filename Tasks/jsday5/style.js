var r=new RegExp(/^[a-zA-Z]+$/);
var arr =[];
var arr2 =[];
do {
    var n= prompt("enter the number of persons:");
}
while (n==="" || isNaN(n) || n==null)
for (i=0 ; i<Number(n); i++){
    do{
        var name = prompt("Enter the user's name:")
    } 
    while(name==="" || isFinite(name) || !r.test(name) || name.length<3 || name.length>10)
arr.push(name);
do {
    var age = prompt("Enter the user's age:");
}
while (age==="" || isNaN(age) || age==null || Number(age)<10 || Number(age)>60);
arr2.push(age);
}
var t=document.createElement("table");
document.body.appendChild(t);
t.setAttribute("border","2");
for ( let j=0; j<Number(n); j++ ){
    var a=document.createElement("tr");
    var x=document.createElement("td");
    x.innerHTML=arr[j];
    a.appendChild(x);
    var y = document.createElement("td");
    y.innerHTML=arr2[j];
    a.appendChild(y);
    t.appendChild(a);

}

// var number = prompt("Please enter a number:");

// for (i=1; i <= 10; i++)
// {document.write( number + " x " + i + " = " + i*number + "<br>");};
