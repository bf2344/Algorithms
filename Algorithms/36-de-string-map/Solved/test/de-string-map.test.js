var expect = chai.expect;

describe("deStringMap", function() {
  it(`should return "hello world" when given the object {"h":[0],"e":[1],"l":[2, 3, 9],"o":[4, 7]," ":[5],"w":[6],"r":[8],"d":[10]}`, function() {
    var obj = {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      " ": [5],
      w: [6],
      r: [8],
      d: [10]
    };

    var result = deStringMap(obj);

    expect(result).to.eql("hello world");
  });

  it(`should return "JavaScript rocks!" when given the object {"J":[0],"a":[1, 3],"v":[2],"S":[4],"c":[5, 13],"r":[6, 11],"i":[7],"p":[8],"t":[9]," ":[10],"o":[12],"k":[14],"s":[15],"!":[16]}`, function() {
    var obj = {
      J: [0],
      a: [1, 3],
      v: [2],
      S: [4],
      c: [5, 13],
      r: [6, 11],
      i: [7],
      p: [8],
      t: [9],
      " ": [10],
      o: [12],
      k: [14],
      s: [15],
      "!": [16]
    };

    var result = deStringMap(obj);

    expect(result).to.eql("JavaScript rocks!");
  });

  it(`should return "goodbye world!" when given the object {"g":[0],"o":[1, 2, 9],"d":[3, 12],"b":[4],"y":[5],"e":[6]," ":[7],"w":[8],"r":[10],"l":[11],"!":[13]}`, function() {
    var obj = {
      g: [0],
      o: [1, 2, 9],
      d: [3, 12],
      b: [4],
      y: [5],
      e: [6],
      " ": [7],
      w: [8],
      r: [10],
      l: [11],
      "!": [13]
    };

    var result = deStringMap(obj);

    expect(result).to.eql("goodbye world!");
  });
});
