// Write code to create a function that accepts a string containing opening and closing parentheses. Return false if each left parenthesis has a matching right parenthesis, and each right parenthesis has a matching left parenthesis

var matchingParens = function(str) {
  var left = 0;
  var right = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === "(") {
      left++;
    } else if (char === ")") {
      right++;
    }
  }

  if (left === right) {
    return true;
  } else {
    return false;
  }
};
