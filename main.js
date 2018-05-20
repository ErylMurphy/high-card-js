var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];
var players = [];
var hands = [];


// `buildDeck`: Populates the`deck` array with 52 standard playing cards.
//     _NOTE_: each 'card' in the`deck` array should be an object with a value and
// suite property.

function buildDeck() {
values.forEach = (value) => {
suits.forEach = (suit) => {
    let card = [{suit: suit, value: value,}];
    deck.push(card);
}}};



// shuffleDeck: Randomizes the order of deck.


function shuffleDeck() {
    let i = 0;
    let j = 0;
    let shuffledDeck = null;

    for (i = deck.length - 1; i > 0; i --) {
        j = Math.floor(Math.random() * (i + 1))
        shuffledDeck = deck[i];
        deck[i] = deck[j];
        deck[j] = shuffledDeck;
}};


function getMorePlayers() {
let playerName;
    do {
        if (playerName) {
            players.push({ name: playerName });
        }
        playerName = prompt('Add a player and hit <enter>. Type "STOP" when finished');
    } while (playerName && playerName !== 'STOP');
};


// deal`: Assigns one card to each player.
function deal() {
    players.forEach = () => {
        players.card = deck.pop();
    }
};



function findHighestCard() {
    players.sort = () => {
        return players[0].card < players[1].card;
    };
};


function announceWinners() {
let message = '';
    players.forEach(() => {
        let message = `${players.playerName} came in ${i + 1} place with the ${players.card.value} of ${players.card.suit}!`
    });
    alert(message);
};


function playANewGame() {
    buildDeck();
    shuffleDeck();
    getMorePlayers();
    deal();
    findHighestCard();
    announceWinners();
};

playANewGame();
