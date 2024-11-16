# Minesweeper Game

## Overview
This project is a fully functional Minesweeper game built using React. It includes classic gameplay features, dynamic board generation, and responsive design. 

---

## Features
- Dynamic board with adjustable difficulty levels:
  - **Easy**: 8x8 grid with 10 mines
  - **Medium**: 16x16 grid with 40 mines
  - **Hard**: 30x16 grid with 99 mines
- **Auto Clear (Extra Credit)**: Clicking on an empty tile (with 0 adjacent bombs) reveals adjacent tiles recursively until all empty areas are cleared.
- **Safe First Turn (Extra Credit)**: The first click is always safe, ensuring no bombs are placed in the initially clicked tile.
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

### Suggestions for Improvement
- More detailed extra credit guidelines would enhance clarity.
- Including a prompt to consider accessibility and performance optimization could broaden the scope.

---

## Extra Credit
1. **Auto Clear**: Implemented recursive clearing for empty tiles. When a user clicks on a tile with zero adjacent bombs, all adjacent empty cells are revealed recursively until no further empty cells are found. This ensures a smoother gameplay experience, reducing the need for multiple clicks to clear large areas of the board. This logic was implemented in the openCell function in (`GameBoard.js`).
2. **Safe First Turn**: Ensured that the first click is always safe, even if a mine was initially placed at the clicked position. If the first clicked cell contains a mine, the mine is relocated to another safe position on the board. Adjacent mine counts are recalculated dynamically to reflect the updated mine placement. This functionality was added to the handleCellClick function in (`GameBoard.js`).

---

Thank you for reviewing this project!
