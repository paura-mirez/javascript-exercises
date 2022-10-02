const caesar = function(word, num) {
    array=Array.from(word);
    let newString = [];
    array.forEach(letter => {
        let unicode= letter.charCodeAt(0);
        let newUnicode = unicode + num;
        let newLetter = String.fromCharCode(newUnicode);
        newString.push(newLetter);
    });
   return (newString.join(''));
};

// Do not edit below this line
module.exports = caesar;
