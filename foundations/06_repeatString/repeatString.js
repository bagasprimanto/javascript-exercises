const repeatString = function (str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let outputStr = '';

    for (let i = 0; i < num; i++) {
        outputStr += str;
    }

    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
