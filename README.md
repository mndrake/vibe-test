# Wheel of Fortune

A browser-based Wheel of Fortune game built as a static web app with vanilla HTML, CSS, and JavaScript.

## How to Play

Open `index.html` in any modern web browser. No build step or server required.

### Setup

1. Choose 1-3 human players. Remaining slots are filled by CPU opponents.
2. Enter names for each human player.
3. Select the number of rounds (3-6).
4. Click **Start Game**.

### Gameplay

Each round presents a hidden phrase from a random category. Players take turns:

- **Spin** the wheel to land on a dollar amount (or Bankrupt / Lose a Turn / Free Play).
- **Guess a consonant** after spinning. If it appears in the puzzle, earn the wheel value multiplied by the number of occurrences. Your turn continues.
- **Buy a vowel** for $250 from your round earnings. If correct, your turn continues.
- **Solve the puzzle** at any time during your turn.

The round winner receives their accumulated earnings (minimum $1,000) added to their total. After all rounds, the player with the highest total wins.

### CPU Opponents

CPU players act automatically with randomized decision-making:

- Letter guesses are weighted toward common English consonants with a random factor.
- Solve attempts become more frequent and accurate as more letters are revealed.
- Vowel purchases happen at random when the CPU can afford them.

## Project Structure

```
index.html   - Game markup and layout
styles.css   - All visual styling
game.js      - Game logic, wheel rendering, AI, and state management
```

## Wheel Segments

The wheel contains 24 segments with values from $100 to $900, plus two Bankrupt spaces, a Lose a Turn space, and a Free Play space.

## Puzzle Categories

Around the House, Before & After, Event, Food & Drink, Fun & Games, Landmark, Living Thing, Movie Title, Occupation, Phrase, Place, Restaurant, Song Title, Thing
