/* ═══════════════════════════════════════════════════════
   PUZZLE DATABASE
   ═══════════════════════════════════════════════════════ */
const PUZZLES = [
  // Around the House
  { category: "Around the House", phrase: "WELCOME MAT" },
  { category: "Around the House", phrase: "KITCHEN SINK" },
  { category: "Around the House", phrase: "GRANDFATHER CLOCK" },
  { category: "Around the House", phrase: "SWIMMING POOL" },
  { category: "Around the House", phrase: "CEILING FAN" },
  { category: "Around the House", phrase: "FRONT PORCH" },
  { category: "Around the House", phrase: "WALK IN CLOSET" },
  { category: "Around the House", phrase: "LAUNDRY ROOM" },
  { category: "Around the House", phrase: "GARAGE DOOR OPENER" },
  { category: "Around the House", phrase: "DINING ROOM TABLE" },
  { category: "Around the House", phrase: "BACK YARD" },
  { category: "Around the House", phrase: "WINDOW BLINDS" },

  // Before & After
  { category: "Before & After", phrase: "BANANA SPLIT DECISION" },
  { category: "Before & After", phrase: "BLACK MAGIC MARKER" },
  { category: "Before & After", phrase: "HIGH SCHOOL BUS" },
  { category: "Before & After", phrase: "FRENCH TOAST OF THE TOWN" },
  { category: "Before & After", phrase: "FIRE TRUCK STOP" },
  { category: "Before & After", phrase: "HOME RUN AWAY" },
  { category: "Before & After", phrase: "PEANUT BUTTER CUP CAKE" },
  { category: "Before & After", phrase: "SPEED BUMP IN THE ROAD" },
  { category: "Before & After", phrase: "ROCK STAR WARS" },
  { category: "Before & After", phrase: "PAPER BACK YARD" },
  { category: "Before & After", phrase: "BASKET BALL GAME" },
  { category: "Before & After", phrase: "GOLD FISH TANK" },

  // Event
  { category: "Event", phrase: "SURPRISE BIRTHDAY PARTY" },
  { category: "Event", phrase: "FAMILY REUNION" },
  { category: "Event", phrase: "FOURTH OF JULY" },
  { category: "Event", phrase: "WEDDING RECEPTION" },
  { category: "Event", phrase: "GRADUATION CEREMONY" },
  { category: "Event", phrase: "BABY SHOWER" },
  { category: "Event", phrase: "GRAND OPENING" },
  { category: "Event", phrase: "AWARDS BANQUET" },
  { category: "Event", phrase: "TALENT SHOW" },
  { category: "Event", phrase: "BLOCK PARTY" },
  { category: "Event", phrase: "COSTUME CONTEST" },
  { category: "Event", phrase: "CHAMPIONSHIP GAME" },

  // Food & Drink
  { category: "Food & Drink", phrase: "PEPPERONI PIZZA" },
  { category: "Food & Drink", phrase: "STRAWBERRY MILKSHAKE" },
  { category: "Food & Drink", phrase: "BLUEBERRY PANCAKES" },
  { category: "Food & Drink", phrase: "GRILLED CHEESE SANDWICH" },
  { category: "Food & Drink", phrase: "CHOCOLATE CHIP COOKIES" },
  { category: "Food & Drink", phrase: "FRENCH ONION SOUP" },
  { category: "Food & Drink", phrase: "MASHED POTATOES AND GRAVY" },
  { category: "Food & Drink", phrase: "BANANA SPLIT" },
  { category: "Food & Drink", phrase: "CHICKEN NOODLE SOUP" },
  { category: "Food & Drink", phrase: "FRESH SQUEEZED LEMONADE" },
  { category: "Food & Drink", phrase: "SCRAMBLED EGGS" },
  { category: "Food & Drink", phrase: "MACARONI AND CHEESE" },

  // Fun & Games
  { category: "Fun & Games", phrase: "ROLLER COASTER RIDE" },
  { category: "Fun & Games", phrase: "HIDE AND SEEK" },
  { category: "Fun & Games", phrase: "SCAVENGER HUNT" },
  { category: "Fun & Games", phrase: "BOARD GAME NIGHT" },
  { category: "Fun & Games", phrase: "TREASURE MAP" },
  { category: "Fun & Games", phrase: "WATER BALLOON FIGHT" },
  { category: "Fun & Games", phrase: "CAPTURE THE FLAG" },
  { category: "Fun & Games", phrase: "JUMPING ROPE" },
  { category: "Fun & Games", phrase: "PILLOW FIGHT" },
  { category: "Fun & Games", phrase: "MUSICAL CHAIRS" },
  { category: "Fun & Games", phrase: "CANNONBALL SPLASH" },
  { category: "Fun & Games", phrase: "GO FLY A KITE" },

  // Landmark
  { category: "Landmark", phrase: "GOLDEN GATE BRIDGE" },
  { category: "Landmark", phrase: "STATUE OF LIBERTY" },
  { category: "Landmark", phrase: "GRAND CANYON" },
  { category: "Landmark", phrase: "MOUNT RUSHMORE" },
  { category: "Landmark", phrase: "EIFFEL TOWER" },
  { category: "Landmark", phrase: "GREAT WALL OF CHINA" },
  { category: "Landmark", phrase: "BIG BEN" },
  { category: "Landmark", phrase: "NIAGARA FALLS" },
  { category: "Landmark", phrase: "HOLLYWOOD SIGN" },
  { category: "Landmark", phrase: "EMPIRE STATE BUILDING" },
  { category: "Landmark", phrase: "LEANING TOWER OF PISA" },
  { category: "Landmark", phrase: "SPACE NEEDLE" },

  // Living Thing
  { category: "Living Thing", phrase: "BOTTLENOSE DOLPHIN" },
  { category: "Living Thing", phrase: "MONARCH BUTTERFLY" },
  { category: "Living Thing", phrase: "GIANT SEQUOIA TREE" },
  { category: "Living Thing", phrase: "GOLDEN RETRIEVER" },
  { category: "Living Thing", phrase: "BALD EAGLE" },
  { category: "Living Thing", phrase: "HUMPBACK WHALE" },
  { category: "Living Thing", phrase: "PRAYING MANTIS" },
  { category: "Living Thing", phrase: "RED FOX" },
  { category: "Living Thing", phrase: "SEA TURTLE" },
  { category: "Living Thing", phrase: "POLAR BEAR" },
  { category: "Living Thing", phrase: "BLUE JAY" },
  { category: "Living Thing", phrase: "VENUS FLY TRAP" },

  // Movie Title
  { category: "Movie Title", phrase: "THE WIZARD OF OZ" },
  { category: "Movie Title", phrase: "BACK TO THE FUTURE" },
  { category: "Movie Title", phrase: "JURASSIC PARK" },
  { category: "Movie Title", phrase: "FINDING NEMO" },
  { category: "Movie Title", phrase: "THE LION KING" },
  { category: "Movie Title", phrase: "TOY STORY" },
  { category: "Movie Title", phrase: "FORREST GUMP" },
  { category: "Movie Title", phrase: "HOME ALONE" },
  { category: "Movie Title", phrase: "RAIDERS OF THE LOST ARK" },
  { category: "Movie Title", phrase: "TOP GUN" },
  { category: "Movie Title", phrase: "GHOSTBUSTERS" },
  { category: "Movie Title", phrase: "THE SOUND OF MUSIC" },

  // Occupation
  { category: "Occupation", phrase: "AIRLINE PILOT" },
  { category: "Occupation", phrase: "BRAIN SURGEON" },
  { category: "Occupation", phrase: "PRIVATE INVESTIGATOR" },
  { category: "Occupation", phrase: "PARK RANGER" },
  { category: "Occupation", phrase: "FIREFIGHTER" },
  { category: "Occupation", phrase: "SCHOOL TEACHER" },
  { category: "Occupation", phrase: "MARINE BIOLOGIST" },
  { category: "Occupation", phrase: "PASTRY CHEF" },
  { category: "Occupation", phrase: "NEWS ANCHOR" },
  { category: "Occupation", phrase: "TRUCK DRIVER" },
  { category: "Occupation", phrase: "ZOOKEEPER" },
  { category: "Occupation", phrase: "DEEP SEA DIVER" },

  // Phrase
  { category: "Phrase", phrase: "ACTIONS SPEAK LOUDER THAN WORDS" },
  { category: "Phrase", phrase: "BETTER LATE THAN NEVER" },
  { category: "Phrase", phrase: "BREAK A LEG" },
  { category: "Phrase", phrase: "ONCE IN A LIFETIME" },
  { category: "Phrase", phrase: "EASY AS PIE" },
  { category: "Phrase", phrase: "THINKING OUTSIDE THE BOX" },
  { category: "Phrase", phrase: "GO WITH THE FLOW" },
  { category: "Phrase", phrase: "PRACTICE MAKES PERFECT" },
  { category: "Phrase", phrase: "ON TOP OF THE WORLD" },
  { category: "Phrase", phrase: "HIT THE NAIL ON THE HEAD" },
  { category: "Phrase", phrase: "LIVING THE DREAM" },
  { category: "Phrase", phrase: "KEEP YOUR EYES PEELED" },

  // Place
  { category: "Place", phrase: "TIMES SQUARE" },
  { category: "Place", phrase: "CENTRAL PARK" },
  { category: "Place", phrase: "LAS VEGAS STRIP" },
  { category: "Place", phrase: "FARMERS MARKET" },
  { category: "Place", phrase: "BOWLING ALLEY" },
  { category: "Place", phrase: "WATER PARK" },
  { category: "Place", phrase: "GROCERY STORE" },
  { category: "Place", phrase: "TOWN SQUARE" },
  { category: "Place", phrase: "COLLEGE CAMPUS" },
  { category: "Place", phrase: "FIRE STATION" },
  { category: "Place", phrase: "PUBLIC LIBRARY" },
  { category: "Place", phrase: "MOVIE THEATER" },

  // Restaurant
  { category: "Restaurant", phrase: "THE CHEESECAKE FACTORY" },
  { category: "Restaurant", phrase: "OLIVE GARDEN" },
  { category: "Restaurant", phrase: "RED LOBSTER" },
  { category: "Restaurant", phrase: "TACO BELL" },
  { category: "Restaurant", phrase: "BURGER KING" },
  { category: "Restaurant", phrase: "PANDA EXPRESS" },
  { category: "Restaurant", phrase: "CRACKER BARREL" },
  { category: "Restaurant", phrase: "FIVE GUYS BURGERS AND FRIES" },
  { category: "Restaurant", phrase: "PAPA JOHNS PIZZA" },
  { category: "Restaurant", phrase: "DUNKIN DONUTS" },
  { category: "Restaurant", phrase: "CHICK FIL A" },
  { category: "Restaurant", phrase: "WAFFLE HOUSE" },
  { category: "Restaurant", phrase: "DOMINOS PIZZA" },
  { category: "Restaurant", phrase: "OUTBACK STEAKHOUSE" },
  { category: "Restaurant", phrase: "LONG JOHN SILVERS" },
  { category: "Restaurant", phrase: "POPEYES LOUISIANA KITCHEN" },

  // Song Title
  { category: "Song Title", phrase: "BOHEMIAN RHAPSODY" },
  { category: "Song Title", phrase: "HOTEL CALIFORNIA" },
  { category: "Song Title", phrase: "STAIRWAY TO HEAVEN" },
  { category: "Song Title", phrase: "SWEET HOME ALABAMA" },
  { category: "Song Title", phrase: "DANCING QUEEN" },
  { category: "Song Title", phrase: "ROCKET MAN" },
  { category: "Song Title", phrase: "YESTERDAY" },
  { category: "Song Title", phrase: "PURPLE RAIN" },
  { category: "Song Title", phrase: "TAKE ME HOME COUNTRY ROADS" },
  { category: "Song Title", phrase: "DONT STOP BELIEVING" },
  { category: "Song Title", phrase: "SWEET CAROLINE" },
  { category: "Song Title", phrase: "HERE COMES THE SUN" },

  // Thing
  { category: "Thing", phrase: "TREASURE CHEST" },
  { category: "Thing", phrase: "SHOOTING STAR" },
  { category: "Thing", phrase: "RAINBOW AFTER THE STORM" },
  { category: "Thing", phrase: "SILVER LINING" },
  { category: "Thing", phrase: "MOUNTAIN SUNRISE" },
  { category: "Thing", phrase: "CRYSTAL CLEAR LAKE" },
  { category: "Thing", phrase: "TIME CAPSULE" },
  { category: "Thing", phrase: "MAGIC CARPET RIDE" },
  { category: "Thing", phrase: "FOUR LEAF CLOVER" },
  { category: "Thing", phrase: "GOLD MEDAL" },
  { category: "Thing", phrase: "SNOW GLOBE" },
  { category: "Thing", phrase: "LUCKY CHARM" },

  // TV Show
  { category: "TV Show", phrase: "WHEEL OF FORTUNE" },
  { category: "TV Show", phrase: "THE PRICE IS RIGHT" },
  { category: "TV Show", phrase: "FAMILY FEUD" },
  { category: "TV Show", phrase: "DEAL OR NO DEAL" },
  { category: "TV Show", phrase: "DANCING WITH THE STARS" },
  { category: "TV Show", phrase: "THE AMAZING RACE" },
  { category: "TV Show", phrase: "AMERICAN IDOL" },
  { category: "TV Show", phrase: "JEOPARDY" },
  { category: "TV Show", phrase: "SURVIVOR" },
  { category: "TV Show", phrase: "THE TONIGHT SHOW" },
  { category: "TV Show", phrase: "SATURDAY NIGHT LIVE" },
  { category: "TV Show", phrase: "AMERICAS FUNNIEST VIDEOS" },

  // Sports
  { category: "Sports", phrase: "SLAM DUNK" },
  { category: "Sports", phrase: "HOME RUN" },
  { category: "Sports", phrase: "TOUCHDOWN PASS" },
  { category: "Sports", phrase: "HOLE IN ONE" },
  { category: "Sports", phrase: "TRIPLE PLAY" },
  { category: "Sports", phrase: "WORLD SERIES" },
  { category: "Sports", phrase: "SUPER BOWL SUNDAY" },
  { category: "Sports", phrase: "GOLD MEDAL WINNER" },
  { category: "Sports", phrase: "PENALTY KICK" },
  { category: "Sports", phrase: "BUZZER BEATER" },
  { category: "Sports", phrase: "GRAND SLAM" },
  { category: "Sports", phrase: "VICTORY LAP" },
];

