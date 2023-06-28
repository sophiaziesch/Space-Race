const audioButtons = document.querySelectorAll(".audio-buttons");
const audioElement = new Audio("../audio/space-dance.wav");
audioElement.loop = true;
audioElement.volume = 0.1;
let isPlaying = false;

audioButtons.forEach((audioButton) => {
	audioButton.addEventListener("click", function () {
		if (isPlaying) {
			audioElement.pause();
			audioButton.innerText = "Sound On";
			audioButton.style.background = "#66ffd1";
			isPlaying = false;
		} else {
			audioButton.innerText = "Sound Off";
			audioButton.style.background = "#a276ff";
			audioElement.play();
			isPlaying = true;
		}
	});
});
