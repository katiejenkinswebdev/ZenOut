'use strict';

//create destination
const context = new AudioContext();

//create oscillator
const oscillator = context.createOscillator();

// //create gain1 node and plug into sound source
// var gain1 = context.createGain();

// //connect oscillator to gain1 node
// oscillator.connect(gain1);
//
// //connect gain to destination
// gain1.connect(context.destination);
//
// //set oscillator starting frequency
// oscillator.frequency.value = 440;
//
// //set type of sound wave for oscillator
// oscillator.type = 'sine';
//
// //start oscillator
// oscillator.start();

var oscillator2 = context.createOscillator();
var gain2 = context.createGain();
oscillator2.connect(gain2);
gain2.connect(context.destination);
oscillator2.frequency.value = 200;
oscillator2.type = 'sine';
oscillator2.start();
gain2.volume.value = 1;
// gain2.volume.value = 0;

//start oscillator, control volume
// gain.volume.value = 1;
// gain.volume.value = 0;

//create master gain node = name it specifically var masterGainNode
//create another oscillator = name that specifically oscLeft/oscRight = give each their own gain...gainLeft/gainRight. gain and osc will always be paired together. set up pan node (look up...prolly between 0 and 100) and connect between osc and gain...so osc pan gain
