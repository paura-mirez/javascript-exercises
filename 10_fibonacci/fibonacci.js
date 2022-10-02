const fibonacci = function(num) {
    num=(num*1);
    if (num<0) {
        return "OOPS"
    }
    else {
        let fibSequence = [0,1,];
        let numberOne=0;
        let numberTwo=1;
        let newNumber= numberOne + numberTwo;
        fibSequence.push(newNumber);
        
        for (let i=1; i < num ; i++) {
            numberOne=numberTwo;
            numberTwo=newNumber;
            newNumber= numberOne + numberTwo;
            fibSequence.push(newNumber);
        }
        
        console.log(fibSequence + "this is numberOne now " + numberOne + " and this is numberTwo " + numberTwo);
        return fibSequence[num];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
