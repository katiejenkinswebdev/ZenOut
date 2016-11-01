'use strict';

//document ready block
$( document ).ready(function() {

//API functionality
var quoteScreen = $("#quoteText");
var $xhr =  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?');

$xhr.done(function(data) {
    if ($xhr.status === 200) {
      $(quoteScreen).text($xhr.responseJSON.quoteText + " " + $xhr.responseJSON.quoteAuthor);
    }

});

$xhr.fail(function(err) {
    console.log(err);
});


//-------Binaural Beats Application---------//
//allow to work on multiple browsers
window.AudioContext = window.AudioContext || window.webkitAudioContext;

//create destination
const context = new AudioContext();

//create Master Volume gain node and connect to destination

var masterVolume = context.createGain();
masterVolume.gain.value = 1;
masterVolume.connect(context.destination);

//--- LEFT SIDE --//
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

//create createChannelMerger
var merger = context.createChannelMerger(2);

//connect ChannelMerger to masterVolume
merger.connect(masterVolume);

//connect panLeft to merger
panLeft.connect(merger, 0, 0);

//set oscillator starting frequency
oscillatorLeft.frequency.value = 100;

//set type of sound wave for oscillator
oscillatorLeft.type = 'sine';

//oscillator control
oscillatorLeft.start();
// oscillator.stop();

//--- RIGHT SIDE ---//
//create oscillatorRight and gainRight
var oscillatorRight = context.createOscillator();
var gainRight = context.createGain();
var panRight = context.createStereoPanner();
panRight.pan.value = 1;

//right connections
oscillatorRight.connect(gainRight);
gainRight.connect(panRight);
panRight.connect(merger, 0, 1);

//right oscillator attributes
oscillatorRight.frequency.value = 125;
oscillatorRight.type = 'sine';
oscillatorRight.start();
// oscillatorRight.stop();


//---SLIDERS---//
$(function(){

	var currentBaseFreq = $('#base-freq-value');

	$("#base-freq").change(function(){
	    currentBaseFreq.html(this.value);
	});

	// Trigger the event on load, so
	// the value field is populated:

	$('#defaultSlider').change();

});


});//document.ready end tag

//to do's
//controls to turn bbeats on
//control to turn bbeats off
//javascript takes base frequency in L ear
//javascript calculates frequency minus binaural frequency = var newFrequency
//javascript takes newFrequency and pumps into R ear


//user inputs base frequency
//user inputs binaural frequency
//user inputs binaural frequency volume

//upload wav files
//connect 4 wavenodes into merger node
//user selects wav file - bbeats is overlayed with wav file
