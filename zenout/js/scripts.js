'use strict';

//document ready block
$( document ).ready(function() {

//API functionality
var quoteScreen = $("#quoteText");
console.log(quoteScreen);
var $xhr =  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?');

$xhr.done(function(data) {
    if ($xhr.status === 200) {
      console.log($(quoteScreen).text($xhr.responseJSON.quoteText + " " + $xhr.responseJSON.quoteAuthor));
    }

});

$xhr.fail(function(err) {
    console.log(err);
});




//binaural beats application
//allow to work on multiple browsers
window.AudioContext = window.AudioContext || window.webkitAudioContext;

//create destination
const context = new AudioContext();

//create Master Volume gain node and connect to destination

//KT research - global effects compressor
var masterVolume = context.createGain();
masterVolume.gain.value = 1;
masterVolume.connect(context.destination);

//create oscillatorLeft (sound)
var oscillatorLeft = context.createOscillator();

//create gainLeft (volume) node
var gainLeft = context.createGain();

//create panLeft (left ear only)
var panLeft = context.createStereoPanner();
panLeft.pan.value = -1;

// connect oscillator to gain node
oscillatorLeft.connect(gainLeft);

//connect gainLeft to panLeft
gainLeft.connect(panLeft);

//connect panLeft to masterVolume
panLeft.connect(masterVolume);

//set oscillator starting frequency
oscillatorLeft.frequency.value = 100;

//set type of sound wave for oscillator
oscillatorLeft.type = 'sine';

//start oscillator
// oscillatorLeft.start();


//create oscillatorRight and gainRight
var oscillatorRight = context.createOscillator();
var gainRight = context.createGain();
var panRight = context.createStereoPanner();
panRight.pan.value = 1;

oscillatorRight.connect(gainRight);
gainRight.connect(panRight);
panRight.connect(masterVolume);

oscillatorRight.frequency.value = 100;
oscillatorRight.type = 'sine';
oscillatorRight.start();
gainRight.volume.value = 1;
// gainRight.volume.value = 0;

});//document ready end tag

//connect pan nodes to R and L ear
//left frequency plays in L ear
//right frequency plays in R ear
//connect all nodes into merge node
//connect merge node into master volume node

//both frequency play at same time in respective ears
//introduce following variables: base frequency, binaural frequency, new frequency
//javascript takes base frequency in L ear
//javascript calculates frequency minus binaural frequency = var newFrequency
//javascript takes newFrequency and pumps into R ear


//user inputs base frequency
//user inputs binaural frequency
//user inputs binaural frequency volume

//user selects wav file - bbeats is overlayed with wav file
