const sumAll = function(a, b) {
    let sum = 0;
    let aInput = typeof a;
    let bInput = typeof b;
    
 
    if ((aInput !== 'number' || bInput !== 'number') || a < 0 || b < 0) {
        return 'ERROR';
    } else {
        if (a < b) {
            for(let i = a; i <= b; i++){
                sum += i;
            }
            return sum;
        } else {
            for(let i = b; i <= a; i++){
                sum += i;
            }
            return sum;
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
