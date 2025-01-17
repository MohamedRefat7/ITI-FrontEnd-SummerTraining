var i = 1;

while(i <=6 ) 
{
    document.write("<H" + i + "/>HAMADA " + i + "</H" + i + ">");
    i++;
}
function myFunction() {
    alert("WELCOME TO MY PAGE!");
    let person = prompt("Please enter your name", "HAMADA");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }
  function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
 