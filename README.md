# Minesweeper Game

## Overview
This project is a fully functional Minesweeper game built using React. It includes classic gameplay features, dynamic board generation, and responsive design. 

---

## Deployment
The game is live and accessible at the following URL:
[minesweeper](https://sahilpreet-aneja-minesweeper.onrender.com)

---

## Features
- Dynamic board with adjustable difficulty levels:
  - **Easy**: 8x8 grid with 10 mines
  - **Medium**: 16x16 grid with 40 mines
  - **Hard**: 30x16 grid with 99 mines
- **Auto Clear**: Clicking on an empty tile (with 0 adjacent bombs) reveals adjacent tiles recursively until all empty areas are cleared.
- **Safe First Turn**: The first click is always safe, ensuring no bombs are placed in the initially clicked tile.
- Clear game win/loss feedback.
- Responsive design for seamless play across devices.

---

## Challenges Faced
1. **Dynamic Board Generation**: Ensuring fair mine placement, avoiding mines on the first click, and balancing randomness.
2. **Recursive Logic for Auto Clear**: Implementing efficient recursion to reveal all adjacent empty cells without causing infinite loops.
3. **State Management**: Efficiently handling game state for revealed cells, and win/loss conditions.
4. **Responsive Design**: Adapting the grid for different screen sizes required intricate CSS adjustments.

---

## Future Improvements
If more time were available, the following enhancements would be prioritized:
1. **Flagging System**: Enable players to mark suspected mine locations.
2. **Timer and Leaderboard**: Track game times and maintain high scores for competitive play.
3. **Custom Game Settings**: Allow players to customize board size and mine density.
4. **Sound Effects and Animations**: Enhance gameplay experience with audio and visual feedback.
5. **Accessibility Improvements**: Make the game fully keyboard and screen-reader friendly.

---

## Assumptions
- Players are familiar with Minesweeper rules, though a rules page is provided.
- The first click must always be safe.
- The game is primarily accessed on web browsers across desktop and mobile devices.

---

## Development Time
The project took approximately **25 hours** to complete.

---

## Feedback on the Challenge
### What Worked Well
- The project offered a great opportunity to design and implement algorithm-driven UI components in React.
- The extra credit tasks challenged me to think about edge cases and improve game functionality.

---

Thank you for reviewing this project!
