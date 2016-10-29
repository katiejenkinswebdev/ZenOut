'use strict'

//first sine wave creation

//create destination
const context = new AudioContext();
contex.destination;

//create oscillator
const oscillator = context.createOscillator();

//set oscillator starting frequency
oscillator.frequency.value = 220;

//set type of sound wave for oscillator
oscillator.type = 'sine';

//connect destination to oscillator
oscillator.connect(context.destination);

//start oscillator
oscillator.start(0);

//stop oscillator
oscillator.stop(0);

//disconnect oscillator
oscillator.disconnect(0);

//create gain node and plug into sound source
const gain = context.createGain();

//connect oscillator to gain node
oscillator.connect(gain);

//connect gain to destination
gain.connect(context.destination);

//start oscillator, control volume
gain.volume.value = 1:
gain.volume.value = 0;
