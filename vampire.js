class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let vampTotal = this.offspring.length;
    if (vampTotal === undefined || vampTotal === null) {
      return 0;
    } return vampTotal;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVampires = 0;
    let currentVamp = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOfVampires++;
    } return numOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.offspring === null)
      return false;
    for (let i = 0; i < this.numberOfOffspring; i++)  {
      if (vampire.name === this.offspring[i].name)
        return true;
    } return false;  /*NOT CHECKING: offspring of offspring*/
  }
  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if(name === this.name) {
      return this;
    }
    for (let vamp of this.offspring) {
      let search = vamp.vampireWithName(name)
      if (search) {
        return search;
      }
    } return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let vampTotal = 0;
    for (let vamp of this.offspring) {
      vampTotal += vamp.totalDescendents + 1;
    } return vampTotal;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennials = [];
    if ( this.yearConverted > 1980) {
      millennials.push(this);
    } for (let vamp of this.offspring) {
      millennials = millennials.concat(vamp.allMillennialVampires);
    }
 
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
};

module.exports = Vampire;

