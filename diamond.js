const getDots = (numDots) => {
  let dots = '';
  for (let i = 0; i < numDots; i++) {
    dots += '.';
  }
  return dots;
};

const getALine = (dotCount) => {
  const dots = getDots(dotCount);
  return `${dots}A${dots}`;
};

const getLetterLine = (letter, dotCount) => {
  const dots = getDots(dotCount);
  return `${letter}${dots}${letter}`;
};

const getOtherLine = (letter, insideDotCount, outsideDotCount) => {
  const outsideDots = getDots(outsideDotCount);
  const insideDots = getDots(insideDotCount);
  return `${outsideDots}${letter}${insideDots}${letter}${outsideDots}`;
};

const diamond = (letter) => {
  const res = [];
  const diff = letter.charCodeAt() - 'A'.charCodeAt();
  let outsideDotCount = diff;
  let currentLetter = 'A';
  // create each line
  for (let i = 0; i <= 2 * diff; i++) {
    // letter line
    if (currentLetter === 'A') {
      res.push(getALine(outsideDotCount));
    } else if (currentLetter === letter) {
      res.push(getLetterLine(currentLetter, (2 * diff) - 1));
    } else {
      const insideDotCount = (2 * diff) - (outsideDotCount * 2) - 1;
      res.push(getOtherLine(currentLetter, insideDotCount, outsideDotCount));
    }

    // update outsideDotCount & currentLetter
    if (i < diff) {
      outsideDotCount -= 1;
      currentLetter = String.fromCharCode(currentLetter.charCodeAt() + 1);
    } else {
      outsideDotCount += 1;
      currentLetter = String.fromCharCode(currentLetter.charCodeAt() - 1);
    }
  }
  return res;
};

console.log(diamond('A'));
