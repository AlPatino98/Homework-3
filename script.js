// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var num = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","=","+","?"]

//Created the function
function generatePassword(){

  //Initial prompt
var userCharacterLenght = prompt("How long do you want your password to be?(between 8 and 128)")

//restrict the range of characters the user can input
if (userCharacterLenght < 8 || userCharacterLenght >128) {
  alert("Out of Range!");

  generatePassword();
}


//options for User to confirm or deni
var upper = confirm("Would you like to use upper case letters?")
var lower = confirm("Would you like to use lower case letters?")
var number = confirm("Would you like to use numbers?")
var spec = confirm("Would you like to use special characters?")

//Empty arrays for user input and results
var userAnswer =[]
var result = []

//link User specs to generator
if (upper){
  userAnswer=userAnswer.concat(upperCase)
}

if (lower){
  userAnswer=userAnswer.concat(lowerCase)
}

if (number){
  userAnswer=userAnswer.concat(num)
}

if (spec){
  userAnswer=userAnswer.concat(special)  
}

//Created a Loop
for (i=0; i < userCharacterLenght; i++){
  console.log ("")

 //make random number from the users desired length
var randomnumber = Math.floor(Math.random()*userAnswer.length)
//
var randomCharacter = userAnswer [randomnumber]

 //show results on page
result.push(randomCharacter);
}
return result.join("")
 

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
