// Pixel-art frames for the side-rail character, facing right.
// Each frame is built from shared head/torso rows plus leg and arm variants,
// then given a 1px outline and flattened into one SVG path per colour.

export const PALETTE = {
  h: '#17110e', // hair
  H: '#33271f', // hair highlight (curls)
  s: '#b57a55', // skin
  S: '#98613f', // skin shade
  e: '#1a1210', // eyes
  w: '#f1f4f8', // shirt / teeth
  t: '#7d1f2d', // tie
  j: '#22325a', // blazer
  J: '#18233f', // blazer shade
  p: '#1b2440', // trousers
  b: '#3d281b', // shoes
  l: '#b9c3d0', // laptop body
  L: '#6f7b8c', // laptop lid
  g: '#5ec8f2', // screen glow
};

const HEAD = [
  '....hHhhHhh.....',
  '..hhHhhhhHhhh...',
  '.hhhhhHhhhhHhhh.',
  '.hHhhhhhhhhhhHh.',
  '.hhhhhsssssssh..',
  '.hhhhSssesses...',
  '.hhhhSssesses...',
  '.hhhhsssssssss..',
  '..hhhsssswwss...',
  '....hsssssss....',
];

const TORSO = [
  '.......SSS......',
  '.....jjjjwtwj...',
  '....jjjjjwtwj...',
  '....jjjjjjtjj...',
  '....jjjjjjtjj...',
  '....jjjjjjjjj...',
  '....JJJJJJJJJ...',
  '....ppppppppp...',
];

const LEGS = {
  stand: ['.....ppp.ppp....', '.....ppp.ppp....', '.....ppp.ppp....', '.....bbb.bbbb...'],
  leap: ['...pppp..pppp...', '..ppp......ppp..', '.bbb........bbbb', '................'],
  tuck: ['....pppp.pppp...', '...pppp...pppp..', '...bbb.....bbbb.', '................'],
};

const BACK_DOWN = [[3, 12, 'J'], [3, 13, 'J'], [3, 14, 'J'], [3, 15, 's']];
const FRONT_UP = [[13, 11, 'j'], [14, 10, 'j'], [14, 9, 'j'], [14, 8, 's'], [14, 7, 's']];
const FRONT_UP_TILT = [[13, 11, 'j'], [14, 10, 'j'], [15, 9, 'j'], [15, 8, 's'], [15, 7, 's']];
const BACK_UP = [[3, 11, 'J'], [2, 10, 'J'], [1, 9, 'J'], [1, 8, 's']];
const BACK_HOLD = [[3, 12, 'J'], [3, 13, 'J'], [3, 14, 's']];
const LAPTOP = [
  [15, 9, 'L'], [15, 10, 'L'], [15, 11, 'L'], [15, 12, 'L'], [15, 13, 'L'],
  [14, 10, 'g'], [14, 11, 'g'], [14, 12, 'g'],
  [12, 14, 'l'], [13, 14, 'l'], [14, 14, 'l'], [15, 14, 'l'],
];
const BLINK = [[8, 6, 's'], [11, 6, 's']];
// Closed laptop carried under the front arm.
const CARRY = [
  [13, 12, 'j'], [13, 13, 'j'], [13, 14, 's'],
  [14, 11, 'L'], [14, 12, 'l'], [14, 13, 'l'], [14, 14, 'l'], [14, 15, 'L'],
  [15, 11, 'L'], [15, 12, 'L'], [15, 13, 'L'], [15, 14, 'L'], [15, 15, 'L'],
];
// Laptop hugged flat against the chest for flips.
const HUG = [
  [3, 12, 'J'], [3, 13, 's'],
  [9, 13, 'L'], [10, 13, 'L'], [11, 13, 'L'], [12, 13, 'L'], [13, 13, 'L'], [14, 13, 'L'],
  [9, 14, 'l'], [10, 14, 'l'], [11, 14, 'l'], [12, 14, 'l'], [13, 14, 'l'], [14, 14, 'l'],
  [13, 12, 's'],
];
// Laptop raised overhead in the front hand.
const RAISE = [[13, 4, 'l'], [14, 4, 'l'], [15, 4, 'l'], [13, 5, 'L'], [14, 5, 'L'], [15, 5, 'L'], [14, 6, 's']];

function compose(legs, pixels) {
  const grid = [...HEAD, ...TORSO, ...LEGS[legs]].map((row) => row.split(''));
  pixels.forEach(([x, y, c]) => {
    grid[y][x] = c;
  });
  return grid;
}

// Pads the grid by one cell and marks every empty cell touching the figure as outline.
function outline(grid) {
  const h = grid.length + 2;
  const w = grid[0].length + 2;
  const out = Array.from({ length: h }, (_, y) =>
    Array.from({ length: w }, (_, x) => (grid[y - 1] && grid[y - 1][x - 1]) || '.')
  );
  const filled = (x, y) => out[y] && out[y][x] && out[y][x] !== '.' && out[y][x] !== 'o';
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      if (out[y][x] === '.' && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1))) {
        out[y][x] = 'o';
      }
    }
  }
  return out;
}

function toPaths(grid) {
  const byColor = {};
  grid.forEach((row, y) =>
    row.forEach((c, x) => {
      if (c === '.') return;
      byColor[c] = (byColor[c] || '') + `M${x} ${y}h1v1h-1z`;
    })
  );
  return Object.entries(byColor).map(([c, d]) => ({ c, d }));
}

const DEFS = {
  carry: ['stand', [...BACK_DOWN, ...CARRY]],
  blink: ['stand', [...BACK_DOWN, ...CARRY, ...BLINK]],
  tuck: ['tuck', HUG],
  leap: ['leap', [...BACK_UP, ...FRONT_UP, ...RAISE]],
  wave1: ['stand', [...BACK_DOWN, ...FRONT_UP]],
  wave2: ['stand', [...BACK_DOWN, ...FRONT_UP_TILT]],
  cheer: ['stand', [...BACK_UP, ...FRONT_UP, ...RAISE]],
  type1: ['stand', [...BACK_HOLD, ...LAPTOP, [13, 12, 'j'], [14, 13, 's']]],
  type2: ['stand', [...BACK_HOLD, ...LAPTOP, [13, 12, 'j'], [13, 13, 's']]],
};

export const FRAMES = Object.fromEntries(
  Object.entries(DEFS).map(([name, [legs, pixels]]) => [name, toPaths(outline(compose(legs, pixels)))])
);

export const SPRITE_W = HEAD[0].length + 2;
export const SPRITE_H = HEAD.length + TORSO.length + LEGS.stand.length + 2;
