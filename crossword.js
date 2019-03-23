/* eslint "prefer-destructuring": 0 */
// let crossword = [
//   ['+-++++++++'],
//   ['+-++++++++'],
//   ['+-++++++++'],
//   ['+-----++++'],
//   ['+-+++-++++'],
//   ['+-+++-++++'],
//   ['+++++-++++'],
//   ['++------++'],
//   ['+++++-++++'],
//   ['+++++-++++'],
// ];

// let crossword = [
//   ['XXXXXX-XXX'],
//   ['XX------XX'],
//   ['XXXXXX-XXX'],
//   ['XXXXXX-XXX'],
//   ['XXX------X'],
//   ['XXXXXX-X-X'],
//   ['XXXXXX-X-X'],
//   ['XXXXXXXX-X'],
//   ['XXXXXXXX-X'],
//   ['XXXXXXXX-X'],
// ];

let crossword = [
  ['+-++++++++'],
  ['+-++-+++++'],
  ['+-------++'],
  ['+-++-+++++'],
  ['+-++-+++++'],
  ['+-++-+++++'],
  ['++++-+++++'],
  ['++++-+++++'],
  ['++++++++++'],
  ['----------'],
];

crossword = crossword.map(g => g[0].split(''));
// const answers = 'LONDON;DELHI;ICELAND;ANKARA';
// const answers = 'ICELAND;MEXICO;PANAMA;ALMATY';
const answers = 'CALIFORNIA;NIGERIA;CANADA;TELAVIV';

function getDirection(grid, i, j) {
  if (grid[i][j + 1] === '-') return 'across';
  return 'down';
}

function getWordLength(grid, i, j, dir) {
  if (dir === 'across') {
    let k = j + 1;
    while (grid[i][k] && grid[i][k] !== '+' && grid[i][k] !== 'X') k++;
    return k - j;
  }
  let k = i + 1;
  while (grid[k] && grid[k][j] !== '+' && grid[k][j] !== 'X') k++;
  return k - i;
}

const findNextWordStart = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return [];
};

const insertWord = (grid, word, i, j, dir) => {
  for (const char of word) {
    if (grid[i][j] === '-') {
      grid[i][j] = char;
    } else if (grid[i][j] !== char) {
      return false;
    }
    if (dir === 'across') j++;
    else i++;
  }
  return true;
};

const buildLengthsMap = (grid, words) => {
  const lengths = {};
  for (let i = 0; i < words.length; i++) {
    const length = words[i].length;
    if (lengths[length]) lengths[length].push(words[i]);
    else lengths[length] = [words[i]];
  }
  return lengths;
};

const crosswordPuzzle = (grid, words) => {
  words = words.split(';');
  const lengths = buildLengthsMap(grid, words);

  const [i, j] = findNextWordStart(grid);
  const dir = getDirection(grid, i, j);
  const wordLength = getWordLength(grid, i, j, dir);
  
  // start recursive backtracking here...
  for (let k = 0; k < lengths[wordLength].length; k++) {
    const word = lengths[wordLength][k];

    // insert word in first position of a new grid
    const gridCopy = JSON.parse(JSON.stringify(grid));
    insertWord(gridCopy, word, i, j, dir);
    // make a copy of lengths and reduce words of wordLength by first word
    const temp = lengths[wordLength].slice();
    temp.splice(k, 1);
    const lengthsCopy = Object.assign({}, lengths);
    lengthsCopy[wordLength] = temp;

    // call solve and see if we found a solution
    const solvedGrid = solve(gridCopy, lengthsCopy);
    if (solvedGrid) return solvedGrid;
  }

  return grid;
};

const getRemainingWordCount = words => Object.values(words).reduce((accum, w) => accum + w.length, 0);

const solve = (grid, words) => {
  console.log(grid);
  let [i, j] = findNextWordStart(grid);
  const dir = getDirection(grid, i, j);

  let wordsToTry;
  let wordLength;

  if (dir === 'across') {
    wordLength = getWordLength(grid, i, j, 'across');
    // check if first char of word is part of another word
    if (j > 0 && grid[i][j - 1] !== '+' && grid[i][j - 1] !== 'X') {
      wordLength++;
      wordsToTry = words[wordLength].filter(word => word.startsWith(grid[i][j - 1]));
      j--;
    } else {
      wordsToTry = words[wordLength];
    }
  } else {
    wordLength = getWordLength(grid, i, j, 'down');
    if (i > 0 && grid[i - 1][j] !== '+' && grid[i - 1][j] !== 'X') {
      wordLength++;
      wordsToTry = words[wordLength].filter(word => word.startsWith(grid[i - 1][j]));
      i--;
    } else {
      wordsToTry = words[wordLength];
    }
  }
  for (let k = 0; k < wordsToTry.length; k++) {
    const gridCopy = JSON.parse(JSON.stringify(grid));
    const res = insertWord(gridCopy, wordsToTry[k], i, j, dir);
    if (!res) return false;

    // check if this is the last word and return true
    if (getRemainingWordCount(words) === 1) return gridCopy;
    
    const temp = words[wordLength].slice();
    temp.splice(k, 1);
    const wordsCopy = Object.assign({}, words);
    wordsCopy[wordLength] = temp;

    // call solve and see if we found a solution
    const solvedGrid = solve(gridCopy, wordsCopy);
    if (solvedGrid) return solvedGrid;
  }
  return false;
};

console.log(crosswordPuzzle(crossword, answers));
