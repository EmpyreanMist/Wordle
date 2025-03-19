import { describe, expect, it } from '@jest/globals';
import getWordleFeedback from './wordle.js';

/* Dessa tester bekräftar att man får rätt resultat när man gör vanliga fel som kan hända men även edge cases */

describe('getWordleFeedback()', () => {
/* Testet kollar att man får ett objekt i en array som innehåller texten error när man matar in en gissning som inte är 5 karaktärer  */

  it('should give an error message when guess is not 5 characters', () => {
    const output = getWordleFeedback('abc', 'abcde');
    expect(output[0]).toHaveProperty('error');
  });

/* Testar också om man får ett objekt i en array som innehåller texten error fast när man matar in det korrekta ordets längd fel */
  it('should give an error message when correctWord is not 5 characters', () => {
    const output = getWordleFeedback('abcde', 'abc');
    expect(output[0]).toHaveProperty('error');
  });

/* Testar att svaret från algoritmen bekräftar när man har gjort allt rätt för varje bokstav */
  it('should confirm all letters as correct when guess and correctAnswer is the same', () => {
    const output = getWordleFeedback('learn', 'learn');
    expect(output).toEqual([
      { letter: 'L', result: 'correct'},
      { letter: 'E', result: 'correct'},
      { letter: 'A', result: 'correct'},
      { letter: 'R', result: 'correct'},
      { letter: 'N', result: 'correct'}
    ]);
  });

  /* Testar att algoritmen tar bort allt som inte är bokstäverna A-Z */
  it('should remove all characters that are not A-Z', () => {
    const output = getWordleFeedback('bl,a%ckåöä', '  black123');
    expect(output).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'A', result: 'correct' },
      { letter: 'C', result: 'correct' },
      { letter: 'K', result: 'correct' }
    ]);
  });

  /* Testar att algoritmen fungerar korrekt oavsett om de är versaler eller inte  */
  it('should give accurate results with correct, misplaced and incorrect no matter if its capitalized or not', () => {
    const output = getWordleFeedback('hleio', 'HeLlO');
    expect(output).toEqual([
      { letter: 'H', result: 'correct' },
      { letter: 'L', result: 'misplaced' },
      { letter: 'E', result: 'misplaced' },
      { letter: 'I', result: 'incorrect' },
      { letter: 'O', result: 'correct' }
    ])
  });
  /* Testar att algoritmen ger ett error meddelande då man ger null eller undefined som input */
  it('should give a error message if any input is undefined or null', () => {
    const output = getWordleFeedback(null, 'Glass');
    const outputTwo = getWordleFeedback('Glass', undefined);
    expect(output[0]).toHaveProperty('error');
    expect(outputTwo[0]).toHaveProperty('error');
  });
});
