function getString() {
  //Clear the html
  document.getElementById("results").innerHTML = "";

  //Add "invisible" class to the results id to hide it before the start
  document.getElementById("results").classList.add("invisible");

  //Declare a variable palInput and store the input from the dom
  let palInput = document.getElementById("palindromeInput").value;

  //Call stringReverse with the parameter palInput and store it in a new variable called revInput
  let revInput = stringReverse(palInput);

  //Call palCheck and pass it the variables palInput and revInput and store it's result in a variable called newString
  let newString = palCheck(palInput, revInput);

  //Call palDisplay and pass it the variable newString so that we can display our result
  palDisplay(newString);
}

function stringReverse(palInput) {
  //Declare a new empty array called revString to store the reversed string
  let revString = [];

  //For-loop through the string to reverse it
  for (let i = palInput.length - 1; i >= 0; i--) {
    //Concatenate the indexes from the string palInput into revString, starting from the end of the string
    revString += palInput[i];
  }

  //Return revString
  return revString;
}

function palCheck(palInput, revInput) {
  //Store the data from the parameter palInput in a variable called palInutCheck
  //We also remove spaces and special characters using .replace
  let palInputCheck = palInput.replace(/[^a-zA-Z0-9]/g, "");

  //Store the data from the parameter revInput in a variable called revInputCheck
  //We also remove spaces and special characters using .replace
  let revInputCheck = revInput.replace(/[^a-zA-Z0-9]/g, "");

  //Use an if-statement to check if palInputCheck is equal to revInputCheck and force lower case for the check only
  if (palInputCheck.toLowerCase() == revInputCheck.toLowerCase()) {
    //If they are a match, concatenate the input to a string in a new variable called newString and return newString
    let newString = `Great! Your string is a palindrome! It was reversed as: ${revInputCheck}`;

    return newString;
  }
  //return palInputCheck
  else {
    //If they are not a match, concatenate the input to a different string in a new variable called newString and return newString
    let newString = `Oh no! Your string is not a palindrome. It was reversed as: ${revInputCheck}`;

    return newString;
  }
}

function palDisplay(readyString) {
  //Remove the "invisible" class from the results id
  document.getElementById("results").classList.remove("invisible");

  //Inject the result on the page
  document.getElementById("results").innerHTML = readyString;
}
