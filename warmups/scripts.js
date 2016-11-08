var ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, function(data) {
 var source = ac.createBufferSource();
 source.buffer = data;
 var splitter = ac.createChannelSplitter(2);
 source.connect(splitter);
 var merger = ac.createChannelMerger(2);

 // Reduce the volume of the left channel only
 var gainNode = ac.createGain();
 gainNode.gain.value = 0.5;
 splitter.connect(gainNode, 0);

 // Connect the splitter back to the second input of the merger: we
 // effectively swap the channels, here, reversing the stereo image.
 gainNode.connect(merger, 0, 1);
 splitter.connect(merger, 1, 0);

 var dest = ac.createMediaStreamDestination();

 // Because we have used a ChannelMergerNode, we now have a stereo
 // MediaStream we can use to pipe the Web Audio graph to WebRTC,
 // MediaRecorder, etc.
 merger.connect(dest);
});
