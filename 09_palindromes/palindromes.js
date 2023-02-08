const palindromes = function (toReverse) {

    const strArray = ((toReverse.toUpperCase()).replace(/\s/g, '')).split('');
    const mustRe = ['!', '.', '?', ',', "'"];
    const newArray = [];
    
    strArray.forEach(element => { 
        if (!mustRe.includes(element)) { 
                newArray.push(element); 
        }    
    } 
    );

    const origArray =  newArray.join('');
    newArray.reverse();
    const outPut = newArray.join('');

    if ( origArray  === outPut ) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;
