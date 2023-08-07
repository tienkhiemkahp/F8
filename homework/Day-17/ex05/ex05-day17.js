var z = 0;
function drawTriangle(n) {
    for (i = 1; i <= n; i++){
        for (a = 1; a <= i; a++){
            z = z + 1;
            document.write(`<span>${z}</span>`);
        }
        document.write(`<div></div>`);
    }
};

drawTriangle(5);