/*              
After shuffling and cutting the deck, the dealer places one card face-down in front of the player,
 then another card face-up. The rest of the deck, he sets aside while the player guesses the value.*/


// console.log(cards)

let originalCards = ['/PNG/AC.png', '/PNG/2C.png', '/PNG/3C.png', '/PNG/4C.png', '/PNG/5C.jpg', 
                     '/PNG/6C.png', '/PNG/7C.png', '/PNG/8C.png', '/PNG/9C.png', '/PNG/10C.png', 
                     '/PNG/JC.png', '/PNG/QC.png', '/PNG/KC.png'];
let originalCardsValue =[1,2,3,4,5,6,7,8,9,10,11,12,13];
let lastCard = [];
let lastValue = [];


function shuffle(originalCardsValue) {
    return originalCardsValue[getRandomNum(originalCardsValue.length)];
    //let randomNum = getRandomNum(originalCards.length);
    // let randomNum = Math.floor(Math.random() + originalCards.length)
    // let randomCard = originalCards[randomNum];
    // return randomCard;

}

function checkUserChoice(userChoice) {
    if (originalCards.length === 1) {
        appendLi('Game Ended u WON!')
        return;
    }
    
    
    let currentCard = Number(document.getElementById('result').innerText);
    //originalCards.splice(originalCards.indexOf(currentCard),1); 
    cardIndex = originalCardsValue.indexOf(currentCard);
    removeCard = originalCards.splice(cardIndex, 1);
    removeValue = originalCardsValue.splice(cardIndex, 1);
    //lastCard.push(currentCard);
    lastCard.push(removeCard) = lastCard.concat(currentCard);
    lastValue = lastValue.concat(currentCard);
    console.log('lastCard' + lastCard);
    console.log('lastValue' + lastValue);


    document.getElementById('currentCard').innerText = "Current Card--- " + currentCard;
    //let indexOfCurrentCard = originalCards.indexOf(currentCard);
    // console.log('origin ' + originalCards)
    // console.log('current ' + currentCard)

    if (userChoice === 'high') {
        let nextCard = shuffle(originalCardsValue);

        document.getElementById('nextCard').innerText = "Next Card--- " + nextCard;
        //console.log('high ' + nextCard)
        if (nextCard > currentCard) {
            document.getElementById('result').innerText = nextCard;
            document.getElementById('orImgArray').src = 
            //originalCards.splice(originalCards.indexOf(currentCard),1);       
            appendLi('It is high keep going');
            // console.log(originalCards)
            // }else if(nextCard === currentCard){
            //     appendLi('EQ Wrong')
            //     //originalCards = [1,2,3,4,5];
            //     console.log(originalCards)
        } else {
            appendLi('Wrong')
            // console.log(originalCards)
            //originalCards = [1,2,3,4,5];
            
        }
    } else if (userChoice === 'low') {
        let nextCard = shuffle(originalCardsValue);
        document.getElementById('nextCard').innerText = "Next Card--- " + nextCard;
        // console.log('low ' + nextCard) 
        if (nextCard < currentCard) {
            document.getElementById('result').innerText = nextCard;
            //originalCards.splice(originalCards.indexOf(currentCard),1)           
            appendLi('It is low keep going');
            // console.log(originalCards)
            // }else if(nextCard === currentCard){
            //     appendLi('EQ Wrong')
            //     //originalCards = [1,2,3,4,5]; 
        } else {
            appendLi('Wrong')
            // console.log(originalCards)
            //originalCards = [1,2,3,4,5]; 
                  
        }
    }else{

    }

}


//function for adding new list in HTML
function appendLi(result) {
    let answerLi = document.createElement('li');
    answerLi.innerText = result;
    document.getElementById('answer').append(answerLi);
}



//function for random number
function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}


//function for starting new game
function startGameFunc() {
    document.getElementById('currentCard').innerText = ""
    document.getElementById('nextCard').innerText = ""
    let currentCard = shuffle(originalCardsValue);
    document.getElementById('result').innerText = currentCard;

}
//Restart function
function restartGame() {
    location.reload(true)
}