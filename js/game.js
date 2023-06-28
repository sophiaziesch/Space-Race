class Game {
	constructor() {
		this.startScreen = document.getElementById("game-intro");
		this.gameScreen = document.getElementById("game-screen");
		this.gameEndScreen = document.getElementById("game-end");
		this.gameContainer = document.getElementById("game-container");
		this.gameWonScreen = document.getElementById("game-won");
		this.height = 800;
		this.width = 600;
		this.player = new Player(this.gameScreen);
		this.obstacles = [];
		this.dogs = [];
		this.isGameOver = false;
		this.score = 0;
		this.lives = 5;
		this.level = 0;
		this.animateId;
		this.obstacleFrequency = 200;
		this.obstacleSpeed = 3;
	}

	start() {
		this.gameScreen.style.width = `${this.width}px`;
		this.gameScreen.style.height = `${this.height}px`;

		this.startScreen.style.display = "none";
		this.gameContainer.style.display = "block";
		this.gameScreen.style.display = "block";

		this.gameLoop();
	}

	gameLoop() {
		this.update();
		console.log(this.level);
		if (this.animateId % this.obstacleFrequency === 0) {
			this.obstacles.push(new Obstacle(this.gameScreen, this.obstacleSpeed));
		}
		if (this.animateId % 500 === 0) {
			this.dogs.push(new Dog(this.gameScreen, this.obstacleSpeed));
		}
		if (this.obstacleFrequency <= 0) {
			this.wonGame();
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
				this.score += 0;
				if (this.score > 0 && this.score % 5 === 0) {
					this.increaseLevel();
				}
			} else {
				obstaclesToKeep.push(obstacle);
			}
		});

		const dogsToKeep = [];
		this.dogs.forEach((dog) => {
			dog.move();
			if (this.player.didCollide(dog)) {
				dog.element.remove();
				this.score += 1;
			} else if (dog.top > this.gameScreen.offsetHeight) {
				this.lives -= 1;
				if (this.score > 0 && this.score % 5 === 0) {
					this.increaseLevel();
				}
			} else {
				dogsToKeep.push(dog);
			}
		});

		document.getElementById("score").innerText = this.score;
		document.getElementById("lives").innerText = this.lives;
		this.obstacles = obstaclesToKeep;
		this.dogs = dogsToKeep;

		if (this.lives <= 0) {
			this.isGameOver = true;
		}
	}

	increaseLevel() {
		this.level += 1;
		this.obstacleSpeed += 3;
		this.obstacleFrequency -= 20;

		this.obstacles.forEach((obstacle) => {
			obstacle.setSpeed(this.obstacleSpeed);
		});

		/* clearInterval(this.obstacleInterval);
		this.obstacleInterval = setInterval(() => {
			this.obstacles.push(new Obstacle(this.gameScreen));
		}, obstacleFrequency); */

		// Display the updated level
		document.getElementById("level").innerText = this.level;
	}

	endGame() {
		this.player.element.remove();
		this.obstacles.forEach((obstacle) => obstacle.element.remove());
		this.dogs.forEach((dog) => dog.element.remove());

		// Hide game screen
		this.gameContainer.style.display = "none";
		this.gameScreen.style.display = "none";
		// Show end game screen
		this.gameEndScreen.style.display = "block";
	}

	wonGame() {
		this.player.element.remove();
		this.obstacles.forEach((obstacle) => obstacle.element.remove());
		this.dogs.forEach((dog) => dog.element.remove());

		// Hide game screen
		this.gameContainer.style.display = "none";
		this.gameScreen.style.display = "none";
		// Show end game screen
		this.gameWonScreen.style.display = "block";
	}
}
