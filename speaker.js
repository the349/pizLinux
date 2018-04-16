function speaker() {var msg = new SpeechSynthesisUtterance('Hello, my name is Speaker');
window.speechSynthesis.speak(msg);var msg = new SpeechSynthesisUtterance('And i am your new friend');
window.speechSynthesis.speak(msg);}