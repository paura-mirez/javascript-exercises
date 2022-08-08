const reverseString = function(str) {
    const newStr = str.split("");
    const reverseArray = newStr.reverse();
    const joinArray = reverseArray.join("")
    return (joinArray);
};

// Do not edit below this line
module.exports = reverseString;
