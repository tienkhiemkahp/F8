var price1 = 15000, price2 = 13500, price3 = 11000, a = 2, total, discount = 10 / 100;
a = a * 1;
if (typeof a == 'number' && a>0 ){
    a = a * 1;
    if(a <= 1) {
        total = price1;    
    } else if (1 < a && a <= 5) {
        total = a * price2;
    } else if ( 120 > a && a > 5 ){
        total = a * price3;
    } else if (a >= 120) {
        total = a * price3 * (1 - discount);
    }
    document.write(`số km là: ${a} </br>`)
    document.write(`số tiền phải trả là: ${total}`)    
} else {
    document.write(`số km không hợp lệ`)   
}