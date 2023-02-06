const add = function(a,b) {
	let sum;
  sum = a + b;
  return sum;
};

const subtract = function(a,b) {
	let difference;
  difference = a - b;
  return difference;
};

const sum = function(a) {
  const given = a;
  let arrSum = 0;
  
  given.forEach (elem => {
      arrSum += elem;
  });
  return arrSum;
};

const multiply = function(a) {
  const given = a;
  let arrProd = 1;
  
  given.forEach (elem => {
      arrProd *= elem;
  });
  return arrProd;
};

const power = function(a,b) {
  const exponent = b;
  const base = a;
  let prod = 1 ;

  for (let i = 0; i != exponent; i++) {
     prod *= base;
  };

  return prod;
};

const factorial = function(a) {
  let prod = a;
  let init = a - 1;
  
  if (prod === 0) {
      return prod = 1;
  } else {
      for (let i = init; i != 0; i--) {
          prod *= i;
      };
      return prod;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
