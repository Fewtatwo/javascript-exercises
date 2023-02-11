const findTheOldest = function(people) {
    return people.reduce(( prevPersonAge, currPersonAge) => {
        const oldestAge = getAge(prevPersonAge.yearOfBirth, prevPersonAge.yearOfDeath);
        const currentAge = getAge(currPersonAge.yearOfBirth, currPersonAge.yearOfDeath);
        return oldestAge < currentAge ? currPersonAge : prevPersonAge;
    }); 
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
