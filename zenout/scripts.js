'use strict';

//create destination
const context = new AudioContext();

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
// gainLeft.connect(context.destination);
//
// //set oscillator starting frequency
// oscillatorLeft.frequency.value = 240;
//
// //set type of sound wave for oscillator
// oscillatorLeft.type = 'sine';
//
// //start oscillator
// oscillatorLeft.start();
//
// //Left volume control
// // gainLeft.volume.value = 1;
// gainLeft.volume.value = 0;

//create oscillatorRight and gainRight
var oscillatorRight = context.createOscillator();
var gainRight = context.createGain();

oscillatorRight.connect(gainRight);
gainRight.connect(context.destination);
oscillatorRight.frequency.value = 200;
oscillatorRight.type = 'sine';
oscillatorRight.start();
gainRight.volume.value = 0;
// gainRight.volume.value = 0;



//create master gain node = name it specifically var masterGainNode
//create another oscillator = name that specifically oscLeft/oscRight = give each their own gain...gainLeft/gainRight. gain and osc will always be paired together. set up pan node (look up...prolly between 0 and 100) and connect between osc and gain...so osc pan gain
