
var drawChessboard = function(){
    var z = 8, a = 1;
    for (x=1; x <= 8; x++ ){
        for (y = a; y <= z; y++){
            if (y % 2 !== 0) {
                document.write(`<span style="width: 30px; height: 30px; background-color: skyblue; display: inline-block;"></span>`);
            } else {
                document.write(`<span style="width: 30px; height: 30px; background-color: black; display: inline-block;"></span>`);
            }
        }
        a = ++a;
        z = ++z;
        document.write(`<div></div>`)
    }
}
drawChessboard();