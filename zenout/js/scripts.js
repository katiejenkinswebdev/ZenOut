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
masterVolume.gain.value = 0;
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
document.getElementById("base-freq").value = "1";

$(function(){
	var currentBaseFreq = $('#base-freq-value');
	$("#base-freq").change(function(){
	    currentBaseFreq.html(this.value);
	});
  //triggers current value to display on load
	$("#base-freq").change();
});

//---Binaural Frequency Value---//
document.getElementById("binaural-freq").value = "1";

$(function(){
	var currentBinauralFreq = $('#binaural-freq-value');
	$("#binaural-freq").change(function(){
	    currentBinauralFreq.html(this.value);
	});
  //triggers current value to display on load
	$("#binaural-freq").change();
});

//---Binaural Beats (Master Volume) Value---//
document.getElementById("masterVolume").value = "0";

$(function(){
	var currentMasterVolume = $('#binaural-beats-value');
	$("#masterVolume").change(function(){
	    currentMasterVolume.html(this.value);
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

  // console.log(oscillatorLeft.frequency.value);

});

//---Binaural Frequency Slider ---//
var binauralFrequencySlider = document.getElementById("binaural-freq");

this.addEventListener("change", function(setBinauralValue) {

  // console.log(parseFloat(oscillatorRight.frequency.value));
  var newOscillatorRight = parseFloat(binauralFrequencySlider.value) + parseFloat(baseFrequencySlider.value);
  // console.log(newOscillatorRight);


  //  newOscillatorRight = oscillatorRight.value;
  oscillatorRight.frequency.value = newOscillatorRight;
  // console.log(oscillatorRight.frequency.value);

//--- Highlight Binaural Frequency--//
  var frequency = document.getElementById("binaural-freq").value;

  switch (true) {
    case (frequency <= 4):
      document.getElementById('delta').className += ' focus';
      document.getElementById('theta').className = 'icon-block';
      document.getElementById('alpha').className = 'icon-block';
      document.getElementById('beta').className = 'icon-block';
      document.getElementById('gamma').className = 'icon-block';
      break;
    case (frequency > 4 && frequency <= 8):
      document.getElementById('theta').className
      += ' focus';
      document.getElementById('delta').className = 'icon-block';
      document.getElementById('alpha').className = 'icon-block';
      document.getElementById('beta').className = 'icon-block';
      document.getElementById('gamma').className = 'icon-block';
      break;
    case (frequency > 8 && frequency <= 14):
      document.getElementById('alpha').className
      += ' focus';
      document.getElementById('delta').className = 'icon-block';
      document.getElementById('theta').className = 'icon-block';
      document.getElementById('beta').className = 'icon-block';
      document.getElementById('gamma').className = 'icon-block';
      break;
    case (frequency > 14 && frequency <= 40):
      document.getElementById('beta').className
      += ' focus';
      document.getElementById('alpha').className = 'icon-block';
      document.getElementById('theta').className = 'icon-block';
      document.getElementById('delta').className = 'icon-block';
      document.getElementById('gamma').className = 'icon-block';
      break;
    case (frequency > 40):
      document.getElementById('gamma').className
      += ' focus';
      document.getElementById('alpha').className = 'icon-block';
      document.getElementById('theta').className = 'icon-block';
      document.getElementById('beta').className = 'icon-block';
      document.getElementById('delta').className = 'icon-block';
      break;

    //   break;
    default:

  }
});






//--- Toggle Sounds ---//
//--- Rainforest --//
var rainforest = document.getElementById("rainforest");

player1.addEventListener("click", function(playRainforest) {
// function toggleSound() {
// var rainforest = document.getElementById('rainforest');
if (rainforest.paused) {
console.log("play");
  rainforest.play();
} else {
  rainforest.pause();
  console.log("pause");
  }
});

var ocean = document.getElementById("ocean");

player2.addEventListener("click", function(playOcean) {
// function toggleSound() {
// var rainforest = document.getElementById('rainforest');
if (ocean.paused) {
console.log("play");
  ocean.play();
} else {
  ocean.pause();
  console.log("pause");
  }
});

var thunderstorm = document.getElementById("thunderstorm");

player3.addEventListener("click", function(playThunderstorm) {

if (thunderstorm.paused) {
console.log("play");
  thunderstorm.play();
} else {
  thunderstorm.pause();
  console.log("pause");
  }
});


});//document.ready end tag
