const Runway = require('./runway');

describe('Runway', () => {
    it('should have a maximum capacity of 100 planes', () => {
      expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    });
  
    it('should be able to be initialized with a name', () => {
      const runway = new Runway('Runway 1');
      expect(runway.name).toBe('Runway 1');
    });
  
    it('should be able to add planes to the runway', () => {
      const runway = new Runway('Runway 1');
      runway.add('Plane 1');
      expect(runway.planes.length).toBe(1);
      expect(runway.planes[0]).toBe('Plane 1');
    });
  
    it('should throw an error when trying to add a plane to a full runway', () => {
      const runway = new Runway('Runway 1');
      for (let i = 0; i < Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS; i++) {
        runway.add(`Plane ${i}`);
      }
      expect(() => {
        runway.add('Extra plane');
      }).toThrowError('Runway at full capacity!');
    });
  
    it('should be able to remove planes from the runway', () => {
      const runway = new Runway('Runway 1');
      runway.add('Plane 1');
      runway.remove('Plane 1');
      expect(runway.planes.length).toBe(0);
    });
  
    it('should throw an error when trying to remove a plane that is not on the runway', () => {
      const runway = new Runway('Runway 1');
      expect(() => {
        runway.remove('Plane 1');
      }).toThrowError('Plane not found on this runway!');
    });
  
    it('should throw an error when trying to remove a plane from an empty runway', () => {
      const runway = new Runway('Runway 1');
      expect(() => {
        runway.remove('Plane 1');
      }).toThrowError('Plane not found on this runway!');
    });
  });