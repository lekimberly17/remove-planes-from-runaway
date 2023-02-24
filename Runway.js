class Runway {
  static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;

  constructor(name) {
    this.name = name;
    this.planes = [];
  }

  add(plane) {
    if (this.planes.length >= Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
      throw new Error('Runway at full capacity!');
    }
    this.planes.push(plane);
  }

  remove(plane) {
    const index = this.planes.indexOf(plane);
    if (index === -1) {
      throw new Error('Plane not found on this runway!');
    }
    this.planes.splice(index, 1);
  }
}

module.exports = Runway;
