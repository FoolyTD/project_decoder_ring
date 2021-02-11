// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //Return false early if substitution alphabet does not exist or is not exactly 26 characters or if inputs do not exist or are not strings
    if (!alphabet || alphabet.length != 26 || !input || typeof(alphabet)!= 'string' || typeof(input) != 'string') return false;
    //Initialize the empty object to store the key/value pairs for the translating decoded message
    let substitutionAlphabet = {};
    //Convert the input to lowercase to ignore capitalization
    const lowerInput = input.toLowerCase();
    //Initialize and empty array to hold the translated code that will be joined and returned later
    let result = []; 
    // Check if there are any non-unique characters in alphabet
    //Best Practice For Of on Arrays and Strings
    for (let character in alphabet) {
      const letter = alphabet[character];
      if(alphabet.slice(character+1).includes(letter)) {
        return false;
    //Then we will loop through the input alphabet and assign each character as the value to the key of the corresponding
    // sequential alphabet. The resulting object will be our encoding chart
      } else {
        substitutionAlphabet[standardAlphabet[character]] = letter; 
      }
    };
    /* We want to translate the input using the object, so we will loop through each character in the input,
    if the character is in the substitution alphabet table, then we will return the value,
    otherwise we will return the character as is
    The substitute alphabet will be an object with the true alphabet as the key, and the substitute alphabet as the value
    */
    for (element in lowerInput) {
      const character = lowerInput[element];
      if(character in substitutionAlphabet) {
        result.push(substitutionAlphabet[character]);
      } else {
        result.push(character);
      }
    };
/*
For the decoding, we do the same are encoding by assigning the passed in alphabet a corresponding alphabet value
*/
    if (!encode) {
      //loop through the provided alphabet each element as the key and assign the standard alphabet as the value sequentially
      decodeAlphabet = {};
      //Inititalize an empty array to store each character that has been decoded
      decodeResult = [];
      for (let element in alphabet) {
        const character = alphabet[element];
        decodeAlphabet[character] = standardAlphabet[element]; 
      }
      for (let letter in lowerInput) {
        const character = lowerInput[letter];
        if (character in decodeAlphabet) {
          decodeResult.push(decodeAlphabet[character]);
        } else {
          decodeResult.push(character);
        }
      }
      return decodeResult.join('');
    }
    return result.join('');
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
