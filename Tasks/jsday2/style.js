
//function circle(radius)
//{
//    this.radius = radius;
 //   this.area = function () 
//    {
//        return Math.PI * this.radius * this.radius;
//    };
//}
//var c=prompt("enter the radius")
//var c = new circle(c);
//console.log('Area =', c.area().toFixed(2));
//document.write("THE TOTAL AREA IS "+c.area().toFixed(2));

// take the input from the user
//const number = prompt('Enter the number: ');

//const result = Math.sqrt(number);
//console.log(`The square root of ${number} is ${result}`);


//var bday;
//bday = window.prompt("When is your birthday (YYYY-MM-DD)?","");
//var bdayArray = bday.split('-');
//validation
//if(bdayArray.length !== 3){
//     alert("invalid Date");
//}else{
 //   if(!bdayArray[0].match(/^\d\d\d\d$/) || 
//    !bdayArray[1].match(/^\d\d$/) || 
//       !bdayArray[2].match(/^\d\d$/)){
//        alert("invalid Date");    
//    }else{
//        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];     
//        var currentTime = new Date(            
//            parseInt(bdayArray[0]),
//            parseInt(bdayArray[1]) - 1, //month starts from 0
//            parseInt(bdayArray[2])
//        );        
//        var currentDay = currentTime.getDay();       
//        var currentDayName= days[currentDay];
//       document.write("You were born on "+currentDayName);
//    }
//}
var a=["JavaScript engine is a computer program that executes JavaScript (JS) code","Every browser provides a JS engine that runs the JavaScript code",
"This engine was a rudimentary interpreter with no optimizations","Running the JavaScript code with this engine was slow but it worked","avaScript (JS) is a lightweight","its also used in other environments as well","JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive"
];
var random=a[Math.floor(Math.random()*a.length)];
document.write(random);

 