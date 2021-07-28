// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hi_hat = new Audio('sounds/hi-hat.mp3');
const kick_drum = new Audio('sounds/kick-drum.mp3');
const snare_drum = new Audio('sounds/snare-drum.mp3');
// This function is called every 600ms
var current_metronome_count = 0;

function update() {
    let max_current_metronome_count = parseInt(document.getElementById('metrome-counts').value) || 0;

    current_metronome_count++;
    document.querySelectorAll("p")[0].innerHTML = (current_metronome_count);
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log('markedCheckbox ' + markedCheckbox.length)
    var metronomeCount = (current_metronome_count % max_current_metronome_count);
    for (var checkbox of markedCheckbox) {
        const kick_drum_timing1 = document.getElementById('kick-drum-timing1').value || 0;
        const kick_drum_timing2 = document.getElementById('kick-drum-timing2').value || 0;

        // If the timing input count equals the metronome count...
        console.log(kick_drum_timing1 + " == " + kick_drum_timing2 + " " + metronomeCount)
        if (kick_drum_timing1 == metronomeCount || kick_drum_timing2 == metronomeCount || (kick_drum_timing2 == 0 && kick_drum_timing1 == 0)) {
            console.log("checkbox " + checkbox.value)

            if (checkbox.value == 'metronome') {
                if (metronomeCount == 0) {
                    // Play the 'tock' sound

                    tock.play();
                } else {
                    // Play the 'tick' sound
                    tick.play();
                }
            }


            if (checkbox.value == 'kick-drum') {
                if (metronomeCount == 0) {
                    // Play the 'tock' sound

                    tock.play();
                } else {
                    // Play the 'kick_drum' sound
                    kick_drum.play();
                }
            }
            if (checkbox.value == 'snare-drum') {
                console.log("metronomeCount " + metronomeCount)
                if (metronomeCount == 0) {
                    // Play the 'tock' sound

                    tock.play();
                } else {
                    // Play the 'snare_drum' sound
                    snare_drum.play();
                }
            }
            if (checkbox.value == 'hi-hat') {
                if (metronomeCount == 0) {
                    // Play the 'tock' sound

                    tock.play();
                } else {
                    // Play the 'hi_hat' sound
                    hi_hat.play();
                }
            }
        }



    }

    if (metronomeCount == 0) {
        current_metronome_count = 0;
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);