import NetworkTest from 'opentok-network-test-js';
import createChart from './chart.js';
import * as ConnectivityUI from './connectivity-ui.js';
import * as HardwareSetup from './opentok-hardware-setup'
import * as Recorder from './recorder'
import config from './config.js';

let sessionInfo = config;
let otNetworkTest;
let audioOnly;

const precallDiv = document.getElementById('precall');
precallDiv.querySelector('#precall button').addEventListener('click', function () {
  $(".results-container").removeClass('d-none').addClass('d-flex');
  $(".start-test-container").addClass('d-none').removeClass('d-flex');
  startTest();
})

function startTest() {
  audioOnly = precallDiv.querySelector('#precall input#audio').checked;
  var timeout = 5 * 1000;
  var options = {
    audioOnly: audioOnly,
    timeout: timeout
  };
  otNetworkTest = new NetworkTest(OT, sessionInfo, options);
  otNetworkTest.testConnectivity()
    .then(results => {
      ConnectivityUI.displayTestConnectivityResults(results);
      return results;
    })
    .then(testQuality);
}

function testQuality() {
  createChart('audio');
  createChart('video');
  ConnectivityUI.init(audioOnly);
  // document.getElementById('stop_test').addEventListener('click', function stopTestListener() {
  //   ConnectivityUI.hideStopButton();
  //   otNetworkTest.stop();
  // });
  otNetworkTest.testQuality(function updateCallback(stats) {
    ConnectivityUI.checkToDisplayStopButton();
    ConnectivityUI.graphIntermediateStats('audio', stats);
    ConnectivityUI.graphIntermediateStats('video', stats);
  }).then(results => {
    ConnectivityUI.displayResults();

    ConnectivityUI.displayTestQualityResults(null, results);
    var element = document.querySelector('#hardware-setup');

    var component = HardwareSetup.createOpentokHardwareSetupComponent(element, {
      insertMode: 'append'
    }, function(error) {
      if (error) {
        console.error('Error: ', error);
        document.querySelector('#hardware-setup').innerHTML = '<strong>Error getting ' +
          'devices</strong>: ' + error.message;
        return;
      }
    document.getElementById("action").addEventListener("click", function () {
      Recorder.handleAction();
      document.getElementById("action").innerHTML("Recording...");
    } )


    });

    }
  )
    .catch(error => {
      ConnectivityUI.displayResults();

      ConnectivityUI.displayTestQualityResults(error);
    });
}
