// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var num = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","=","+","?"]


function generatePassword(){
var userCharacterLenght = prompt("How long do you want your password to be between 8 and 28?")
var upper = confirm("Would you like to use upper case letters?")
var lower = confirm("Would you like to use lower case letters?")
var number = confirm("Would you like to use numbers?")
var spec = confirm("Would you like to use special characters?")
var userAnswer =[]
if (upper){
  userAnswer=userAnswer.concat(upperCase)
  console.log(userAnswer)

}
if (lower){
  userAnswer=userAnswer.concat(lowerCase)
  console.log(userAnswer)
  
}
if (number){
  userAnswer=userAnswer.concat(num)
  console.log(userAnswer)
  
}
if (spec){
  userAnswer=userAnswer.concat(special)
  console.log(userAnswer)
  
}
for (i=0;i < userCharacterLenght;i++){
  console.log ("")
 var randomnumb = Math.floor(Math.random()*userAnswer.length)
}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
