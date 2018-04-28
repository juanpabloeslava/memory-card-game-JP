/*
ON 'master' BRANCH
*/

// test
console.log('starting now');

/* global variables */
// var containing all classes
let allCards = [
	'fa fa-diamond', 'fa fa-diamond',
	'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
	'fa fa-anchor', 'fa fa-anchor',
	'fa fa-bolt', 'fa fa-bolt',
	'fa fa-cube', 'fa fa-cube',
	'fa fa-bomb', 'fa fa-bomb',
	'fa fa-leaf', 'fa fa-leaf',
	'fa fa-bicycle', 'fa fa-bicycle'
];
// from DOM
let deck = document.querySelector('.deck');
// my variables
console.log('this is how the normal deck looks:');
console.log(deck);

/* Event Listeners */
// flip cards
deck.addEventListener('click', flipCard);

// FUNCTION: Initial setup for page load
function shuffleDeck () {
	// Erase current cards inside deck
	deck.innerHTML = '';
	// shuffle the cards and store it in a new var
	let shuffledCards = shuffle(allCards);
	// re-draw the deck, this time with the shuffled cards inside
	for (let i = 0; i < allCards.length; i++) {
		// for eavery iteration of the loop it'll add a list element to the empty deck, and assign a new card from the shuffleCards var
		deck.innerHTML += 
						'<li class="card">' + 
							'<i class="' + shuffledCards[i] + '"></i>' +
						'</li>';
	}
	console.log(deck);
}


// FUNCTION: Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
 	// this does something
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    // this returns something too
    return array;
}


/* FUNCTION: click on the card and show it */
function flipCard (e) {
	// make the target of the click the end variable of the function
	let myClickTarget = e.target;
	// only run if the click is on a card element
	if ((myClickTarget.nodeName === 'LI') && (myClickTarget.classList.contains('card'))) {
		// toggle the desired classes on and off
		myClickTarget.classList.toggle('show');
		myClickTarget.classList.toggle('open');
		// test on the console
		console.log (myClickTarget);
	} else {
		console.log('the click was outside the card')
	}
}


/*
 * Create a list that holds all of your cards
 */
 /*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
