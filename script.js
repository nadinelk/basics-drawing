// num of characters
// var main = function (input) {
//   var counter = 0;
//   var myOutputValue = "";
//   while (counter < input) {
//     emojis = myOutputValue + "👍";
//     myOutputValue = emojis;
//     counter = counter + 1;
//   }
//   return myOutputValue;
// };

// square
var main = function (input) {
  var numOfRows = 0;
  var myOutputValue = "";
  while (numOfRows < input) {
    var counter = 0;
    while (counter < input) {
      emojis = myOutputValue + "👍";
      myOutputValue = emojis;
      counter = counter + 1;
    }
    myOutputValue = myOutputValue + "<br>";
    numOfRows = numOfRows + 1;
  }
  return myOutputValue;
};
