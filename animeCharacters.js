// Anime Character

// const animeAttributes = {
//   name: '',
//   homeTown: '',
//   superPower: '',
//   weakness: '',
//   health: '',
//   name: '',
//   powerLev: '',
// };

class AnimeCharacter {
  constructor(name, homeTown, superPower, weakness, powerLev) {
    this.name = name;
    this.homeTown = homeTown;
    this.superPower = superPower;
    this.weakness = weakness;
    this.powerLev = powerLev;
  }

  dodge() {
    console.log(`${this.name} just dodge your attack`);
  }

  powerUp(increase) {
    if (this.powerLev <= 100) {
      for (let i = 0; i <= increase; i++) {
        this.powerLev += 1;
      }
      console.log(`${this.name} power level is now at ${this.powerLev}`);
    } else {
      console.log('At max power level');
    }
  }
  specialAttack (self, opponent) {
    // create a console.log() explaining your attack and the amount of damage to an opponent
    // your special should minus 40% from your powerLevel
    //create a conditional to ensure that powerLevel is at 100%.
    if(self.powerLev === 100) {
      console.log(`${self.name} attacked ${opponent.name} with `)
      self.powerLev = self.powerLev * (1 - .40);
      console.log(`Your power level is ${self.powerLevel}`)
    }else{
      console.log(`Don't have enough power for attack`);
    }

  }
}

const staticShock = new AnimeCharacter(
  'Static Shock',
  'Dakota',
  'electrocity',
  'bang babies',
  100
);

const opponent = new AnimeCharacter('Opponent',   'Kota',
'fire',
'fire babies',
100)

console.log(staticShock.name);
console.log(staticShock.specialAttack(staticShock, opponent));
console.log(opponent);
