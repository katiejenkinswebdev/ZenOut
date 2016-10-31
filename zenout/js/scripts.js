'use strict';

//document ready block
$( document ).ready(function() {

//API functionality
var quote = $("#quote");
var xhr = $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?');

xhr.done(function(data) {
    if (xhr.status !== 200) {
        return;
    }
    var results = xhr.responseJSON.quoteText + xhr.responseJSON.quoteAuthor;

    console.log(quote);
});

xhr.fail(function(err) {
    console.log(err);
});

});//document ready
//
//
// //binaural beats application
// //allow to work on multiple browsers
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
//
// //create destination
// const context = new AudioContext();
//
// //create Master Volume gain node and connect to destination
//
// //KT research - global effects compressor
// var masterVolume = context.createGain();
// masterVolume.gain.value = 1;
// masterVolume.connect(context.destination);
// // masterVolume.volume.value = 1;
//
// //create oscillatorLeft (sound)
// var oscillatorLeft = context.createOscillator();
//
// //create gainLeft (volume) node
// var gainLeft = context.createGain();
//
// //connect oscillator to gain node
// oscillatorLeft.connect(gainLeft);
//
// //connect gain to destination
// gainLeft.connect(masterVolume);
//
// //set oscillator starting frequency
// oscillatorLeft.frequency.value = 100;
//
// //set type of sound wave for oscillator
// oscillatorLeft.type = 'sine';
//
// //start oscillator
// // oscillatorLeft.start();
//
// // Left volume control
// gainLeft.volume.value = 1;
// // gainLeft.volume.value = 0;
//
// //create oscillatorRight and gainRight
// var oscillatorRight = context.createOscillator();
// var gainRight = context.createGain();
//
// oscillatorRight.connect(gainRight);
// gainRight.connect(masterVolume);
//
// oscillatorRight.frequency.value = 400;
// oscillatorRight.type = 'sine';
// oscillatorRight.start();
// gainRight.volume.value = 1;
// // gainRight.volume.value = 0;
//
//
//
// //create master gain node = name it specifically var masterGainNode
// //create another oscillator = name that specifically oscLeft/oscRight = give each their own gain...gainLeft/gainRight. gain and osc will always be paired together. set up pan node (look up...prolly between 0 and 100) and connect between osc and gain...so osc pan gain
