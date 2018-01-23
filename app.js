const express = require('express');
const app = express();
const path = require("path");

/** SETUP **/
const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/** VIEWS **/
// set the view engine to ejs ; use res.render to load up an ejs view file
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

/** ROUTES **/
// GET card in the deck by id
app.get('/deck/:id', (req, res, next) => {
	const foundCard = hannabi_full_deck[req.params.id]
	if (foundCard) {
		res.send(foundCard);
	} else {
		res.status(404).send("id not found");
	}
});

// POST player into the game
app.post('/players/', (req, res, next) => {
	const player = req.query;
	console.log("made it to POST /players/")
	console.log(req.query);
	console.log(req.params);
	console.log(req.body);
	// TODO: add the player into the players object
});

/** HELPER FUNCTIONS **/
function deckCard(id) { 
	return hannabi_full_deck[id]; 
}

/** DATA **/
const hannabi_full_deck = {
	//blue
	'1' : {color: 'blue', number: 1},
	'2' : {color: 'blue', number: 1},
	'3' : {color: 'blue', number: 1},
	'4' : {color: 'blue', number: 2},
	'5' : {color: 'blue', number: 2},
	'6' : {color: 'blue', number: 3},
	'7' : {color: 'blue', number: 3},
	'8' : {color: 'blue', number: 4},
	'9' : {color: 'blue', number: 4},
	'10': {color: 'blue', number: 5},
	//yellow
	'11' : {color: 'yellow', number: 1},
	'12' : {color: 'yellow', number: 1},
	'13' : {color: 'yellow', number: 1},
	'14' : {color: 'yellow', number: 2},
	'15' : {color: 'yellow', number: 2},
	'16' : {color: 'yellow', number: 3},
	'17' : {color: 'yellow', number: 3},
	'18' : {color: 'yellow', number: 4},
	'19' : {color: 'yellow', number: 4},
	'20' : {color: 'yellow', number: 5},
	//green
	'21' : {color: 'green', number: 1},
	'22' : {color: 'green', number: 1},
	'23' : {color: 'green', number: 1},
	'24' : {color: 'green', number: 2},
	'25' : {color: 'green', number: 2},
	'26' : {color: 'green', number: 3},
	'27' : {color: 'green', number: 3},
	'28' : {color: 'green', number: 4},
	'29' : {color: 'green', number: 4},
	'30' : {color: 'green', number: 5},
	//pink
	'31' : {color: 'pink', number: 1},
	'32' : {color: 'pink', number: 1},
	'33' : {color: 'pink', number: 1},
	'34' : {color: 'pink', number: 2},
	'35' : {color: 'pink', number: 2},
	'36' : {color: 'pink', number: 3},
	'37' : {color: 'pink', number: 3},
	'38' : {color: 'pink', number: 4},
	'39' : {color: 'pink', number: 4},
	'40' : {color: 'pink', number: 5},
	//white
	'41' : {color: 'white', number: 1},
	'42' : {color: 'white', number: 1},
	'43' : {color: 'white', number: 1},
	'44' : {color: 'white', number: 2},
	'45' : {color: 'white', number: 2},
	'46' : {color: 'white', number: 3},
	'47' : {color: 'white', number: 3},
	'48' : {color: 'white', number: 4},
	'49' : {color: 'white', number: 4},
	'50' : {color: 'white', number: 5}
};

var num_players; // e.g. 2
var players; // e.g. {'shilpa':{hand:[], history_of_clues:[]}}


/* data to store in the server: 
-- store all of the hannabi cards in a JSON (id: {color:e.g. blue, number:e.g. 4})
	-- store the cards that are in each player's hands (ordered 1-5)
	-- store the cards that are unplayed (in a pile)
	-- store the cards that are discarded
	-- store the cards that are played
	-- store the cards that are errors
-- store the information bits
-- store the explosions
*/

/* functions:
	drawCard(player) --> remove card from unplayed, add card to players hand
	discardCard(player) --> remove card from player's hand, add card to discard
	playCard(player) --> remove card from player's hand, if playable, add to played, else add to erros
*/