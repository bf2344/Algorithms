var expect = chai.expect;

describe("indexNumSwap", function() {
  it(`should return [1, 2, 3, 0] when given [3, 0, 1, 2]`, function() {
    var arr = [3, 0, 1, 2];

    var result = indexNumSwap(arr);

    expect(result).to.eql([1, 2, 3, 0]);
  });

  it(`should return [1, 5, 2, 4, 6, 8, 7, 3, 0] when given [8, 0, 2, 7, 3, 1, 4, 6, 5]`, function() {
    var arr = [8, 0, 2, 7, 3, 1, 4, 6, 5];

    var result = indexNumSwap(arr);

    expect(result).to.eql([1, 5, 2, 4, 6, 8, 7, 3, 0]);
  });

  it(`should return [1, 4, 2, 3, 0] when given [4, 0, 2, 3, 1]`, function() {
    var arr = [4, 0, 2, 3, 1];

    var result = indexNumSwap(arr);

    expect(result).to.eql([1, 4, 2, 3, 0]);
  });
});
