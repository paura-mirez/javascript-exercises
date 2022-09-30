const palindromes = function (text) {
    let onlyLetters = text.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    let original = onlyLetters.split(' ').filter(char => /[a-z]/.test(char)).join('').split('');
    reversed = [...original].reverse(); 
    console.log (original, reversed);
    
    if (original === reversed) return true;
    if (original == null || reversed == null) return false;
    if (original.length !== reversed.length) return false;

    for (let i = 0; i < original.length; ++i) {
        if (original[i] !== reversed[i]) return false;
      }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
