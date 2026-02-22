# plinks — Game Spec

Build this game as a single HTML/JS file based on the spec below. Make it fun, polished, and playable in the browser.

---

## Game Name

**plinks**

---

## Concept

**Both** — Drop a ball through pegs, which *opens* a mystery box at the bottom.

A Plinko-style board where the player drops a ball that bounces down through pegs. When the ball reaches the bottom, it lands in a slot that triggers a mystery pod opening, revealing the multiplier result.

---

## Starting Money & Betting

| Setting | Value |
|---|---|
| Starting balance | $50 |
| Minimum bet | $5 |
| Maximum bet | $10,000 |
| All-in allowed | Yes |

---

## Theme

**Space / Alien Mystery Pods**

The board is set in outer space. Pegs are stars or asteroids. Mystery pods at the bottom are alien capsules or space containers that crack open to reveal the result. Use space sound effects (sci-fi blips, laser pings) for ball bounces.

---

## Prize Multipliers

| Prize Label | Multiplier | Rarity |
|---|---|---|
| BUSTED — Hull Breach | 0x (lose bet) | 40% |
| Signal Detected | 1.5x | 30% |
| Alien Artifact | 2x | 20% |
| Warp Core! | 5x | 8% |
| JACKPOT — First Contact! | 10x | 2% |

---

## Gameplay Flow

1. Player sees their current balance displayed prominently at the top.
2. Player selects a bet amount (slider or input, clamped to min $5 / max $10k / all-in).
3. Player clicks **LAUNCH** (or presses Space) to drop the ball from the top of the Plinko board.
4. Ball animation plays: ball bounces down through pegs with space-themed sound effects on each peg hit.
5. Ball lands in one of the prize slots at the bottom, triggering the alien pod to shake and then crack open.
6. Result is revealed with appropriate animation (flash red for bust, confetti/explosion for jackpot).
7. Balance updates. If balance is $0, game over screen appears. Otherwise, player goes again.

---

## Animations & Effects

- **Peg hits:** Ball visually bounces off each peg; play a sci-fi ping/blip sound per hit.
- **Pod shake:** Before opening, the landing pod shakes with anticipation.
- **Bust:** Screen flashes red. Pod cracks open to reveal a broken/empty interior.
- **Win:** Pod glows and opens with a flash; coins or stars emit from the pod.
- **Jackpot:** Full-screen confetti/particle explosion. Pod erupts. Loud fanfare sound.
- **Background music:** Ambient space soundtrack looping throughout gameplay.

---

## Game Over Condition

Game ends when the player's balance reaches **$0**.

Show a **Game Over** screen with:
- Final balance ($0)
- A "Try Again" button that resets balance to $50 and starts a new session.

---

## Visual Style

| Property | Value |
|---|---|
| Background | Deep space — dark navy/black with subtle star field |
| Accent colors | Electric blue, neon purple, gold for jackpot |
| Pegs | Glowing star/orb shapes |
| Pods | Alien capsule / egg design at the bottom of the board |
| Font | Futuristic / sci-fi display font (e.g. Orbitron from Google Fonts) |
| UI panels | Semi-transparent dark panels with glowing borders |

---

## Technical Requirements

- Single self-contained `index.html` file (HTML + CSS + JS, no external dependencies except Google Fonts CDN).
- Plinko board rendered on an HTML `<canvas>` element.
- Physics: realistic-feeling ball bounce with slight randomness at each peg.
- Multiplier outcome is determined on ball drop (seeded by landing slot), not post-hoc.
- Responsive layout — playable on desktop browsers.
- No backend required; all state is in-memory (balance resets on page refresh is fine).
- Sound effects generated with the Web Audio API (no external audio files needed).
