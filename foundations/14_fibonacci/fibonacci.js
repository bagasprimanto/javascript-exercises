const fibonacci = function (n) {
    if (n < 0) return "OOPS";
    if (+n === 0) return 0;
    if (+n === 1) return 1;

    let prevTerm = 0;
    let currTerm = 1;
    let i = 2;

    while (i <= +n) {
        let temp = currTerm;
        currTerm += prevTerm;
        prevTerm = temp;
        i++;
    }

    return currTerm;
}

// Do not edit below this line
module.exports = fibonacci;

/* 
    n = 0;
    i = 1, 1 <= 0 -> term = 0 ok

    n = 1;
    i = 1, 1 <= 1 -> term = 0 + 1 = 1
    return term = 1

    n = 2;
    i = 2, 2 <= 2 -> 
        currTerm = 0 + 1 = 1
    i = 3, 3 <= 2 ->
    return currTerm = 1

    n = 4;
    i = 2, 2 <= 4 ->
        currTerm = 0 + 1 = 1;
        prevTerm = 1;
    i = 3, 3 <= 4 ->
        currTerm = 1 + 1 = 2
        prevTerm = 1;
    i = 4, 4 <= 4 ->
        currTerm = 2 + 1 = 3
        prevTerm = 2
    i = 5, 5 <= 4
    return currTerm = 3
*/