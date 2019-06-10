let originalCards = [{
        Name: 'Ace of Hearts',
        value: 1,
        src: 'AH'
    },
    {
        Name: 'Ace of Dimonds',
        value: 1,
        src: 'AD'
    },
    {
        Name: 'Ace of Clubs',
        value: 1,
        src: 'AC'
    },
    {
        Name: 'Ace of Spades',
        value: 1,
        src: 'AS'
    },
    {
        Name: 'Two of Hearts',
        value: 2,
        src: '2H'
    },
    {
        Name: 'Two of Dimonds',
        value: 2,
        src: '2D'
    },
    {
        Name: 'Two of Clubs',
        value: 2,
        src: '2C'
    },
    {
        Name: 'Two of Spades',
        value: 2,
        src: '2S'
    },
    {
        Name: 'Three of Hearts',
        value: 3,
        src: '3H'
    },
    {
        Name: 'Three of Dimonds',
        value: 3,
        src: '3D'
    },
    {
        Name: 'Three of Clubs',
        value: 3,
        src: '3C'
    },
    {
        Name: 'Three of Spades',
        value: 3,
        src: '2S'
    },
    {
        Name: 'Four of Hearts',
        value: 4,
        src: '4H'
    },
    {
        Name: 'Four of Dimonds',
        value: 4,
        src: '4D'
    },
    {
        Name: 'Four of Clubs',
        value: 4,
        src: '4C'
    },
    {
        Name: 'Four of Spades',
        value: 4,
        src: '4S'
    },
    {
        Name: 'Five of Hearts',
        value: 5,
        src: '5H'
    },
    {
        Name: 'Five of Dimonds',
        value: 5,
        src: '5D'
    },
    {
        Name: 'Five of Clubs',
        value: 5,
        src: '5C'
    },
    {
        Name: 'Five of Spades',
        value: 5,
        src: '5S'
    },
    {
        Name: 'Six of Hearts',
        value: 6,
        src: '6H'
    },
    {
        Name: 'Six of Dimonds',
        value: 6,
        src: '6D'
    },
    {
        Name: 'Six of Clubs',
        value: 6,
        src: '6C'
    },
    {
        Name: 'Six of Spades',
        value: 6,
        src: '6S'
    },
    {
        Name: 'Seven  of Hearts',
        value: 7,
        src: '7H'
    },
    {
        Name: 'Seven  of Dimonds',
        value: 7,
        src: '7D'
    },
    {
        Name: 'Seven  of Clubs',
        value: 7,
        src: '7C'
    },
    {
        Name: 'Seven  of Spades',
        value: 7,
        src: '7S'
    },
    {
        Name: 'Eight of Hearts',
        value: 8,
        src: '8H'
    },
    {
        Name: 'Eight of Dimonds',
        value: 8,
        src: '8D'
    },
    {
        Name: 'Eight of Clubs',
        value: 8,
        src: '8C'
    },
    {
        Name: 'Eight of Spades',
        value: 8,
        src: '8S'
    },
    {
        Name: 'Nine of Hearts',
        value: 9,
        src: '9H'
    },
    {
        Name: 'Nine of Dimonds',
        value: 9,
        src: '9D'
    },
    {
        Name: 'Nine of Clubs',
        value: 9,
        src: '9C'
    },
    {
        Name: 'Nine of Spades',
        value: 9,
        src: '9S'
    },
    {
        Name: 'Ten of Hearts',
        value: 10,
        src: '10H'
    },
    {
        Name: 'Ten of Dimonds',
        value: 10,
        src: '10D'
    },
    {
        Name: 'Ten of Clubs',
        value: 10,
        src: '10C'
    },
    {
        Name: 'Ten of Spades',
        value: 10,
        src: '10S'
    },
    {
        Name: 'Jack of Hearts',
        value: 11,
        src: 'JH'
    },
    {
        Name: 'Jack of Dimonds',
        value: 11,
        src: 'JD'
    },
    {
        Name: 'Jack of Clubs',
        value: 11,
        src: 'JC'
    },
    {
        Name: 'Jack of Spades',
        value: 11,
        src: 'JS'
    },
    {
        Name: 'Queen of Hearts',
        value: 12,
        src: 'QH'
    },
    {
        Name: 'Queen of Dimonds',
        value: 12,
        src: 'QD'
    },
    {
        Name: 'Queen of Clubs',
        value: 12,
        src: 'QC'
    },
    {
        Name: 'Queen of Spades',
        value: 12,
        src: 'QS'
    },
    {
        Name: 'King of Hearts',
        value: 13,
        src: 'KH'
    },
    {
        Name: 'King of Dimonds',
        value: 13,
        src: 'KD'
    },
    {
        Name: 'King of Clubs',
        value: 13,
        src: 'KC'
    },
    {
        Name: 'King of Spades',
        value: 13,
        src: 'KS'
    },

]

