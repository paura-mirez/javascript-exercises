const caesar = function(text, shift) {
    
    //create array from string
    array=Array.from(text);
    
    //declare newString variable where the new letters will be pushed to
    let newString = [];
    
    //for each letter of the array, do the following
    array.forEach(letter => {
        //change each letter to unicode
        let unicode= letter.charCodeAt(0);
        if (shift < 0) { shift = 26 + (shift % 26);}
        console.log(shift);
        
        //if the unicode corresponds to A-Z then add the number to create a new unicode
        if (unicode> 64 && unicode < 91) {
            console.log(shift);
            let newUnicode = (unicode + (shift-65)) % 26 + 65;
            console.log(newUnicode);
            let newLetter = String.fromCharCode(newUnicode);
            newString.push(newLetter);
            }
        
        //if the unicode corresponds to a-z then add the number to create a new unicode
        else if (unicode> 96 && unicode< 123) {
            let newUnicode = (unicode + (shift-97)) % 26 + 97;
            let newLetter = String.fromCharCode(newUnicode);
            newString.push(newLetter);
            }
        
        // if unicode does not correspond to A-Z or a-z then 
        //turn back into string and push it to new string
        else {
            let oldLetter = String.fromCharCode(unicode);
            newString.push(oldLetter);
        }

    });
   
   //turn the new string array into a string and return that
    return (newString.join(''));
};

// Do not edit below this line
module.exports = caesar;
