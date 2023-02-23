class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentGuess = Math.floor((this.min + this.max + 1) / 2);
        return this.currentGuess;
    }

    lower() {
       this.max = this.currentGuess;
    }

    greater() {
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;
