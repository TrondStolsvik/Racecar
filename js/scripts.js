function getString() {
  //Clear the html
  document.getElementById("results").innerHTML = "";

  //Add "invisible" class to the results id to hide it before the start
  document.getElementById("results").classList.add("invisible");

  //Declare a variable palInput and store the input from the dom
  let palInput = document.getElementById("palindromeInput").value;

  //Call stringReverse with the parameter palInput and store it in a new variable called revInput
  let revInput = stringReverse(palInput);

  //Call palCheck and pass it the variables palInput and revInput and store it in a variable called newString
  let newString = palCheck(palInput, revInput);

  palDisplay(newString);
}

function stringReverse(palInput) {
  //Declare a new variable called revString to store the reversed string
  let revString = [];

  //For-loop through the string to reverse it
  for (let i = palInput.length - 1; i >= 0; i--) {
    //Push the indexes from the string into a new variable called revString, starting from the end of the string
    revString += palInput[i];
  }

  //Return revString
  return revString;
}

function palCheck(palInput, revInput) {
  //Store the data from the parameter palInput in a variable called palInutCheck
  let palInputCheck = palInput;

  //Store the data from the parameter revInput in a variable called revInputCheck
  let revInputCheck = revInput;

  //Use an if-statement to check if palInputCheck is equal to revInputCheck (force lower case for check if needed)
  if (palInputCheck.toLowerCase() == revInputCheck.toLowerCase()) {
    //Concatenate the input to a string in a new variable and if they are a match return revInputCheck
    let newString = `Your string is a palindrome! It was reversed as: ${revInputCheck}`;

    return newString;
  }
  //return palInputCheck
  else {
    let newString = `Your string is not a palindrome. It was reversed as: ${revInputCheck}`;

    return newString;
  }
}

function palDisplay(readyString) {
  //Remove the "invisible" class from the results id
  document.getElementById("results").classList.remove("invisible");

  //Inject the result on the page
  document.getElementById("results").innerHTML = readyString;
}
