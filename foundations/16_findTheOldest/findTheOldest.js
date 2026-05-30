const findTheOldest = function (arrPerson) {
    return arrPerson.sort((personA, personB) => {
        let ageA;
        let ageB;

        if (!personA.yearOfDeath) {
            let currYear = new Date().getFullYear();
            ageA = currYear - personA.yearOfBirth;
        } else {
            ageA = personA.yearOfDeath - personA.yearOfBirth;
        }

        if (!personB.yearOfDeath) {
            let currYear = new Date().getFullYear();
            ageB = currYear - personB.yearOfBirth;
        } else {
            ageB = personB.yearOfDeath - personB.yearOfBirth;
        }

        return -1 * (ageA - ageB);
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
