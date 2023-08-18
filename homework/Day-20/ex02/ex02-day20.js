var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = function(inputArr){
    return inputArr.reduce( function(accumulator, currentValue) {
        return accumulator.concat((Array.isArray(currentValue) ? result(currentValue) : currentValue));
    }, []);
}
console.log(result(arr));