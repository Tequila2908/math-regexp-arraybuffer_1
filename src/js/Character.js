
/* eslint no-underscore-dangle: 0 */

export default class Character {
  constructor(name) {
    this.name = String(name);
    this.attack = 100;
    this.health = 100;
    this.level = 1;
  }

  get attack() {
    let attack = this._attack - (this.distance - 1) * 10;

    if (this.stoned) attack -= Math.log2(this.distance) * 5;
    return attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}
