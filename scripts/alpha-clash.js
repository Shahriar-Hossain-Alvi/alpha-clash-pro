// f-8
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    //get expected keyPress
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //checked matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('correct! you\'ve got a point');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('missed! lost a life');
    }
}

// f-7 capture keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


// f-5
function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBgColorById(alphabet);
}

// f-3
function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}