/* 
Gör en funktion som tar emot två parametrar "guess" och "correctWord".
Skapa en array som ska innehålla objekt "feedback".
Ta bort allt som inte är A-Z i "guess" och "correctWord" för att säkerställa att endast bokstäver används.
Kolla om båda orden är exakt 5 bokstäver, annars returnera en felmeddelande att orden måste vara 5 bokstäver långa.
Konvertera både "guess" och "correctWord" till versaler för att säkerställa att jämförelsen är skiftlägesokänslig.
Skapa en array "correctLetters" från "correctWord" som håller reda på bokstäver och vilka som redan har matchats.
Skapa en array "usedIndexes" som håller reda på vilka bokstäver i "correctWord" som redan har använts.
Första loopen:
Loopa igenom "guess" och jämför varje bokstav med motsvarande bokstav i "correctWord".
Om bokstaven är på rätt plats, lägg till objektet { letter: bokstav, result: 'correct' } i "feedback".
Markera att denna bokstav har använts i "correctWord" genom att lägga till dess index i "usedIndexes".
Andra loopen:
Loopa igenom "guess" igen.
Om bokstaven redan markerats som "correct", hoppa över den.
Om bokstaven finns i "correctWord" på en annan plats och den inte redan använts upp, markera den som "misplaced", annars "incorrect".
Returnera "feedback"-arrayen med resultaten.
*/

function getWordleFeedback(guess, correctWord) {

  let feedback = [];
  const cleanGuess = guess.replace(/[^a-zA-Z]/g, '').toUpperCase();
  const cleanCorrectWord = correctWord.replace(/[^a-zA-Z]/g, '').toUpperCase();

  if(cleanGuess.length !== 5 || cleanCorrectWord.length !== 5) {
    return [{ error: 'The guess and correct word have to be exactly 5 characters long!' }];
  }


  const correctLetters = cleanCorrectWord.split('');
  const guessLetters = cleanGuess.split('');
  const usedIndexes = [];

  guessLetters.forEach((letter, index) => {
    if(letter === correctLetters[index]) {
      feedback.push({letter, result: 'correct'});
      usedIndexes.push(index);
    } else {
      feedback.push(null);
    }
  });

  guessLetters.forEach((letter, index) => {
    if(feedback[index] === null) {
      const foundIndex = correctLetters.findIndex((l, i) => 1 === letter && !usedIndexes.includes(i));
      if (foundIndex !== -1) {
        feedback[index] = { letter, result: 'misplaced' };
        usedIndexes.push(foundIndex);
      } else {
        feedback[index] = { letter, result: 'incorrect' };
      }
    }
  });
  console.log(feedback);
  return feedback;

  console.log(cleanGuess);
  console.log(cleanCorrectWord);
  console.log(usedIndexes)
  console.log(feedback);

}


getWordleFeedback('abcde', 'abefc');
