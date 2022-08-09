const removeFromArray = function(array, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) { 
        const index = array.indexOf(theArgs[i]);
      if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
      }
      }
      return array;
};

// Do not edit below this line
module.exports = removeFromArray;



