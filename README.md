# Space Race

[Click here to play the deployed game](#https://sophiaziesch.github.io/Space-Race/)

## Description

Space Race is an exciting game where players take control of a spaceship and navigate through a treacherous space environment, evading obstacles to achieve the highest score possible. The game offers a fast-paced and challenging experience, testing the player's reflexes and agility as they maneuver through a never-ending space race.

## MVP (Minimum Viable Product)

- Player spaceship controlled by keyboard input
- Obstacles that the player must evade
- Score tracking
- Game over condition
- Win condition
- Restart functionality

## Backlog

- Multiple levels with varying difficulty
- Sound effects and background music
- Different obstacles
- Different spaceship models to choose from
- Special abilities for the player's spaceship
- Power-ups to enhance the player's spaceship
- Leaderboards to compare scores with other players

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

3. **Obstacle**: Represents an obstacle that the player must evade.
   - Properties:
     - `position`: The position of the obstacle.
   - Methods:
     - `update`: Updates the obstacle's position.

### States and State Transitions

- **Gamestart**: The initial state of the game where the player can start the game.

  - Transition: On pressing the "Start" button, the game transitions to the **Gameplay** state.

- **Gameplay**: The main state where the player controls the spaceship and evades obstacles.

  - Transition: On collision with an obstacle, the game transitions to the **Game Over** state.

- **Game Over**: The state displayed when the game ends.
  - Transition: On pressing the "Restart" button, the game transitions to the **Gamestart** state.

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
