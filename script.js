// PseudoCoding

// Create ASCII based sets of characters for each of the <lowerCase>, <UpperCase>, <Numbers> and <Symbols> 

// Each set of characters is stored in a variable.

// The function that creates the password should concatenate the sets depending on the user input and randomly sweep through and pick a specific number of characters that builds the password.


const charAmountUser = document.getElementById("character-amount")

const includeUpperCaseEl = document.getElementById("include-uppercase")

const includeSymbolEl = document.getElementById ("include-symbols")

const includeNumbersEl = document.getElementById ("include-numbers")

const form = document.getElementById("pass-gen-form")



// taking the input of how many characters the pass should contain and put the input in charAmount
function charAmountFunc(event){
    const val = event.target.value
    charAmount.value = val
}

charAmount.addEventListener("input", charAmountFunc);






// creating the function that assembles the array of characters from ASCII

function genArray(low, high){
    const charArray =[]
    for (let i=low; i<= high; i++){
        charArray.push(i)
    }
    return charArray
}




// having the ASCII characters arrays stored into variables, oane for each Lower/Upper case, numbers and symbols. The symbols use a concat to assemble all the symbols on the keyboard
const LowCaseASCII = genArray(97, 122)
const UppCaseASCII = genArray(65, 90)
const NumASCII = genArray(48, 57)
const SymASCII = genArray(33, 47).concat(genArray(58, 64)).concat(genArray(91, 96)).concat(genArray(123, 126))


function genPass(charAmount, LowCaseASCII){
    const charCodes = LowCaseASCII
    const passowrdChar = []
    for (let i=0; i<charAmountUser; i++){
        const characterCode = charCodes[Math.floor(math.random()*charCodes.length)]
        passowrdChar.push(string.fromCharCode(characterCode))
    }
    return passowrdChar.join('')
}




