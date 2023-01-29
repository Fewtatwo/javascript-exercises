const reverseString = function(toReverse) {

    let oldStr = toReverse;

    const strArray = oldStr.split('');

    const revArray = strArray.reverse();

    const reversed = revArray.join('');
    
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
