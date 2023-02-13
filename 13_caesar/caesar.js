const caesar = function(word, shiftTo) {

    const sampText = word;
    let newArr = [];
    let curLet;
    let curShift;
    let shiftHowManny = shiftTo;

    if (shiftHowManny < 0) {
        for (let i = 0; i != sampText.length; i++) {

            curLet = sampText.charCodeAt(i);

            if ((curLet < 65) || ((curLet > 90) && (curLet < 97)) || ((curLet > 122) && (curLet < 128))) {
                newArr.push(String.fromCharCode(curLet));
            } else {
                curShift = negShift(curLet, shiftHowManny);
                newArr.push(String.fromCharCode(curShift));
            };
        };
    } else {
        for (let i = 0; i != sampText.length; i++) {

            curLet = sampText.charCodeAt(i);

            if ((curLet < 65) || ((curLet > 90) && (curLet < 97)) || ((curLet > 122) && (curLet < 128))) {            newArr.push(String.fromCharCode(curLet));
            } else {
                curShift = posiShift(curLet, shiftHowManny);
                newArr.push(String.fromCharCode(curShift));
            };
        };
    };

    return newArr.join('');

    // for Negative Shift
    function negShift(a, b) {
        let c = a;
        for (let n = -1; n >= b; n--) {
            let b;
            a -= 1;

            // for UpperCase
            if ( a < 65 && c < 97) {
                b = 91
                a = b - 1;
                b = a;
            // for LowerCase
            } else if ((a < 97) && (c > 97)) {
            
                b = 123;
                a = b - 1;
                b = a;
            };

        };
        return a;
    };

    // for Positive Shift
    function posiShift(a, b) {
        let c = a;
    
        for (let n = 1; n <= b; n++) {
            let b;
            a += 1;
        
            // for UpperCase
            if ( (a > 90) && (c < 97)) {
                b = 64;
                a = b + 1;
                b = a;
            // for LowerCase
            } else if (a > 122 && c > 97) {
                b = 96;
                a = b + 1;
                b = a;
            };
        }
        return a;
    };

};

// Do not edit below this line
module.exports = caesar;
