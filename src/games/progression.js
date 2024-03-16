import generateRound from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const MAX_STEP = 5; // максимальный шаг прогрессии
const lengthArrayFirst = 5; // минимальная длина массива
const lengthArrayLast = 15; // максимальная длина массива

const getProgression = (start, step, length) => {
  const array = [];
  let i = 0;
  while (i <= length) {
    array[i] = start + step * i;
    i += 1;
  }
  return array;
};

const getAnswer = () => {
  const lengthArray = getRandomNumber(lengthArrayFirst, lengthArrayLast); // длина массива
  const firstElementArray = getRandomNumber(MIN_RANDOM, MAX_RANDOM); // первое число
  const stepProgression = getRandomNumber(MIN_RANDOM, MAX_STEP); // шаг прогрессии
  const array = getProgression(firstElementArray, stepProgression, lengthArray); // массив
  const pointsIndex = getRandomNumber(0, lengthArray); // индекс точек
  const answer = array[pointsIndex]; // скрытое точками число
  array[pointsIndex] = '..';

  const question = array.join(' '); // массив в строку

  return [question, String(answer)];
};

export default () => generateRound(description, getAnswer);
