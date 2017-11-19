'use strict';

// Create an instance
var wavesurfer;

document.addEventListener('DOMContentLoaded', function() {
    // Init
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet'
    });

    wavesurfer.load('http://berize-test.jvmhost.net/common/utils/fullFile/get/14');

    wavesurfer.on('ready', function () {
        // Enable creating regions by dragging
        wavesurfer.enableDragSelection({});

    });
});