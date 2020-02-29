var recorder, gumStream;
export function toggleRecording() {
  console.log("yeha ayo");
  if (recorder && recorder.state == "recording") {
    recorder.stop();
    gumStream.getAudioTracks()[0].stop();
  } else {
    navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(function(stream) {
      gumStream = stream;
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = function(e) {
        var url = URL.createObjectURL(e.data);
        var preview = document.createElement('audio');
        preview.controls = true;
        preview.src = url;
        preview.classList.add("pb-3");
        document.querySelector("#recorder_container").appendChild(preview);
      };
      recorder.start();
    });
  }
}
