var expect = chai.expect;

describe("matchingParens", function() {
  it("should return true if a string has all parentheses closed", function() {
    var str = "for (var i = 0; i < 10; i++) { console.log(i); }";

    var result = matchingParens(str);

    expect(result).to.eql(true);
  });

  it("should return false if a string is missing parentheses", function() {
    var str = "[1, 2 , 3].forEach(function(i) { console.log(i) }";

    var result = matchingParens(str);

    expect(result).to.eql(false);
  });
});
