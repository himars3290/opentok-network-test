KUDO Network Test sample app
===============================

To run this app use the commands below:
`npm run build`

Once the app is built if you run index.html the app will open up

change `configSample.js` to `config.js` and add the required credentials

`opentok-hardware-setup.js` this file contains the camera and microphone detection

`connectivity-ui.js` checks the connection of your network and gives you information regarding 
* OpenTok API server
* OpenTok Messaging WebSocket
* OpenTok Media Server

`recorder.js` this file contains the recording of your voice from your selected microphone for 10 sec.

Once the test is completed, you will see the list of information from connectivity-ui along with the status. Then you are prompted to a hardware setup from where you can choose your camera and microphone settings.
The final step is recording, once you start recording, the app will record you for 10 seconds and then playback your recording.
