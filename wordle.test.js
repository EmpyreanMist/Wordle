import { describe, expect, it } from '@jest/globals';
import getWordleFeedback from './wordle.js';

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

});
