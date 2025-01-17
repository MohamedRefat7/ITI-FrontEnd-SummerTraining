// function checkButton() {    
//     if(document.getElementById('male').checked) {   
//         document.getElementById("disp").innerHTML   
//             = document.getElementById("male").value   
//             + " gender is male";   
//     }   
//     else if(document.getElementById('female').checked) {   
//         document.getElementById("disp").innerHTML   
//             = document.getElementById("female").value   
//             + " gender is female";     
//     }   
//     else {   
//         document.getElementById("error").innerHTML   
//             = "You have not selected any season";   
//     }   
// }   
function validateform(){  
    var name=document.myform.name.value;      
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    } 
   
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }   
  
}