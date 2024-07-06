// let pauseb = document.getElementsByClassName("pause").style.backgroundColor;
        // let pausec = document.getElementsByClassName("pause").style.color;
        // let speakb = document.getElementsByClassName("speak").style.backgroundColor;
        // let speakc = document.getElementsByClassName("speak").style.color;
        // let stopb = document.getElementsByClassName("stop").style.backgroundColor;
        // let stopc = document.getElementsByClassName("stop").style.color;
        // let bg = "#0f0";
        // let cl = "#00f";
        let utterance;

        function speak() {
            var text = document.getElementById("input").value;
            console.log("Text to speak:", text);
            if (text.trim() === "") {
                console.log("No text provided.");
                return;
            }
            utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
            // speakb = bg;
            // speakc = cl;
            console.log("Speech synthesis initiated.");
        }

        function pauseSpeech() {
            if (speechSynthesis.speaking && !speechSynthesis.paused) {
                speechSynthesis.pause();
                // pauseb = bg;
                // pausec = cl;
                console.log("Speech paused.");
            } else if (speechSynthesis.paused) {
                speechSynthesis.resume();
                console.log("Speech resumed.");
            }
        }

        function stopSpeech() {
            speechSynthesis.cancel();
            // stopb = bg;
            // stopc = cl;
            console.log("Speech stopped.");
        }

        function adjustTextareaHeight(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
