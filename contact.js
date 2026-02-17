function display()
{
var name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let cardnumber=document.getElementById('cardno').value;

document.getElementById('n1').innerHTML="";
document.getElementById('n2').innerHTML="";
document.getElementById('n4').innerHTML="";

let isValid=true;
if(name=="")
{
    document.getElementById('n1').innerHTML="Enter valid Name";
    isValid = false;
}
if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('n2').innerHTML = "Enter valid Email";
    isValid = false;
  }

  if (cardnumber === "" || isNaN(cardnumber)) {
    document.getElementById('n4').innerHTML = "Enter valid Card Number";
    isValid = false;
  }

  return isValid; 
}
