require ( './helpers.js' );

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    if (it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    }));

    else if (it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    }));

    else if (it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    }));
  });

  describe('distanceFromHqInFeet()', function() {
    if (it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    }));

    else if (it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    }));

    else if (it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    }));
  });

  describe('distanceTravelledInFeet()', function() {
    if (it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    }));

    else if (it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    }));

    else if (it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    }));
  });

  describe('calculatesFarePrice(start, destination)', function() {
    if (it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    }));

    else if (it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    }));

    else if (it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    }));

    else if (it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    }));
  });
});
