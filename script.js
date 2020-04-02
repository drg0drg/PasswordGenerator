// PseudoCoding

// Create ASCII-based sets of characters for each of the <lowerCase>, <UpperCase>, <Numbers> and <Symbols> 

// Each set of characters is stored in a variable.

// Create a function that builds an ASCII Array (genArray)

// Create a function to generate the password  (passGen)

        // The function takes in user input - what type of char should be added and the number of password characters
        // The function should randomly shuffle through the character and add them to the final password

// The genPass function should be called in an event listener (when the gen password button is pressed)

// Display the password in the text area

// The password is copied when the copy button is pressed by using an event listener

// A message that the password has been copied to clipboard shoud be used




const charAmountUser = document.getElementById("character-amount")

const includeUpperCaseEl = document.getElementById("include-uppercase")

const includeSymbolEl = document.getElementById ("include-symbols")

const includeNumbersEl = document.getElementById ("include-numbers")

const passwordDisplay = document.getElementById("password-display")

const main = document.getElementById("main-container")

const form = document.getElementById("pass-gen-form")

const btnCopy = document.getElementById("copy-pass")





// having the ASCII characters arrays stored into variables, oane for each Lower/Upper case, numbers and symbols. The symbols use a concat to assemble all the symbols on the keyboard
const LowCaseASCII = genArray(97, 122)
const UppCaseASCII = genArray(65, 90)
const NumASCII = genArray(48, 57)
const SymASCII = genArray(33, 47).concat(genArray(58, 64)).concat(genArray(91, 96)).concat(genArray(123, 126))







// the form adds in or not the required types of characters and calls the generating function 
// prevent the form to refresh the page when button is clicked <i.e. form submitted>
form.addEventListener ('submit', function (e) {
    e.preventDefault();
    // take the user value input and store it in charAmount
    const charAmount = charAmountUser.value
    const includeUpperCase = includeUpperCaseEl.checked
    const includeSymbols = includeSymbolEl.checked
    const includeNumbers = includeNumbersEl.checked
    const PASSWORD = genPass(charAmount, includeUpperCase, includeNumbers, includeSymbols)
    // After generating password, display it in the display box
    passwordDisplay.innerText = PASSWORD
})





// defining passGen function


function genPass(charAmount, includeUpperCase, includeNumbers, includeSymbols){
    let charCodes = LowCaseASCII
    if (includeUpperCase) charCodes = charCodes.concat(UppCaseASCII)
    if (includeSymbols) charCodes = charCodes.concat(SymASCII)
    if (includeNumbers) charCodes = charCodes.concat(NumASCII)
    const passwordChar =[]
    for (let i=0; i< charAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordChar.push(String.fromCharCode(characterCode))
    }
    return passwordChar.join('')
}



// defining copy button action

btnCopy.addEventListener("click", function(e){
    // event.stopPropagation();    
    const copyPass = document.querySelector("#password-display");
    console.log(copyPass)
    copyPass.select();
    console.log(copyPass)
    document.execCommand("copy");
    alert("Copied to clipboard");
    console.log(copyPass);
})






// creating the function that assembles the array of characters from ASCII

function genArray(low, high){
    const charArray =[]
    for (let i=low; i<= high; i++){
        charArray.push(i)
    }
    return charArray
}
  




// taking the input of how many characters the pass should contain and put the input in charAmount
function charAmountFunc(event){
    const val = event.target.value
    charAmount.value = val
    charAmount.addEventListener("input", charAmountFunc);
}





// defining the Copy Pass function
// function copyPass(){
//     document.getElementById("password-display").select();
//     document.execCommand("Copy");
//     alert("Password copied to clipboard");

// }























// ---------------------------------------
// Creating the Copy Button function in JS
// ---------------------------------------

// function createCopyButton(){
//     const btnCopy = document.createElement("button");
//     btnCopy.setAttribute("class", "copy-button");
//     btnCopy.textContent = "Copy Password";
//     form.appendChild(btnCopy);
// }






// defining Copy Pass function




