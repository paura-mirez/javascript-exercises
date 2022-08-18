const sumAll = function(num1, num2) {

    let finalSum = 0
    
    if ( typeof num1==='number' && typeof num2==='number' && num1>=0 && num2>=0) {
        if (num1<num2) { 
            let i=num1
            while (i<=num2)
            {
                finalSum = finalSum + i;
                i++;
            }
        }
        else {
            let i=num2
            while (i<=num1)
            {
                finalSum = finalSum + i;
                i++;
            }
        }
        
    
        return finalSum;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
