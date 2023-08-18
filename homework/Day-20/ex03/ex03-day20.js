var arr = [["a", 1, true], ["b", 2, false]]
var result = [[], [], []];
for (i=0; i<arr.length; i++) {
    var subArr = arr[i];
    for (j=0; j <subArr.length; j++) {
        var value = subArr[j];
        if (typeof value === 'string') {
            result[0].push(value);
        }
         else if (typeof value === 'number') {
            result[1].push(value);
        }
        else if (typeof value === 'boolean') {
            result[2].push(value);
        }
    }
}
console.log(result)