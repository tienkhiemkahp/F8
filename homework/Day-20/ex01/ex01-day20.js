var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter(function (num) {
    return arrB.indexOf(num) !== -1;
})
console.log(result);