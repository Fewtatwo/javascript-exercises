const repeatString = function(word, count) {

    let input = word;
    let toReturn = "";
    
    if (count < 0) {
        return toReturn = "ERROR";
    } else {
        while (count > 0) {
            toReturn = toReturn + input;
            count--;
        }
        return toReturn;
    }
};

// Do not edit below this line
module.exports = repeatString;
