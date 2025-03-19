import { describe, expect, it } from '@jest/globals';
import getWordleFeedback from './wordle.js';

describe('getWordleFeedback()', () => {
/* Testet kollar att man får ett objekt i en array som innehåller texten error när man matar in en gissning som inte är 5 karaktärer  */

  it('should give an error message when guess is not 5 characters', () => {
    const output = getWordleFeedback('abc', 'abcde');
    expect(output[0]).toHaveProperty('error');
  });

});
