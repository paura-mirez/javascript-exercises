const reverseString = function(str) {
    const newStr = str.split("");
    const reverseArray = newStr.reverse();
    const joinArray = reverseArray.join("")
    return (joinArray);

       /* newStr.join("");
    
    const length = str.length;
    
    reverseStr = newStr[4] + newStr[3] + newStr[2];
    return reverseStr */
};

// Do not edit below this line
module.exports = reverseString;
