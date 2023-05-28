// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var Nouns = ["The Turkey","Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"]
var Verbs = ["sat on", "Ate", "danced With", "saw", "Doesn't Like", "Kissed"]
var Adjectives = ["A Funny", "A scary", "A Slimy", "A Goofy", "A Barking", "A Fat"]
var Animals = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"]
var Prepositions = ["on the Moon", "on the chair", "in my Spaghetti", "in my Soup", "on the Grass", "in my Shoes"]

var Noun = document.querySelector('.noun');
var Verb = document.querySelector('.verb');
var Adjective = document.querySelector('.adjective');
var Animal = document.querySelector('.animal');
var preposition = document.querySelector('.prep');
var story = document.querySelector(".rand") 

function getRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
	
  };
  
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
 Noun.onclick = function(){
	speakNow(getRandom(Nouns));
  };
  
  Verb.onclick = function(){
	speakNow(getRandom(Verbs));
  };
  
  Adjective.onclick = function(){
	speakNow(getRandom(Adjectives));
  };
  
  Animal.onclick = function(){
	speakNow(getRandom(Animals));
  };
  
  preposition.onclick = function(){
	speakNow(getRandom(Prepositions));
  };

  story.onclick = function () {
	speakNow(getRandom(Nouns) +getRandom(Verbs) +getRandom(Adjectives) +getRandom(Animals) +getRandom(Prepositions));
  };