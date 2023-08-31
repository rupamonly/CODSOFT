let Screen = document.getElementById('screen')

function takeInput(num) {
    Screen.value += num
}


// --------------------function to calculate-----------------------------

function Evaluate() {
    try {
        Screen.value = eval(Screen.value)
    }
    catch (err) {
        alert("Invalid")
    }
}

// -----------------------functions to clear all and one by one---------------------------

function Clear() {
    Screen.value = ""
}

function Del() {
    Screen.value = Screen.value.slice(0, -1)
}


// -------------function to play audio while clicked-------------------------

function playAudio(audioFileName) {
    var audio = document.getElementById('audio');
    audio.src = audioFileName;
    audio.play();
}