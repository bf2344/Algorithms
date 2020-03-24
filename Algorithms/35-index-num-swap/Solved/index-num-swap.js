// Write code to create a function that accepts an array of whole numbers
// Return a new array where the numbers and indexes are swapped

var indexNumSwap = function(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    result[num] = i;
  }

  return result;
};
