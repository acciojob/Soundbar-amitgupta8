//your JS code here. If required.
const buttons = document.getElementById("buttons").children;
const stopButton = document.getElementsByClassName("stop")[0];
const sounds = [];

// Push all sounds in the "sounds" array
for (let i = 1; i <= buttons.length - 1; i++) {
  sounds.push(new Audio(`sounds/sound${i}.mp3`));
}

// Add event listeners to the buttons
for (let i = 0; i < buttons.length - 1; i++) {
  buttons[i].addEventListener("click", () => {
    sounds[i].currentTime = 0;
    sounds[i].play();
  });
}

// Add event listener to the stop button
stopButton.addEventListener("click", () => {
  sounds.forEach(sound => sound.pause());
});

