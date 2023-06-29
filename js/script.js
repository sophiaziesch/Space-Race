window.addEventListener("load", () => {
	const startButton = document.getElementById("start-button");
	const restartButtons = document.querySelectorAll(".restart-buttons");
	let game;

	function startGame() {
		game = new Game();
		game.start();
		document.addEventListener("keydown", (event) => {
			const key = event.key;
			const possibleKeystrokes = [
				"ArrowLeft",
				"ArrowUp",
				"ArrowRight",
				"ArrowDown",
			];
			if (possibleKeystrokes.includes(key)) {
				switch (key) {
					case "ArrowLeft":
						game.player.directionX = -4;
						break;
					case "ArrowUp":
						game.player.directionY = -4;
						break;
					case "ArrowRight":
						game.player.directionX = 4;
						break;
					case "ArrowDown":
						game.player.directionY = 4;
						break;
				}
			}
		});
		document.addEventListener("keyup", (event) => {
			const key = event.key;
			const possibleKeystrokes = [
				"ArrowLeft",
				"ArrowUp",
				"ArrowRight",
				"ArrowDown",
			];

			if (possibleKeystrokes.includes(key)) {
				switch (key) {
					case "ArrowLeft":
					case "ArrowRight":
						game.player.directionX = 0;
						break;
					case "ArrowUp":
					case "ArrowDown":
						game.player.directionY = 0;
						break;
				}
			}
		});
	}

	startButton.addEventListener("click", function () {
		startGame();
	});
	restartButtons.forEach((restartButton) => {
		restartButton.addEventListener("click", () => {
			location.reload();
		});
	});
});
