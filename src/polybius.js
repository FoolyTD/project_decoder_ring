// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
//Set up two objects for encoding and decoding that values of the polybius square
  const decodePolybiusChart = {
  11: 'a',
  21: 'b',
  31: 'c',
  41: 'd',
  51: 'e',
  12: 'f',
  22: 'g',
  32: 'h',
  42: '(i/j)',
  52: 'k',
  13: 'l',
  23: 'm',
  33: 'n',
  43: 'o',
  53: 'p',
  14: 'q',
  24: 'r',
  34: 's',
  44: 't',
  54: 'u',
  15: 'v',
  25: 'w',
  35: 'x',
  45: 'y',
  55: 'z',
};

const encodePolybiusChart = {
  a: 11,
  b: 21,
  c: 31,
  d: 41,
  e: 51,
  f: 12,
  g: 22,
  h: 32,
  i: 42,
  j: 42,
  k: 52,
  l: 13,
  m: 23,
  n: 33,
  o: 43,
  p: 53,
  q: 14,
  r: 24,
  s: 34,
  t: 44,
  u: 54,
  v: 15,
  w: 25,
  x: 35,
  y: 45,
  z: 55,
};



  function polybius(input, encode = true) {
    // your solution code here
    //convert the input to lowercase to avoide capitalization errors
    const lowerCaseInput = input.toLowerCase();
    //initialize an empty array to store result values before returning
    let result = [];
    //Check is encoding or decoding
    if(!encode) {
    //splitting the input so that spaces are removed 
      let filteredInput = input.split(" ");
    //This sentence array will hold each word in the sentence before pushing it to the larger array
      let sentence = [];
    //check to see if the decoded message has the appropriate number of characters
      for (word of filteredInput) {
        if (word.length % 2 !=0) {
          return false;
        } else {
    //build each word with the decode key by looking up the key
          let words = '';
          for (let i = 0; i < word.length; i+=2) {
            let letter = decodePolybiusChart[parseInt([`${word[i]}${word[i+1]}`])];
            words += letter;
          }
          sentence.push(words);
        }
      }
    //Join the sentence array with a space bewteen each sentence
      return sentence.join(' ');
    };
    //if we are encoding, we push the value associated with the character key or else push the space to the result array
    for(let letter in lowerCaseInput) {
      const character = lowerCaseInput[letter];
      if(character === " ") {
        result.push(character);
      } else {
        result.push(`${encodePolybiusChart[character]}`);
      }
    }
    //Once the result array contains all of the encoded message, return the array joined without space
    return result.join('');
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