/* ═══════════════════════════════════════════════════════
   SOUND EFFECTS (AudioContext — no audio files)
   ═══════════════════════════════════════════════════════ */
let audioCtx = null;
let audioUnlocked = false;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

// iOS Safari keeps AudioContext suspended until a user gesture triggers
// both a resume() AND routes audio through the output. Playing a silent
// buffer during a touch/click is the only reliable unlock pattern.
function unlockAudio() {
  if (audioUnlocked) return;
  try {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    // Play a tiny silent buffer to force iOS to unlock the audio output
    const buf = ctx.createBuffer(1, 1, ctx.sampleRate);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);

    audioUnlocked = true;
  } catch (e) { /* audio not available */ }
  document.removeEventListener('touchstart', unlockAudio, true);
  document.removeEventListener('touchend', unlockAudio, true);
  document.removeEventListener('click', unlockAudio, true);
}
document.addEventListener('touchstart', unlockAudio, true);
document.addEventListener('touchend', unlockAudio, true);
document.addEventListener('click', unlockAudio, true);

function playTone(freq, duration, type = 'sine', volume = 0.15) {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) { /* audio not supported */ }
}

function sfxDing() { playTone(880, 0.15, 'sine', 0.12); setTimeout(() => playTone(1100, 0.2, 'sine', 0.10), 80); }
function sfxBuzz() { playTone(150, 0.35, 'sawtooth', 0.10); }
function sfxBankrupt() {
  playTone(400, 0.15, 'sawtooth', 0.12);
  setTimeout(() => playTone(300, 0.15, 'sawtooth', 0.10), 120);
  setTimeout(() => playTone(200, 0.3, 'sawtooth', 0.08), 240);
}
function sfxSolve() {
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone(f, 0.25, 'sine', 0.12), i * 120));
}
function sfxTick() { playTone(600, 0.03, 'square', 0.06); }
function sfxStreak() {
  [660, 784, 880].forEach((f, i) => setTimeout(() => playTone(f, 0.12, 'sine', 0.10), i * 70));
}
function sfxDouble() { playTone(523, 0.1, 'sine', 0.12); setTimeout(() => playTone(1047, 0.2, 'sine', 0.12), 100); }

