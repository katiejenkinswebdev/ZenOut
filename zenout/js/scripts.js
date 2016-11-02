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
oscillatorLeft.frequency.value = 200;

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
oscillatorRight.frequency.value = 100;
oscillatorRight.type = 'sine';
oscillatorRight.start();
// oscillatorRight.stop();

//---Slider Values---//
//---Base Frequency Value---//
$(function(){
	var currentBaseFreq = $('#base-freq-value');
	$("#base-freq").change(function(){
	    currentBaseFreq.html(this.value);
	});
  //triggers current value to display on load
	$("#base-freq").change();
});

//---Binaural Frequency Value---//
$(function(){
	var currentBaseFreq = $('#binaural-freq-value');
	$("#binaural-freq").change(function(){
	    currentBaseFreq.html(this.value);
	});
  //triggers current value to display on load
	$("#binaural-freq").change();
});

//---Binaural Beats (Master Volume) Value---//
$(function(){
	var currentBaseFreq = $('#binaural-beats-value');
	$("#masterVolume").change(function(){
	    currentBaseFreq.html(this.value);
	});
  //triggers current value to display on load
	$("#masterVolume").change();
});

//---Master Volume Slider---//
var masterVolumeSlider = document.getElementById("masterVolume");

this.addEventListener("change", function(setVolume) {

  masterVolume.gain.value = masterVolumeSlider.value/100;
  // console.log(masterVolume.gain.value);
});

//---Base Frequency Slider---//
var baseFrequencySlider = document.getElementById("base-freq");


this.addEventListener("change", function(setBaseValue) {
  // console.log(oscillatorLeft.frequency.value);
  // console.log(baseFrequencySlider.value);
  // console.log(oscillatorLeft.frequency.value = baseFrequencySlider.value/100);

  oscillatorLeft.frequency.value = baseFrequencySlider.value;

  console.log(oscillatorLeft.frequency.value);

});

//---Binaural Frequency Slider ---//
var binauralFrequencySlider = document.getElementById("binaural-freq");

this.addEventListener("change", function(setBinauralValue) {

  // console.log(parseFloat(oscillatorRight.frequency.value));
  var newOscillatorRight = parseFloat(binauralFrequencySlider.value) + parseFloat(baseFrequencySlider.value);
  // console.log(newOscillatorRight);


  //  newOscillatorRight = oscillatorRight.value;
  oscillatorRight.frequency.value = newOscillatorRight;
  console.log(oscillatorRight.frequency.value);



  //  + parseFloat(baseFrequencySlider.value) = oscillatorRight.frequency.value);

  // console.log(baseFrequencySlider.value);
  // var binauralFreq = parseFloat(oscillatorRight.frequency.value) + parseFloat ( baseFrequencySlider.value);
  // console.log(binauralFreq);
  // console.log(oscillatorRight.frequency.value);
  // console.log(binauralFrequencySlider.value);
  // console.log(oscillatorRight.frequency.value + baseFrequencySlider = binauralFrequencySlider.value);

  // oscillatorLeft.frequency.value = baseFrequencySlider.value;

  // console.log(oscillatorLeft.frequency.value);

});

});//document.ready end tag
