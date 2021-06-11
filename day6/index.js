// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

var is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

