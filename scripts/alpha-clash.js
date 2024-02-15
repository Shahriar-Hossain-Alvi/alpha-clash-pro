// f-8
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop game if pressed escape
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get expected keyPress
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);


    //checked matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('correct! you\'ve got a point');

        //get current score
        //increase score by 1
        //show updated score
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
         

        //start a new round
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('missed! lost a life');
        
        //get current life
        //decrease life by 1
        //show updated life
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

        //after game over
        if(newLife === 0){
            gameOver();
        }
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
    //hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    //continue game
    continueGame();
}

//f-11
function gameOver(){
    hideElementById('playground');
    showElementById('final-score');

    //update final score
    //get the final score
    //set final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    //clear last selected highlighted alphabet
    const currentAlphabet =getElementTextById('current-alphabet');
    removeBgColorById(currentAlphabet);
}