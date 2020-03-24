// Write code to create a function that accepts a stringMap object, and returns the string version

var deStringMap = function(obj) {
  var result = [];

  for (var key in obj) {
    var arr = obj[key];

    for (var i = 0; i < arr.length; i++) {
      var charIndex = arr[i];
      result[charIndex] = key;
    }
  }

  return result.join("");
};