let newArrayCards = [];
let currentCard;
let nextCard;
let number = 6

document.getElementById('num').innerHTML = number
function checkUserChoice(userChoice) {
   

    let leftContainer = document.getElementById('left-image');
    let rightContainer = document.getElementById('right-image');
    let currentCardIndex = originalCards.indexOf(currentCard);
    let deletedElement = originalCards.splice(currentCardIndex, 1)[0];
    newArrayCards.push(deletedElement);
    // console.log(originalCards);
    // console.log(newArrayCards);

    nextCard = shuffle(originalCards.length);
    document.getElementById('startGame').disabled = true;
    if (originalCards.length === 46) {
        appendLi('Game Ended u WON!')
        leftContainer.src = `PNG/${currentCard.src}.png`;
        rightContainer.src = `PNG/${nextCard.src}.png`;
        currentCard = nextCard;
        document.getElementById('result').innerHTML = 'Congrats you WIN'
        // console.log('winner')
        disableButtons();
        return;
    }

    if (userChoice === 'high') {
        if (nextCard.value > currentCard.value) {
            leftContainer.src = `PNG/${currentCard.src}.png`;
            rightContainer.src = `PNG/${nextCard.src}.png`;
            currentCard = nextCard;
            document.getElementById('result').innerHTML = 'Well done keep going'
            number--;
            document.getElementById('num').innerHTML = number

            // let currentCardIndex = originalCards.indexOf(currentCard);
            // let deletedElement = originalCards.splice(currentCardIndex, 1)[0];
            // newArrayCards.push(deletedElement);


            //newArrayCards.pushiginalC(orards.splice(originalCards.indexOf(currentCard), 1)[0]);
        } else {
            leftContainer.src = `PNG/${currentCard.src}.png`;
            rightContainer.src = `PNG/${nextCard.src}.png`;
            currentCard = nextCard;
            number--;
            document.getElementById('result').innerHTML = 'Oops you lost the game'
            appendLi('Game Over');
            disableButtons();

        }
    } else if (userChoice === 'low') {
        if (nextCard.value < currentCard.value) {
            leftContainer.src = `PNG/${currentCard.src}.png`;
            rightContainer.src = `PNG/${nextCard.src}.png`;
            currentCard = nextCard;
            document.getElementById('result').innerHTML = 'Well done keep going';
            number--;
            document.getElementById('num').innerHTML = number
            // let currentCardIndex = originalCards.indexOf(currentCard);
            // let deletedElement = originalCards.splice(currentCardIndex, 1)[0];
            // newArrayCards.push(deletedElement);
        } else {
            leftContainer.src = `PNG/${currentCard.src}.png`;
            rightContainer.src = `PNG/${nextCard.src}.png`;
            currentCard = nextCard;
            number--;
            document.getElementById('result').innerHTML = 'Oops you lost the game'
            appendLi('Game Over');
            disableButtons();
        }
    }


}
function shuffle(max) {
    let temp = originalCards[Math.floor(Math.random() * max)];
    return temp;
}


function disableButtons() {
    document.getElementById('high').disabled = true;
    document.getElementById('low').disabled = true;
}


function startGameFunc() {
    currentCard = shuffle(originalCards.length);
    console.log('Current', currentCard)
    document.getElementById('right-image').src = `PNG/${currentCard.src}.png`;

}

function restartGame() {
    location.reload(true);
}

function appendLi(result) {
    let answerLi = document.createElement('li');
    answerLi.innerText = result;
    document.getElementById('answer').append(answerLi);
}