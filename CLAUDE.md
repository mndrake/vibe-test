# Claude Instructions

## Project Overview

This is a Wheel of Fortune browser game — a static web app with no build tools, frameworks, or dependencies. It runs by opening `index.html` directly in a browser.

## Architecture

- **index.html** — Markup only. References `styles.css` and `game.js`. Keep this file free of inline styles and scripts.
- **styles.css** — All CSS. Uses CSS custom properties defined in `:root` for theming.
- **game.js** — All game logic in a single file. No modules or bundler. Loaded via `<script src>` at the end of `<body>`.

## Key Conventions

- All puzzle phrases must be UPPERCASE letters and spaces only (no punctuation in phrases, except for category names like "Before & After").
- The wheel is drawn on a `<canvas>` element at 600x600 internal resolution, displayed at 420x420 CSS pixels.
- Game state is managed via module-level `let` variables (not classes or a state object).
- CPU AI difficulty is controlled by probability constants and revealed-letter ratios, not difficulty settings.
- The `MINIMUM_ROUND_WIN` constant (currently $1000) guarantees a minimum payout for solving a puzzle.
- The wheel is built dynamically via `buildWheelSegments(numBankrupts)` to support configurable bankrupt spaces and the Steal space.
- Special wheel segments (Bankrupt, Lose a Turn, Free Play, Steal) are distributed evenly around dollar-value segments.

## Adding Puzzles

Add entries to the `PUZZLES` array in `game.js`:

```js
{ category: "Category Name", phrase: "PHRASE IN ALL CAPS" }
```

Phrases should be recognizable and solvable. Keep them under ~30 characters for best board layout.

## Testing

No automated tests. To verify changes, open `index.html` in a browser and play through a full game with both human and CPU players. Check that:

- Wheel spins and lands correctly.
- Letters reveal properly on the board.
- Round earnings accumulate and transfer to total winnings on solve.
- CPU players take turns automatically without freezing.
- All three screens (setup, game, end) transition correctly.
- Steal space correctly takes half from the richest opponent (or $300 if no one has money).
- Bankrupt spaces setting changes the wheel layout correctly (0-4 bankrupts).
- Rules modal opens from both setup and game screens and closes properly.
