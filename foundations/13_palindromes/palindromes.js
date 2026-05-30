const palindromes = function (str) {
    let strArr = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "").split("");
    // console.log(strArr);
    let strArrCopy = strArr.slice();

    strArrCopy.reverse();
    // console.log(strArrCopy);

    for (let i = 0; i < strArr.length; i++) {
        if (strArr.at(i) !== strArrCopy.at(i)) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
