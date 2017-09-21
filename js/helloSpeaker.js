(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  
  speak(name) = function () {
    console.log(speakWord + "    " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
