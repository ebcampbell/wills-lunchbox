

class LunchBox {
  constructor({owner, madeOf, shape, color}) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.handle = true;
    this.snacks = [];
  }
  acquireSnack(snackObj) {
    this.snacks.push(snackObj);
    snackObj.isInLunchBox = true;
  }

  findHealthySnacks() {
    // return an array datatype of healthy snack objects
    // snack.healthy
    var healthySnacks = [];

    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].healthy === true) {
        healthySnacks.push(this.snacks[i]);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
