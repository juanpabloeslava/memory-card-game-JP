/*
ON 'master' BRANCH
*/
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
/*
 * Create a list that holds all of your cards
 */
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// FUNCTION: Initial setup for page load
function firstSetUp () {
	// Erase current cards inside deck
	deck.innerHTML = '';
	let shuffledCards = shuffle(allCards);
	/* 
	the total amount of items created should be the total number of items contained in shuffledCards (d.H shuffleCards.length).
	For each item, it should create a <li> item with a 
	*/
	// draw the empty cards within the container
	for (let listElement = 0; listElement < allCards.length; listElement++) {
		// for eavery iteration of the loop it'll add a list element to the empty deck
		deck.innerHTML += 
						'<li class="card">' + 
							'<i class=""></i>' +
						'</li>';
	}
	// store each newly created empty card into a variable
	let cardItems = document.querySelectorAll('.card');
	// give each empty card a class from the shuffled list
	for (let i = 0; i < allCards.length; i++) {
		cardItems[i].className = shuffledCards[i];
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


	console.log('now the deck looks like this:');
	console.log(deck);
}


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
