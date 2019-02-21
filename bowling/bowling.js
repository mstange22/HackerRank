class BowlingGame {
  constructor() {
    this.rolls = [];
    this.gameScore = 0;
    this.frame = 1;
    this.rollNum = 1;
    this.spare = 0;
    this.strike1 = 0;
    this.strike2 = 0;
    this.pinsRemaining = 10;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    this.rolls.forEach((pins) => {
      // console.log(`Frame: ${this.frame}, Roll #${this.rollNum}, Pins: ${pins}`);
      this.gameScore += pins;

      // handle carryovers
      if (this.spare === 1 && this.rollNum !== 3) {
        this.gameScore += pins;
        this.spare -= 1;
      } else {
        if (this.strike1 > 0) {
          this.gameScore += pins;
          this.strike1 -= 1;
        }
        if (this.strike2 > 0) {
          this.gameScore += pins;
          this.strike2 -= 1;
        }
      }
      // STRIKE!
      if (pins === 10) {
        if (this.frame !== 10) {
          if (this.strike1 > 0) {
            this.strike2 = 2;
          } else {
            this.strike1 = 2;
          }
          this.frame++;
          this.rollNum = 1;
        } else {
          // handle 10th frame strike by giving bonus rolls
          this.rollNum = 3;
        }
        this.pinsRemaining = 10;
        // SPARE
      } else if (pins === this.pinsRemaining) {
        this.spare = 1;
        this.pinsRemaining = 10;
        // move to next frame and reset rolls
        if (this.frame !== 10) {
          this.frame++;
          this.rollNum = 1;
        } else {
          // handle 10th frame spare by giving bonus roll
          this.rollNum = 3;
        }
      } else if (this.rollNum === 1) {
        this.rollNum = 2;
        this.pinsRemaining -= pins;
      } else if (this.rollNum === 2) {
        this.rollNum = 1;
        this.pinsRemaining = 10;
        this.frame++;
      }
    });
    return this.gameScore;
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
// const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // 300
const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // 300

rolls.forEach(roll => game.roll(roll));

console.log(game.score());
