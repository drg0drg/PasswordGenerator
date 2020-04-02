// PseudoCoding

// Create ASCII based sets of characters for each of the <lowerCase>, <UpperCase>, <Numbers> and <Symbols> 

// Each set of characters is stored in a variable.

// The function that creates the password should concatenate the sets depending on the user input and randomly sweep through and pick a specific number of characters that builds the password.



// taking the character-amount element from HTML and put into a const
const charAmountUser = document.getElementById("character-amount")

const includeUpperCaseEl = document.getElementById("include-uppercase")

const includeSymbolEl = document.getElementById ("include-symbols")

const includeNumbersEl = document.getElementById ("include-numbers")

const passwordDisplay = document.getElementById("password-display")

// taking the pass gen form from HTML and put into a const
const form = document.getElementById("pass-gen-form")

// having the ASCII characters arrays stored into variables, oane for each Lower/Upper case, numbers and symbols. The symbols use a concat to assemble all the symbols on the keyboard
const LowCaseASCII = genArray(97, 122)
const UppCaseASCII = genArray(65, 90)
const NumASCII = genArray(48, 57)
const SymASCII = genArray(33, 47).concat(genArray(58, 64)).concat(genArray(91, 96)).concat(genArray(123, 126))





// prevent the form to refresh the page when button is clicked <i.e. form submitted>
form.addEventListener ('submit', function (e) {
    e.preventDefault();
    // take the user value input and store it in charAmount
    const charAmount = charAmountUser.value
    const includeUpperCase = includeUpperCaseEl.checked
    const includeSymbols = includeSymbolEl.checked
    const includeNumbers = includeNumbersEl.checked
    const PASSWORD = genPass(charAmount, includeUpperCase, includeNumbers, includeSymbols)
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
}

charAmount.addEventListener("input", charAmountFunc);





