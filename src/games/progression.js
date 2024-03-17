import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const MAX_STEP = 5;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;

const getProgression = (start, step, length) => {
  const progression = [];
  let i = 0;
  while (i <= length) {
    progression[i] = start + step * i;
    i += 1;
  }
  return progression;
};

const generateRound = () => {
  const lengthArray = getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const firstElementArray = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const stepProgression = getRandomNumber(MIN_RANDOM, MAX_STEP);
  const array = getProgression(firstElementArray, stepProgression, lengthArray);
  const pointsIndex = getRandomNumber(0, lengthArray);
  const answer = array[pointsIndex];
  array[pointsIndex] = '..';

  const question = array.join(' ');

  return [question, String(answer)];
};

export default () => runGame(description, generateRound);
