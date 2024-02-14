function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}