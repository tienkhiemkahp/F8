function primeNumber(inputNumber){
    var isPrime = true; 
    if (inputNumber > 2 && inputNumber % 1 === 0){
        for(i = 2; i < inputNumber; i++){
            if (inputNumber % i === 0){
                isPrime = false;
            }
        }
    } else {
        isPrime = false;
    }
    console.log(isPrime)
    return isPrime;
}
if (primeNumber(13) === true) {
    document.write(`đây là số nguyên tố`);
} else {
    document.write(`đây không phải số nguyên tố`);
}