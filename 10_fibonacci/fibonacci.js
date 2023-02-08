const fibonacci = function(toFib) {
    let a = 0;
    let b = 1;
    let c;
    const fibArr = [1];

    if (parseInt(toFib) < 0) {
        return "OOPS";
    } else {
        for(let i = 1; i !== parseInt(toFib); i++) {
            c = a + b;
            fibArr.push(c);
            a = b;
            b = c;
        };
         //  return c;
        return parseInt((fibArr.slice(-1)).join(''));
    };
};

// Do not edit below this line
module.exports = fibonacci;
