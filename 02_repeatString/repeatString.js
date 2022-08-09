


const repeatString = function(str, number) {

    let result = "";
    
    if (number>=0) {
        for (let i=0; i<number; i++) {
            result += str;
        }
    
        return result;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
