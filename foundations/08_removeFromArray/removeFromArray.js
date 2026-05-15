const removeFromArray = function (arr) {
    const valuesToRemove = Array.prototype.slice.call(arguments, 1);

    for (const value of valuesToRemove) {
        while (arr.includes(value)) {
            let deleteIndex = arr.findIndex(elem => elem === value);
            arr.splice(deleteIndex, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
