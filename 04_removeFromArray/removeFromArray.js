const removeFromArray = function(arr, rem) {
    for(let i = 0; i < arr.length; i++){
        if ( arr[i] == rem) { 
            return (arr.splice(i, 1)); 
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
