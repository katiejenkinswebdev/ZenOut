'use strict';

//first sine wave creation

//create destination
const context = new AudioContext();
// context.destination;

//create oscillator
const oscillator = context.createOscillator();

//create gain node and plug into sound source
const gain = context.createGain();

//connect oscillator to gain node
oscillator.connect(gain);

//connect gain to destination
gain.connect(context.destination);

//set oscillator starting frequency
oscillator.frequency.value = 440;

//set type of sound wave for oscillator
oscillator.type = 'sine';


//start oscillator
oscillator.start();

//stop oscillator
// oscillator.stop(0);

//disconnect oscillator
// oscillator.disconnect(0);

//start oscillator, control volume
gain.volume.value = 1;
// gain.volume.value = 0;
