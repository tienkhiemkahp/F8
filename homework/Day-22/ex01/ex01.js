function calculateSum() {
    var sum = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      var num = parseFloat(arguments[i]);
  
      if (isNaN(num)) {
        return "Error: Invalid data!";
      }
  
      sum += num;
    }
  
    return sum;
  }
  var result = calculateSum(1, 2, 3, 4, 5);
  console.log(result);
  
  var errorResult = calculateSum(1, 'abc', 3, 4, 5);
  console.log(errorResult);  