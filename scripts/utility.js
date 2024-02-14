// f-1
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// f-2
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// f-6
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}


// f-4
function getARandomAlphabet() {
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index from 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}