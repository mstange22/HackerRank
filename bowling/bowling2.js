class Frame {
  constructor() {
    this.score = 0;
    this.rolls = [];
  }
}

class BowlingGame {
  constructor() {
    this.frames = new Array(11);
    for (let i = 0; i <= 10; i++) {
      this.frames[i] = new Frame();
    }
    this.frameNum = 1;
    this.rollNum = 1;
  }

  roll(pins) {
    this.frames[0].rolls.push(pins);
  }

  score() {
    this.frames[0].rolls.forEach((pins) => {
      this.frames[this.frameNum].rolls.push(pins);
      if (this.frameNum !== 10 && (this.rollNum === 2 || pins === 10)) {
        this.frameNum++;
        this.rollNum = 1;
      } else {
        this.rollNum++;
      }
    });
    for (let i = 1; i < this.frames.length; i++) {
      console.log(`Frame #${i}: ${this.frames[i].rolls.toString()}`);
      this.frames[i].score = this.frames[i].rolls.reduce((a, e) => a + e, 0);

      // mark
      if (this.frames[i].score === 10) {
        // spare
        if (this.frames[i].rolls.length === 2) {
          this.frames[i].score += this.frames[i + 1].rolls[0];
        // strike!
        } else if (this.frames[i].rolls.length === 1) {
          // following frame has at least two rolls
          if (this.frames[i + 1].rolls.length >= 2) {
            this.frames[i].score += this.frames[i + 1].rolls.slice(0, 2).reduce((a, e) => a + e, 0);
          // following frame has a strike
          } else {
            this.frames[i].score += (this.frames[i + 1].rolls[0] + this.frames[i + 2].rolls[0]);
          }
        }
      }
      console.log(`Frame #${i} score: ${this.frames[i].score}`);
      this.frames[0].score += this.frames[i].score;
    }
    return this.frames[0].score;
  }
}

const game = new BowlingGame();
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0
// const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]; // 90
// const rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10
// const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16
// const rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 31
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7]; // 17
// const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10
// const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 26
// const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 81
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1]; // 18
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3]; // 20
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]; // 30
// const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10]; // 20
const rolls = [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9]; // ?
// const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // 300

rolls.forEach(roll => game.roll(roll));
console.log(game.score());
