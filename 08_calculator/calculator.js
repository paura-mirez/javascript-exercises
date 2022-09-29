const add = function(a,b) {
	return (a + b) ;
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(array) {
	return array.reduce((previousValue, currentValue) => previousValue + currentValue,
    0);
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
}
return total;
};

const power = function(base, exponent) {
	let total = base;
  for (let i=0; i < (exponent-1); i++) {
    total = total * base
  }
  return total;

};

const factorial = function(num) {
	let factorial = num;

  if (num==0||num==1){
    return 1;
  }
  else {
    let i = 1;
    while (i<num) {
      factorial = factorial * i;
      i++;
    }
/*   for (let i=1; i <= num ; i++) {
      factorial = factorial * i;
      return factorial;
    } */
  }
  return factorial;
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
