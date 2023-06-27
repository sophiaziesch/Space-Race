class Obstacle {
	constructor(gameScreen, speed) {
		this.gameScreen = gameScreen;
		this.left = Math.floor(Math.random() * 300 + 70);
		this.top = -150;
		this.width = 80;
		this.height = 150;
		this.speed = speed;
		this.element = document.createElement("img");

		this.element.src = "./img/comet.png";
		this.element.style.position = "absolute";

		this.element.style.width = `${this.width}px`;
		this.element.style.height = `${this.height}px`;

		this.element.style.top = `${this.top}px`;
		this.element.style.left = `${this.left}px`;

		this.gameScreen.appendChild(this.element);
	}

	move() {
		this.top += this.speed;

		this.updatePosition();
	}

	updatePosition() {
		this.element.style.top = `${this.top}px`;
		this.element.style.left = `${this.left}px`;
	}

	setSpeed(speed) {
		this.speed = speed;
	}
}
