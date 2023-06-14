function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters = digitToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }

  backtrack('', digits);

  return result;
}

module.exports = letterCombinations;