/* ═══════════════════════════════════════════════════════
   CONFETTI
   ═══════════════════════════════════════════════════════ */
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let confettiRunning = false;

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

function launchConfetti() {
  confettiPieces = [];
  const colors = ['#e74c3c','#2ecc71','#3498db','#f1c40f','#9b59b6','#e67e22','#ff1493','#1abc9c'];
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * -confettiCanvas.height,
      w: 6 + Math.random() * 6,
      h: 10 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      rv: (Math.random() - 0.5) * 0.2,
      life: 1,
    });
  }
  if (!confettiRunning) {
    confettiRunning = true;
    animateConfetti();
  }
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.rot += p.rv;
    p.life -= 0.003;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.globalAlpha = Math.max(0, p.life);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confettiCtx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.life > 0 && p.y < confettiCanvas.height + 50);
  if (confettiPieces.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* ═══════════════════════════════════════════════════════
   WHEEL SEGMENTS (built dynamically via buildWheelSegments)
   ═══════════════════════════════════════════════════════ */
let WHEEL_SEGMENTS = [];

// Dollar segments pool — these fill the wheel around the special spaces
const DOLLAR_SEGMENTS = [
  { label: "$500",  value: 500,  color: "#e74c3c" },
  { label: "$600",  value: 600,  color: "#2ecc71" },
  { label: "$700",  value: 700,  color: "#3498db" },
  { label: "$300",  value: 300,  color: "#f39c12" },
  { label: "$800",  value: 800,  color: "#9b59b6" },
  { label: "$550",  value: 550,  color: "#1abc9c" },
  { label: "$400",  value: 400,  color: "#e67e22" },
  { label: "$900",  value: 900,  color: "#2c3e50" },
  { label: "$350",  value: 350,  color: "#d35400" },
  { label: "$450",  value: 450,  color: "#c0392b" },
  { label: "$750",  value: 750,  color: "#16a085" },
  { label: "$250",  value: 250,  color: "#8e44ad" },
  { label: "$600",  value: 600,  color: "#2980b9" },
  { label: "$100",  value: 100,  color: "#f1c40f", textColor: "#333" },
  { label: "$300",  value: 300,  color: "#e74c3c" },
  { label: "$500",  value: 500,  color: "#3498db" },
  { label: "$650",  value: 650,  color: "#e67e22" },
  { label: "$200",  value: 200,  color: "#9b59b6" },
  { label: "$850",  value: 850,  color: "#2ecc71" },
  { label: "$150",  value: 150,  color: "#d35400" },
];

const BANKRUPT_SEGMENT = { label: "BANKRUPT", value: "bankrupt", color: "#1a1a2e" };
const LOSE_TURN_SEGMENT = { label: "LOSE\nTURN", value: "lose_turn", color: "#ecf0f1", textColor: "#333" };
const FREE_PLAY_SEGMENT = { label: "FREE\nPLAY", value: "free_play", color: "#27ae60" };
const STEAL_SEGMENT = { label: "STEAL", value: "steal", color: "#ff1493" };
const DOUBLE_SEGMENT = { label: "2x\nDOUBLE", value: "double", color: "#00bcd4", textColor: "#fff" };

function buildWheelSegments(numBankrupts) {
  // Fixed special segments: lose_turn, free_play, steal, double
  // Variable: 0-4 bankrupt segments
  // Rest filled with dollar segments to reach 24 total
  const totalSlots = 24;
  const fixedSpecials = 4; // lose_turn + free_play + steal + double
  const dollarCount = totalSlots - fixedSpecials - numBankrupts;

  const dollars = DOLLAR_SEGMENTS.slice(0, dollarCount);
  const segments = [...dollars];

  // Insert special segments at evenly spaced positions
  const specials = [];
  for (let i = 0; i < numBankrupts; i++) specials.push({ ...BANKRUPT_SEGMENT });
  specials.push({ ...LOSE_TURN_SEGMENT });
  specials.push({ ...FREE_PLAY_SEGMENT });
  specials.push({ ...STEAL_SEGMENT });
  specials.push({ ...DOUBLE_SEGMENT });

  // Distribute specials evenly around the wheel
  const spacing = Math.floor(totalSlots / specials.length);
  for (let i = specials.length - 1; i >= 0; i--) {
    const pos = Math.min(i * spacing, segments.length);
    segments.splice(pos, 0, specials[i]);
  }

  WHEEL_SEGMENTS = segments;
}

const VOWELS = new Set(['A','E','I','O','U']);
const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');
const MINIMUM_ROUND_WIN = 1000;

/* ═══════════════════════════════════════════════════════
   GAME STATE
   ═══════════════════════════════════════════════════════ */
let players = [];
let currentPlayerIdx = 0;
let currentRound = 0;
let totalRounds = 4;
let puzzle = null;    // { category, phrase }
let revealedLetters = new Set();
let usedLetters = new Set();
let wheelAngle = 0;
let spinning = false;
let currentWheelValue = null;
let inputMode = null; // null | 'consonant' | 'vowel' | 'solve' | 'free_consonant'
let usedPuzzleIndices = new Set();
let cpuThinking = false;
let numBankrupts = 2;
let cpuDifficulty = 'medium';
let solveGuesses = {};  // { tileIndex: letter } — user guesses during solve mode
let solveTileIndices = []; // ordered list of unrevealed tile indices for cursor navigation
let solveCursorPos = 0; // index into solveTileIndices
let streak = 0;         // consecutive correct letter guesses for current player
let doubleActive = false; // true when the next consonant payout is doubled
const CPU_AVATARS = ['🤖','👾','🎰'];

/* ═══════════════════════════════════════════════════════
   DOM
   ═══════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);

// Setup
const setupScreen = $('setup-screen');
const numHumansSelect = $('num-humans');
const numRoundsSelect = $('num-rounds');
const playerNameFields = document.querySelectorAll('.player-name-field');
const startBtn = $('start-btn');

// Game
const gameScreen = $('game-screen');
const roundBanner = $('round-banner');
const scoreboard = $('scoreboard');
const categoryLabel = $('category-label');
const puzzleBoard = $('puzzle-board');
const usedLettersEl = $('used-letters');
const messageLog = $('message-log');
const wheelCanvas = $('wheel-canvas');
const ctx = wheelCanvas.getContext('2d');
const btnSpin = $('btn-spin');
const btnVowel = $('btn-vowel');
const btnSolve = $('btn-solve');
const keyboard = $('keyboard');
const solveControls = $('solve-controls');
const solveHint = $('solve-hint');
const solveSubmit = $('solve-submit');
const solveCancel = $('solve-cancel');

const streakDisplay = $('streak-display');

// End
const endScreen = $('end-screen');

/* ═══════════════════════════════════════════════════════
   SETUP
   ═══════════════════════════════════════════════════════ */
numHumansSelect.addEventListener('change', () => {
  const n = parseInt(numHumansSelect.value);
  playerNameFields.forEach((el, i) => {
    el.classList.toggle('visible', i < n);
  });
});

// Avatar picker
document.querySelectorAll('.avatar-picker').forEach(picker => {
  picker.addEventListener('click', (e) => {
    const btn = e.target.closest('.avatar-btn');
    if (!btn) return;
    picker.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

startBtn.addEventListener('click', startGame);
$('play-again-btn').addEventListener('click', () => {
  endScreen.style.display = 'none';
  setupScreen.style.display = 'flex';
});

function startGame() {
  const numHumans = parseInt(numHumansSelect.value);
  totalRounds = parseInt(numRoundsSelect.value);
  numBankrupts = parseInt($('num-bankrupts').value);
  cpuDifficulty = $('cpu-difficulty').value;
  buildWheelSegments(numBankrupts);
  players = [];

  for (let i = 0; i < 3; i++) {
    if (i < numHumans) {
      const nameInput = $('pname-' + i);
      const name = nameInput.value.trim() || ('Player ' + (i + 1));
      const picker = document.querySelector(`.avatar-picker[data-for="${i}"]`);
      const selectedBtn = picker.querySelector('.avatar-btn.selected');
      const avatar = selectedBtn ? selectedBtn.dataset.emoji : '😎';
      players.push({ name, cpu: false, roundMoney: 0, totalMoney: 0, avatar });
    } else {
      const cpuNames = ['CPU Alice', 'CPU Bob', 'CPU Carol'];
      players.push({ name: cpuNames[i], cpu: true, roundMoney: 0, totalMoney: 0, avatar: CPU_AVATARS[i] });
    }
  }

  currentRound = 0;
  usedPuzzleIndices.clear();
  setupScreen.style.display = 'none';
  gameScreen.style.display = 'block';

  buildKeyboard();
  drawWheel(0);
  startRound();
}

/* ═══════════════════════════════════════════════════════
   KEYBOARD
   ═══════════════════════════════════════════════════════ */
function buildKeyboard() {
  keyboard.innerHTML = '';
  for (let c = 65; c <= 90; c++) {
    const letter = String.fromCharCode(c);
    const btn = document.createElement('button');
    btn.className = 'key-btn' + (VOWELS.has(letter) ? ' vowel' : '');
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.addEventListener('click', () => onKeyboardClick(letter));
    keyboard.appendChild(btn);
  }
}

function updateKeyboard() {
  keyboard.querySelectorAll('.key-btn').forEach(btn => {
    const letter = btn.dataset.letter;

    if (inputMode === 'solve') {
      // In solve mode, disable letters already revealed on the board
      btn.disabled = revealedLetters.has(letter);
    } else {
      btn.disabled = usedLetters.has(letter);

      if (inputMode === 'consonant' || inputMode === 'free_consonant') {
        btn.disabled = btn.disabled || VOWELS.has(letter);
      } else if (inputMode === 'vowel') {
        btn.disabled = btn.disabled || !VOWELS.has(letter);
      }
    }
  });
}

function onKeyboardClick(letter) {
  if (!inputMode) return;

  if (inputMode === 'solve') {
    // In solve mode, clicking a letter fills the current blank tile
    if (solveTileIndices.length === 0) return;
    const tileIdx = solveTileIndices[solveCursorPos];
    solveGuesses[tileIdx] = letter;
    if (solveCursorPos < solveTileIndices.length - 1) {
      solveCursorPos++;
    }
    renderBoard();
    return;
  }

  if (inputMode === 'vowel') {
    if (!VOWELS.has(letter) || usedLetters.has(letter)) return;
    guessVowel(letter);
  } else {
    if (VOWELS.has(letter) || usedLetters.has(letter)) return;
    guessConsonant(letter);
  }
}

/* ═══════════════════════════════════════════════════════
   ROUND MANAGEMENT
   ═══════════════════════════════════════════════════════ */
function startRound() {
  currentRound++;
  if (currentRound > totalRounds) {
    endGame();
    return;
  }

  players.forEach(p => p.roundMoney = 0);
  revealedLetters.clear();
  usedLetters.clear();
  currentWheelValue = null;
  inputMode = null;
  currentPlayerIdx = (currentRound - 1) % 3;
  streak = 0;
  doubleActive = false;
  updateStreakDisplay();

  puzzle = pickPuzzle();
  roundBanner.textContent = `Round ${currentRound} of ${totalRounds}`;
  categoryLabel.textContent = puzzle.category;

  renderBoard();
  renderScoreboard();
  updateUsedLetters();
  setMessage(`Round ${currentRound}! ${players[currentPlayerIdx].name}'s turn. Spin the wheel!`);
  setControlState('spin');

  if (players[currentPlayerIdx].cpu) {
    scheduleCpuTurn();
  }
}

function pickPuzzle() {
  const available = [];
  for (let i = 0; i < PUZZLES.length; i++) {
    if (!usedPuzzleIndices.has(i)) available.push(i);
  }
  if (available.length === 0) {
    usedPuzzleIndices.clear();
    for (let i = 0; i < PUZZLES.length; i++) available.push(i);
  }
  const idx = available[Math.floor(Math.random() * available.length)];
  usedPuzzleIndices.add(idx);
  return { ...PUZZLES[idx] };
}

function nextPlayer() {
  resetStreak();
  currentPlayerIdx = (currentPlayerIdx + 1) % 3;
  currentWheelValue = null;
  inputMode = null;
  doubleActive = false;
  renderScoreboard();
  setMessage(`${players[currentPlayerIdx].name}'s turn. Spin the wheel!`);
  setControlState('spin');

  if (players[currentPlayerIdx].cpu) {
    scheduleCpuTurn();
  }
}

function endGame() {
  gameScreen.style.display = 'none';
  endScreen.style.display = 'flex';

  let maxMoney = -1;
  let winnerName = '';
  let winnerAvatar = '';
  const scoresHtml = players.map(p => {
    if (p.totalMoney > maxMoney) {
      maxMoney = p.totalMoney;
      winnerName = p.name;
      winnerAvatar = p.avatar;
    }
    return `<div>${p.avatar} ${p.name}: <strong style="color:var(--gold);">$${p.totalMoney.toLocaleString()}</strong></div>`;
  }).join('');

  $('winner-text').textContent = `${winnerAvatar} ${winnerName} wins with $${maxMoney.toLocaleString()}!`;
  $('final-scores').innerHTML = scoresHtml;
}

/* ═══════════════════════════════════════════════════════
   PUZZLE BOARD RENDERING
   ═══════════════════════════════════════════════════════ */
function renderBoard() {
  puzzleBoard.innerHTML = '';
  const words = puzzle.phrase.split(' ');
  // Break into rows (max ~14 chars per row)
  const rows = [];
  let currentRow = [];
  let currentLen = 0;
  words.forEach(word => {
    if (currentLen + word.length + (currentRow.length > 0 ? 1 : 0) > 14 && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [word];
      currentLen = word.length;
    } else {
      if (currentRow.length > 0) currentLen += 1; // space
      currentRow.push(word);
      currentLen += word.length;
    }
  });
  if (currentRow.length > 0) rows.push(currentRow);

  const isSolving = inputMode === 'solve';
  let tileIndex = 0;

  rows.forEach(rowWords => {
    const rowEl = document.createElement('div');
    rowEl.className = 'puzzle-row';
    rowWords.forEach((word, wi) => {
      if (wi > 0) {
        const space = document.createElement('div');
        space.className = 'tile space';
        rowEl.appendChild(space);
      }
      const wordGroup = document.createElement('span');
      wordGroup.className = 'word-group';
      for (const ch of word) {
        const tile = document.createElement('div');
        if (/[A-Z]/.test(ch)) {
          tile.className = 'tile letter';
          tile.dataset.letter = ch;
          tile.dataset.tileIndex = tileIndex;
          if (revealedLetters.has(ch)) {
            tile.classList.add('revealed');
            tile.textContent = ch;
          } else if (isSolving) {
            // Unrevealed tile in solve mode
            tile.classList.add('editable');
            if (solveGuesses[tileIndex]) {
              tile.classList.add('guess');
              tile.textContent = solveGuesses[tileIndex];
            }
            // Highlight active cursor tile
            if (solveTileIndices[solveCursorPos] === tileIndex) {
              tile.classList.add('active-tile');
            }
            tile.addEventListener('click', () => {
              // Allow clicking a tile to move cursor there
              const pos = solveTileIndices.indexOf(tileIndex);
              if (pos >= 0) {
                solveCursorPos = pos;
                renderBoard();
              }
            });
          }
          tileIndex++;
        } else {
          tile.className = 'tile punct';
          tile.textContent = ch;
        }
        wordGroup.appendChild(tile);
      }
      rowEl.appendChild(wordGroup);
    });
    puzzleBoard.appendChild(rowEl);
  });
}

function revealLetter(letter) {
  revealedLetters.add(letter);
  document.querySelectorAll(`.tile.letter[data-letter="${letter}"]`).forEach(tile => {
    tile.classList.add('revealed');
    tile.textContent = letter;
  });
}

function isPuzzleSolved() {
  const letters = new Set(puzzle.phrase.replace(/[^A-Z]/g, '').split(''));
  for (const l of letters) {
    if (!revealedLetters.has(l)) return false;
  }
  return true;
}

function countLetterInPuzzle(letter) {
  return puzzle.phrase.split('').filter(c => c === letter).length;
}

/* ═══════════════════════════════════════════════════════
   SCOREBOARD
   ═══════════════════════════════════════════════════════ */
function renderScoreboard() {
  scoreboard.innerHTML = '';
  players.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'player-card' + (i === currentPlayerIdx ? ' active' : '');
    card.innerHTML = `
      <div class="avatar">${p.avatar}</div>
      <div class="name">${p.name}${p.cpu ? '<span class="cpu-badge">CPU</span>' : ''}</div>
      <div class="round-money">$${p.roundMoney.toLocaleString()}</div>
      <div class="total-label">Total Winnings</div>
      <div class="total-money">$${p.totalMoney.toLocaleString()}</div>
    `;
    scoreboard.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════
   USED LETTERS
   ═══════════════════════════════════════════════════════ */
function updateUsedLetters() {
  if (usedLetters.size === 0) {
    usedLettersEl.textContent = '';
  } else {
    usedLettersEl.textContent = 'Used: ' + [...usedLetters].sort().join(' ');
  }
}

/* ═══════════════════════════════════════════════════════
   MESSAGE LOG
   ═══════════════════════════════════════════════════════ */
function setMessage(msg) {
  messageLog.textContent = msg;
}

/* ═══════════════════════════════════════════════════════
   STREAK DISPLAY
   ═══════════════════════════════════════════════════════ */
function updateStreakDisplay() {
  if (streak >= 2) {
    const fires = '🔥'.repeat(Math.min(streak, 8));
    streakDisplay.innerHTML = `<span class="streak-fire">${fires} ${streak} in a row! ${fires}</span>`;
  } else {
    streakDisplay.innerHTML = '';
  }
}

function awardStreakBonus() {
  if (streak >= 3) {
    const bonus = streak * 500;
    const cp = players[currentPlayerIdx];
    cp.roundMoney += bonus;
    sfxStreak();
    setMessage(`${cp.name} streak bonus! ${streak} in a row = +$${bonus.toLocaleString()}!`);
    renderScoreboard();
  }
}

function resetStreak() {
  if (streak >= 3) awardStreakBonus();
  streak = 0;
  updateStreakDisplay();
}

/* ═══════════════════════════════════════════════════════
   CONTROL STATE
   ═══════════════════════════════════════════════════════ */
function syncKeyboardActive() {
  gameScreen.classList.toggle('keyboard-active', keyboard.classList.contains('visible'));
}

function setControlState(state) {
  keyboard.classList.remove('visible');
  solveControls.classList.remove('visible');
  solveHint.classList.remove('visible');
  btnSpin.disabled = true;
  btnVowel.disabled = true;
  btnSolve.disabled = true;

  const cp = players[currentPlayerIdx];

  if (state === 'spin') {
    if (inputMode === 'solve') exitSolveMode();
    inputMode = null;
    btnSpin.disabled = cp.cpu;
    btnSolve.disabled = cp.cpu;
    // Can buy vowel if has $250 and there are unused vowels
    const hasUnusedVowels = [...VOWELS].some(v => !usedLetters.has(v) && puzzle.phrase.includes(v));
    btnVowel.disabled = cp.cpu || cp.roundMoney < 250 || !hasUnusedVowels;
  } else if (state === 'pick_consonant') {
    inputMode = 'consonant';
    keyboard.classList.add('visible');
    updateKeyboard();
  } else if (state === 'free_consonant') {
    inputMode = 'free_consonant';
    keyboard.classList.add('visible');
    updateKeyboard();
  } else if (state === 'pick_vowel') {
    inputMode = 'vowel';
    keyboard.classList.add('visible');
    updateKeyboard();
  } else if (state === 'solving') {
    inputMode = 'solve';
    enterSolveMode();
  } else if (state === 'disabled') {
    if (inputMode === 'solve') exitSolveMode();
    inputMode = null;
  }
  syncKeyboardActive();
}

/* ═══════════════════════════════════════════════════════
   INLINE SOLVE MODE
   ═══════════════════════════════════════════════════════ */
function enterSolveMode() {
  solveGuesses = {};
  solveCursorPos = 0;

  // Build ordered list of unrevealed letter tile indices
  solveTileIndices = [];
  let tileIndex = 0;
  for (const ch of puzzle.phrase) {
    if (/[A-Z]/.test(ch)) {
      if (!revealedLetters.has(ch)) {
        solveTileIndices.push(tileIndex);
      }
      tileIndex++;
    }
  }

  solveControls.classList.add('visible');
  solveHint.classList.add('visible');
  keyboard.classList.add('visible');
  syncKeyboardActive();
  updateKeyboard();
  renderBoard();
  document.addEventListener('keydown', solveKeyHandler);
}

function exitSolveMode() {
  solveGuesses = {};
  solveTileIndices = [];
  solveCursorPos = 0;
  solveControls.classList.remove('visible');
  solveHint.classList.remove('visible');
  keyboard.classList.remove('visible');
  syncKeyboardActive();
  document.removeEventListener('keydown', solveKeyHandler);
  renderBoard();
}

function solveKeyHandler(e) {
  if (inputMode !== 'solve') return;

  const key = e.key.toUpperCase();

  if (/^[A-Z]$/.test(key) && solveTileIndices.length > 0) {
    e.preventDefault();
    // Place letter at current cursor position
    const tileIdx = solveTileIndices[solveCursorPos];
    solveGuesses[tileIdx] = key;
    // Advance cursor to next unfilled tile (or stay at end)
    if (solveCursorPos < solveTileIndices.length - 1) {
      solveCursorPos++;
    }
    renderBoard();
  } else if (e.key === 'Backspace') {
    e.preventDefault();
    const tileIdx = solveTileIndices[solveCursorPos];
    if (solveGuesses[tileIdx]) {
      // Clear current tile
      delete solveGuesses[tileIdx];
    } else if (solveCursorPos > 0) {
      // Move back and clear that tile
      solveCursorPos--;
      delete solveGuesses[solveTileIndices[solveCursorPos]];
    }
    renderBoard();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    submitSolveGuess();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    cancelSolve();
  }
}

function buildGuessString() {
  // Reconstruct the full phrase from revealed letters + guesses
  let result = '';
  let tileIndex = 0;
  for (const ch of puzzle.phrase) {
    if (/[A-Z]/.test(ch)) {
      if (revealedLetters.has(ch)) {
        result += ch;
      } else if (solveGuesses[tileIndex]) {
        result += solveGuesses[tileIndex];
      } else {
        result += '?'; // unfilled tile — will cause mismatch
      }
      tileIndex++;
    } else {
      result += ch;
    }
  }
  return result;
}

function submitSolveGuess() {
  if (inputMode !== 'solve') return;
  const guess = buildGuessString();
  // Clean up solve mode fully
  document.removeEventListener('keydown', solveKeyHandler);
  solveControls.classList.remove('visible');
  solveHint.classList.remove('visible');
  solveGuesses = {};
  solveTileIndices = [];
  solveCursorPos = 0;
  inputMode = null;
  renderBoard(); // re-render to clear guess styling
  attemptSolve(guess);
}

function cancelSolve() {
  exitSolveMode();
  inputMode = null;
  setControlState('spin');
  setMessage(`${players[currentPlayerIdx].name}'s turn. Spin, buy a vowel, or solve!`);
}

/* ═══════════════════════════════════════════════════════
   WHEEL DRAWING & SPINNING
   ═══════════════════════════════════════════════════════ */
function drawWheel(angle) {
  const size = 600;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 10;
  const numSeg = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSeg;

  ctx.clearRect(0, 0, size, size);

  // Outer rim
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 8, 0, 2 * Math.PI);
  ctx.fillStyle = '#d4a520';
  ctx.fill();

  WHEEL_SEGMENTS.forEach((seg, i) => {
    const startAngle = angle + i * arcSize;
    const endAngle = startAngle + arcSize;

    // Segment
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = '#d4a520';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + arcSize / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = seg.textColor || '#fff';
    ctx.font = 'bold 18px sans-serif';
    const lines = seg.label.split('\n');
    const textR = radius * 0.68;
    lines.forEach((line, li) => {
      ctx.fillText(line, textR, (li - (lines.length - 1) / 2) * 20);
    });
    ctx.restore();
  });

  // Center hub
  ctx.beginPath();
  ctx.arc(cx, cy, 32, 0, 2 * Math.PI);
  ctx.fillStyle = '#d4a520';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, 24, 0, 2 * Math.PI);
  ctx.fillStyle = '#1a1a2e';
  ctx.fill();
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  setControlState('disabled');

  const extraSpins = 3 + Math.random() * 4; // 3-7 full rotations
  const totalAngle = extraSpins * 2 * Math.PI;
  const duration = 3000 + Math.random() * 1500;
  const startTime = performance.now();
  const startAngle = wheelAngle;
  let lastTickSeg = -1;

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(now) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeOut(t);
    wheelAngle = startAngle + totalAngle * eased;
    drawWheel(wheelAngle);

    // Tick sound when crossing segment boundaries
    const numSeg = WHEEL_SEGMENTS.length;
    const arcSize = (2 * Math.PI) / numSeg;
    let normAngle = wheelAngle % (2 * Math.PI);
    if (normAngle < 0) normAngle += 2 * Math.PI;
    const currentSeg = Math.floor(normAngle / arcSize) % numSeg;
    if (currentSeg !== lastTickSeg) {
      lastTickSeg = currentSeg;
      sfxTick();
    }

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
      onWheelStopped();
    }
  }

  requestAnimationFrame(animate);
}

function onWheelStopped() {
  const numSeg = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSeg;
  let normalAngle = wheelAngle % (2 * Math.PI);
  if (normalAngle < 0) normalAngle += 2 * Math.PI;
  let pointerAngle = (2 * Math.PI - normalAngle + 3 * Math.PI / 2) % (2 * Math.PI);
  let segIndex = Math.floor(pointerAngle / arcSize) % numSeg;

  const segment = WHEEL_SEGMENTS[segIndex];
  currentWheelValue = segment.value;

  const cp = players[currentPlayerIdx];

  if (segment.value === 'bankrupt') {
    sfxBankrupt();
    setMessage(`${cp.name} hit BANKRUPT! Lost $${cp.roundMoney.toLocaleString()}.`);
    cp.roundMoney = 0;
    renderScoreboard();
    setTimeout(() => nextPlayer(), 1800);
  } else if (segment.value === 'lose_turn') {
    sfxBuzz();
    setMessage(`${cp.name} hit LOSE A TURN!`);
    setTimeout(() => nextPlayer(), 1800);
  } else if (segment.value === 'double') {
    sfxDouble();
    doubleActive = true;
    setMessage(`${cp.name} landed on 2x DOUBLE! Next correct consonant pays double! Pick a consonant.`);
    if (cp.cpu) {
      setTimeout(() => cpuPickConsonant(), 1200);
    } else {
      setControlState('pick_consonant');
    }
  } else if (segment.value === 'steal') {
    handleSteal(cp);
  } else if (segment.value === 'free_play') {
    setMessage(`${cp.name} landed on FREE PLAY! Pick any letter — no penalty if it's not there.`);
    if (cp.cpu) {
      setTimeout(() => cpuFreePlay(), 1200);
    } else {
      setControlState('free_consonant');
    }
  } else {
    setMessage(`${cp.name} spun $${segment.value}! Pick a consonant.`);
    if (cp.cpu) {
      setTimeout(() => cpuPickConsonant(), 1200);
    } else {
      setControlState('pick_consonant');
    }
  }
}

/* ═══════════════════════════════════════════════════════
   STEAL LOGIC
   ═══════════════════════════════════════════════════════ */
function handleSteal(cp) {
  // Find the opponent with the most round money to steal from
  const others = players.filter((_, i) => i !== currentPlayerIdx);
  const othersSorted = [...others].sort((a, b) => b.roundMoney - a.roundMoney);

  // If current player has the most money, steal from 2nd highest (which is the
  // richest opponent). If someone else is richer, steal from them.
  const allSorted = [...players].sort((a, b) => b.roundMoney - a.roundMoney);
  let victim;
  if (allSorted[0] === cp) {
    // Current player is richest — steal from the richest opponent
    victim = othersSorted[0];
  } else {
    // Someone else is richest — steal from them
    victim = allSorted[0];
  }

  if (!victim || victim.roundMoney <= 0) {
    // No one else has money — get $300
    cp.roundMoney += 300;
    setMessage(`${cp.name} landed on STEAL! No opponents have money — gets $300!`);
    renderScoreboard();
    setTimeout(() => {
      setMessage(`${cp.name}'s turn continues. Spin, buy a vowel, or solve!`);
      setControlState('spin');
      if (cp.cpu) scheduleCpuTurn();
    }, 1800);
    return;
  }

  const stolen = Math.floor(victim.roundMoney / 2);
  victim.roundMoney -= stolen;
  cp.roundMoney += stolen;
  setMessage(`${cp.name} landed on STEAL! Took $${stolen.toLocaleString()} from ${victim.name}!`);
  renderScoreboard();
  setTimeout(() => {
    setMessage(`${cp.name}'s turn continues. Spin, buy a vowel, or solve!`);
    setControlState('spin');
    if (cp.cpu) scheduleCpuTurn();
  }, 1800);
}

/* ═══════════════════════════════════════════════════════
   GUESS CONSONANT / VOWEL
   ═══════════════════════════════════════════════════════ */
function guessConsonant(letter) {
  usedLetters.add(letter);
  updateUsedLetters();
  keyboard.classList.remove('visible');
  syncKeyboardActive();

  const cp = players[currentPlayerIdx];
  const count = countLetterInPuzzle(letter);
  const isFree = inputMode === 'free_consonant';

  if (count > 0) {
    let multiplier = 1;
    if (doubleActive) { multiplier = 2; doubleActive = false; }
    const baseAmount = (typeof currentWheelValue === 'number') ? currentWheelValue * count : 500 * count;
    const amount = baseAmount * multiplier;
    cp.roundMoney += amount;
    revealLetter(letter);
    renderBoard();
    renderScoreboard();
    sfxDing();
    streak++;
    updateStreakDisplay();
    const doubleLabel = multiplier > 1 ? ' (2x DOUBLED!)' : '';
    setMessage(`${cp.name}: "${letter}" appears ${count} time${count > 1 ? 's' : ''}! +$${amount.toLocaleString()}${doubleLabel}`);

    if (isPuzzleSolved()) {
      puzzleSolvedBy(currentPlayerIdx);
      return;
    }
    // Same player continues
    setTimeout(() => {
      setMessage(`${cp.name}'s turn continues. Spin, buy a vowel, or solve!`);
      setControlState('spin');
      if (cp.cpu) scheduleCpuTurn();
    }, 1400);
  } else {
    sfxBuzz();
    if (isFree) {
      setMessage(`${cp.name}: "${letter}" is not in the puzzle, but it's a FREE PLAY — no penalty!`);
      // Wrong guess on free play doesn't break streak
      setTimeout(() => {
        setMessage(`${cp.name}'s turn continues. Spin, buy a vowel, or solve!`);
        setControlState('spin');
        if (cp.cpu) scheduleCpuTurn();
      }, 1400);
    } else {
      doubleActive = false;
      setMessage(`${cp.name}: "${letter}" is not in the puzzle.`);
      setTimeout(() => nextPlayer(), 1400);
    }
  }
}

function guessVowel(letter) {
  const cp = players[currentPlayerIdx];
  cp.roundMoney -= 250;
  usedLetters.add(letter);
  updateUsedLetters();
  keyboard.classList.remove('visible');
  syncKeyboardActive();

  const count = countLetterInPuzzle(letter);
  if (count > 0) {
    revealLetter(letter);
    renderBoard();
    renderScoreboard();
    sfxDing();
    streak++;
    updateStreakDisplay();
    setMessage(`${cp.name}: "${letter}" appears ${count} time${count > 1 ? 's' : ''}!`);

    if (isPuzzleSolved()) {
      puzzleSolvedBy(currentPlayerIdx);
      return;
    }
    setTimeout(() => {
      setMessage(`${cp.name}'s turn continues. Spin, buy a vowel, or solve!`);
      setControlState('spin');
      if (cp.cpu) scheduleCpuTurn();
    }, 1400);
  } else {
    sfxBuzz();
    renderScoreboard();
    setMessage(`${cp.name}: "${letter}" is not in the puzzle. -$250.`);
    setTimeout(() => nextPlayer(), 1400);
  }
}

/* ═══════════════════════════════════════════════════════
   SOLVE PUZZLE
   ═══════════════════════════════════════════════════════ */
function attemptSolve(guess) {
  const cp = players[currentPlayerIdx];
  const normalized = guess.toUpperCase().replace(/[^A-Z ]/g, '').replace(/\s+/g, ' ').trim();
  const target = puzzle.phrase.replace(/[^A-Z ]/g, '').replace(/\s+/g, ' ').trim();

  if (normalized === target) {
    // Reveal all letters
    for (const ch of puzzle.phrase) {
      if (/[A-Z]/.test(ch)) revealedLetters.add(ch);
    }
    renderBoard();
    puzzleSolvedBy(currentPlayerIdx);
  } else {
    setMessage(`${cp.name} guessed wrong! The answer was not "${guess.toUpperCase()}".`);
    setTimeout(() => nextPlayer(), 1800);
  }
}

function puzzleSolvedBy(playerIdx) {
  const p = players[playerIdx];

  // Award streak bonus before calculating winnings
  if (streak >= 3) awardStreakBonus();
  streak = 0;
  updateStreakDisplay();

  // Award the round winnings — at minimum $1000 for solving the puzzle,
  // or the full accumulated round earnings if higher.
  const roundWinnings = Math.max(p.roundMoney, MINIMUM_ROUND_WIN);
  p.roundMoney = roundWinnings;
  p.totalMoney += roundWinnings;

  sfxSolve();
  launchConfetti();
  setMessage(`${p.name} solved it! "${puzzle.phrase}" — Won $${roundWinnings.toLocaleString()} this round!`);
  renderScoreboard();
  setControlState('disabled');

  setTimeout(() => startRound(), 3500);
}

/* ═══════════════════════════════════════════════════════
   BUTTON HANDLERS
   ═══════════════════════════════════════════════════════ */
btnSpin.addEventListener('click', () => {
  if (spinning || players[currentPlayerIdx].cpu) return;
  spinWheel();
});

btnVowel.addEventListener('click', () => {
  if (players[currentPlayerIdx].cpu) return;
  const cp = players[currentPlayerIdx];
  if (cp.roundMoney < 250) return;
  setMessage(`${cp.name} is buying a vowel ($250). Pick a vowel.`);
  setControlState('pick_vowel');
});

btnSolve.addEventListener('click', () => {
  if (players[currentPlayerIdx].cpu) return;
  setMessage(`${players[currentPlayerIdx].name} wants to solve the puzzle!`);
  setControlState('solving');
});

solveSubmit.addEventListener('click', () => {
  submitSolveGuess();
});

solveCancel.addEventListener('click', () => {
  cancelSolve();
});

/* ═══════════════════════════════════════════════════════
   CPU / AI PLAYER LOGIC
   ═══════════════════════════════════════════════════════ */
const CPU_DIFFICULTY_PROFILES = {
  easy: {
    // Rarely tries to solve, poor letter picks, low accuracy
    solveThresholds: [
      { minRatio: 0.90, chance: 0.30 },
      { minRatio: 0.75, chance: 0.10 },
      { minRatio: 0.50, chance: 0.03 },
      { minRatio: 0.00, chance: 0.01 },
    ],
    correctSolveThresholds: [
      { minRatio: 0.90, chance: 0.50 },
      { minRatio: 0.75, chance: 0.25 },
      { minRatio: 0.60, chance: 0.10 },
      { minRatio: 0.40, chance: 0.05 },
      { minRatio: 0.00, chance: 0.02 },
    ],
    smartPickChance: 0.30,   // chance of picking a frequent consonant
    vowelKnowChance: 0.25,  // chance of picking a vowel in the puzzle
    vowelBuyChance: 0.15,   // chance of choosing to buy a vowel
  },
  medium: {
    solveThresholds: [
      { minRatio: 0.85, chance: 0.60 },
      { minRatio: 0.70, chance: 0.30 },
      { minRatio: 0.50, chance: 0.10 },
      { minRatio: 0.00, chance: 0.02 },
    ],
    correctSolveThresholds: [
      { minRatio: 0.90, chance: 0.85 },
      { minRatio: 0.75, chance: 0.55 },
      { minRatio: 0.60, chance: 0.35 },
      { minRatio: 0.40, chance: 0.15 },
      { minRatio: 0.00, chance: 0.05 },
    ],
    smartPickChance: 0.55,
    vowelKnowChance: 0.50,
    vowelBuyChance: 0.25,
  },
  hard: {
    // Aggressively solves, near-optimal letter picks, high accuracy
    solveThresholds: [
      { minRatio: 0.70, chance: 0.80 },
      { minRatio: 0.50, chance: 0.45 },
      { minRatio: 0.30, chance: 0.15 },
      { minRatio: 0.00, chance: 0.05 },
    ],
    correctSolveThresholds: [
      { minRatio: 0.90, chance: 0.98 },
      { minRatio: 0.75, chance: 0.80 },
      { minRatio: 0.60, chance: 0.60 },
      { minRatio: 0.40, chance: 0.35 },
      { minRatio: 0.00, chance: 0.15 },
    ],
    smartPickChance: 0.85,
    vowelKnowChance: 0.80,
    vowelBuyChance: 0.35,
  },
};

function getDifficultyProfile() {
  return CPU_DIFFICULTY_PROFILES[cpuDifficulty] || CPU_DIFFICULTY_PROFILES.medium;
}

function getThresholdChance(thresholds, ratio) {
  for (const t of thresholds) {
    if (ratio >= t.minRatio) return t.chance;
  }
  return 0;
}

const CPU_DELAY_MIN = 1200;
const CPU_DELAY_MAX = 2500;

function cpuDelay() {
  return CPU_DELAY_MIN + Math.random() * (CPU_DELAY_MAX - CPU_DELAY_MIN);
}

function scheduleCpuTurn() {
  if (cpuThinking) return;
  cpuThinking = true;
  setTimeout(() => {
    cpuThinking = false;
    cpuTakeTurn();
  }, cpuDelay());
}

function cpuTakeTurn() {
  const cp = players[currentPlayerIdx];
  const profile = getDifficultyProfile();

  // Decide: solve, buy vowel, or spin
  const unrevealedCount = puzzle.phrase.replace(/[^A-Z]/g, '').split('').filter(c => !revealedLetters.has(c)).length;
  const totalLetterCount = puzzle.phrase.replace(/[^A-Z]/g, '').length;
  const revealedRatio = (totalLetterCount - unrevealedCount) / totalLetterCount;

  // CPU solve chance increases as more letters are revealed
  const solveChance = getThresholdChance(profile.solveThresholds, revealedRatio);

  if (Math.random() < solveChance) {
    cpuAttemptSolve();
    return;
  }

  // Buy vowel?
  const hasUnusedVowels = [...VOWELS].some(v => !usedLetters.has(v) && puzzle.phrase.includes(v));
  if (cp.roundMoney >= 250 && hasUnusedVowels && Math.random() < profile.vowelBuyChance) {
    cpuBuyVowel();
    return;
  }

  // Spin
  setMessage(`${cp.name} spins the wheel...`);
  spinWheel();
}

function cpuPickConsonant() {
  const cp = players[currentPlayerIdx];

  // Get available consonants
  const available = CONSONANTS.filter(c => !usedLetters.has(c));
  if (available.length === 0) {
    nextPlayer();
    return;
  }

  // Smart pick: prefer consonants that are common in English, with some randomness
  const frequency = 'RSTLNDHCMPBGFWYVKJXQZ';
  const profile = getDifficultyProfile();
  let pick = null;

  if (Math.random() < profile.smartPickChance) {
    for (const c of frequency) {
      if (available.includes(c)) {
        pick = c;
        break;
      }
    }
  }
  if (!pick) {
    pick = available[Math.floor(Math.random() * available.length)];
  }

  setMessage(`${cp.name} guesses "${pick}"...`);
  setTimeout(() => {
    inputMode = 'consonant';
    guessConsonant(pick);
  }, 800);
}

function cpuFreePlay() {
  const cp = players[currentPlayerIdx];
  const available = CONSONANTS.filter(c => !usedLetters.has(c));
  if (available.length === 0) {
    nextPlayer();
    return;
  }
  const pick = available[Math.floor(Math.random() * available.length)];
  setMessage(`${cp.name} (FREE PLAY) guesses "${pick}"...`);
  setTimeout(() => {
    inputMode = 'free_consonant';
    guessConsonant(pick);
  }, 800);
}

function cpuBuyVowel() {
  const cp = players[currentPlayerIdx];
  const availableVowels = [...VOWELS].filter(v => !usedLetters.has(v));
  if (availableVowels.length === 0) return;

  // Prefer vowels that are in the puzzle
  const profile = getDifficultyProfile();
  let pick;
  const vowelsInPuzzle = availableVowels.filter(v => puzzle.phrase.includes(v));
  if (vowelsInPuzzle.length > 0 && Math.random() < profile.vowelKnowChance) {
    pick = vowelsInPuzzle[Math.floor(Math.random() * vowelsInPuzzle.length)];
  } else {
    pick = availableVowels[Math.floor(Math.random() * availableVowels.length)];
  }

  setMessage(`${cp.name} buys a vowel: "${pick}"...`);
  setTimeout(() => {
    inputMode = 'vowel';
    guessVowel(pick);
  }, 1000);
}

function cpuAttemptSolve() {
  const cp = players[currentPlayerIdx];
  const profile = getDifficultyProfile();
  const unrevealedCount = puzzle.phrase.replace(/[^A-Z]/g, '').split('').filter(c => !revealedLetters.has(c)).length;
  const totalLetterCount = puzzle.phrase.replace(/[^A-Z]/g, '').length;
  const revealedRatio = (totalLetterCount - unrevealedCount) / totalLetterCount;

  // Chance of getting it right depends on difficulty and how many letters are revealed
  const correctChance = getThresholdChance(profile.correctSolveThresholds, revealedRatio);

  setMessage(`${cp.name} wants to solve the puzzle...`);

  setTimeout(() => {
    if (Math.random() < correctChance) {
      setMessage(`${cp.name} says: "${puzzle.phrase}"!`);
      setTimeout(() => attemptSolve(puzzle.phrase), 1200);
    } else {
      const wrongGuess = generateWrongGuess();
      setMessage(`${cp.name} says: "${wrongGuess}"!`);
      setTimeout(() => attemptSolve(wrongGuess), 1200);
    }
  }, 1200);
}

function generateWrongGuess() {
  let guess = '';
  for (const ch of puzzle.phrase) {
    if (/[A-Z]/.test(ch)) {
      if (revealedLetters.has(ch)) {
        guess += ch;
      } else {
        const candidates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        guess += candidates[Math.floor(Math.random() * candidates.length)];
      }
    } else {
      guess += ch;
    }
  }
  // Make sure it's actually wrong
  if (guess === puzzle.phrase) {
    const idx = guess.split('').findIndex((c) => /[A-Z]/.test(c));
    if (idx >= 0) {
      const arr = guess.split('');
      arr[idx] = arr[idx] === 'A' ? 'B' : 'A';
      guess = arr.join('');
    }
  }
  return guess;
}

/* ═══════════════════════════════════════════════════════
   RULES MODAL
   ═══════════════════════════════════════════════════════ */
const rulesModal = $('rules-modal');
$('rules-btn-setup').addEventListener('click', () => rulesModal.classList.add('visible'));
$('rules-btn-game').addEventListener('click', () => rulesModal.classList.add('visible'));
$('rules-close').addEventListener('click', () => rulesModal.classList.remove('visible'));
rulesModal.addEventListener('click', (e) => {
  if (e.target === rulesModal) rulesModal.classList.remove('visible');
});

/* ═══════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════ */
buildWheelSegments(2);
drawWheel(0);
