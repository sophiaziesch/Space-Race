class Game {
	constructor() {
		this.startScreen = document.getElementById("game-intro");
		this.gameScreen = document.getElementById("game-screen");
		this.gameContainer = document.getElementById("game-container");
		this.gameEndScreen = document.getElementById("game-end");
		this.height = 800;
		this.width = 600;

		this.obstacles = [];
		this.isGameOver = false;
		this.score = 0;
		this.lives = 3;
		this.animateId;
	}

	start() {
		this.gameScreen.style.width = `${this.width}px`;
		this.gameScreen.style.height = `${this.height}px`;

		this.startScreen.style.display = "none";
		this.gameContainer.style.display = "block";

		this.gameLoop();
	}

	gameLoop() {
		this.update();
		if (this.animateId % 200 === 0) {
			this.obstacles.push(new Obstacle(this.gameScreen));
		}
		if (this.isGameOver) {
			this.endGame();
		} else {
			this.animateId = requestAnimationFrame(() => this.gameLoop());
		}
	}

	update() {
		this.player.move();
		const obstaclesToKeep = [];
		this.obstacles.forEach((obstacle) => {
			obstacle.move();
			if (this.player.didCollide(obstacle)) {
				obstacle.element.remove();
				this.lives -= 1;
			} else if (obstacle.top > this.gameScreen.offsetHeight) {
				this.score += 1;
			} else {
				obstaclesToKeep.push(obstacle);
			}
		});
		this.obstacles = obstaclesToKeep;

		if (this.lives <= 0) {
			this.isGameOver = true;
		}
	}

	endGame() {
		this.player.element.remove();
		this.obstacles.forEach((obstacle) => obstacle.element.remove());

		this.gameContainer.style.display = "none";
		this.gameEndScreen.style.display = "block";
	}
}
