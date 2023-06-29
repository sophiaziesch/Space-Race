# Space Rescue

[Click here to play the deployed game](#https://sophiaziesch.github.io/Space-Race/)

## Description

Space Rescue is an exciting game where the player takes control of a spaceship and navigates through a treacherous space environment, evading obstacles an trying to collect the dogs in space to achieve the highest score possible.

## MVP (Minimum Viable Product)

- Player spaceship controlled by keyboard input
- Obstacles that the player must evade
- Dogs that the player must collect
- Score tracking
- Game over condition
- Win condition
- Restart functionality

## Backlog

- Multiple levels with varying difficulty
- Sound effects and background music
- Different kinds of obstacles
- Special abilities for the player's spaceship (eg. shooting obstacles)
- Power-ups to enhance the player's spaceship
- Leaderboards to compare scores with other players

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes

## Data Structure

### Classes

1. **Game**: Manages the overall game state, initializes game objects, and handles game logic.

   - Methods:
     - `start`: Starts the game and sets up initial conditions.
     - `gameLoop`: Defines main game loop.
     - `update`: Updates the game state every frame.
     - `increaseLevel`: Increases difficulty of the game after a certain score.
     - `didCollide`: Checks for collisions between the player's spaceship and obstacles.
     - `increaseScore`: Increases the player's score.
     - `endGame`: Ends the game and offers to restart the game.
     - `wonGame`: Ends game when win condition is met and offers to restart the game.

2. **Player**: Represents the player's spaceship.

   - Methods:
     - `move`: Moves the spaceship around.
     - `updatePosition`: Updates the spaceship's position.
     - `didCollide`: Checks for collision with the obstacles/dogs.

3. **Obstacle**: Represents an obstacle that the player must evade.

   - Methods:
     - `move`: Moves the obstacle around.
     - `updatePosition`: Updates the obstacle's position.
     - `setSpeed`: Sets speed of the obstacle.

4. **Dog**: Represents a dog that the player mus collect.

   - Methods:
     - `move`: Moves the obstacle around.
     - `updatePosition`: Updates the obstacle's position.
     - `setSpeed`: Sets speed of the obstacle.

### States and State Transitions

- **Start Screen**: The initial state of the game where the player can start the game.

  - Transition: On pressing the "Start" button, the game transitions to the **Game Screen** state.

- **Game Screen**: The main state where the player controls the spaceship and evades obstacles.

  - Transition: On collision with an obstacle, the game transitions to the **Game End** state.

- **Game End Screen**: The state displayed when the player loses and the game ends.

  - Transition: On pressing the "Restart" button, the game transitions to the **Start Screen** state.

- **Game Won Screen**: The state displayed when the player wins and the game ends.

  - Transition: On pressing the "Restart" button, the game transitions to the **Start Screen** state.

## Tasks

1. Set up project structure and basic game loop
2. Implement player spaceship movement
3. Generate and display obstacles
4. Implement collision detection
5. Track and display player score
6. Implement game over condition and restart functionality
7. Refine gameplay mechanics and user interface
8. Implement additional features from the backlog

## Links

- [Trello Link](#)
- [Slides Link](#)
- [Github Repository Link](#)
- [Deployment Link](#)
