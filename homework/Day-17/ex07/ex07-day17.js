var drawMultiplicationTable = function (){
    for (i = 1; i <= 10; i++){
        for (a = 1; a <= 10; a++){
            result = i * a;
            document.write(`<div>${i} x ${a} = ${result}</div>`)
        }

        document.write(`<div style="width: 100%; height: 10px;"></div>`)
    }
}
drawMultiplicationTable()