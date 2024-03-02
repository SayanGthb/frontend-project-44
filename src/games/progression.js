import app from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const MAX_STEP = 5; // максимальный шаг прогрессии
const lengthArrayFirst = 5; // минимальная длина массива
const lengthArrayLast = 15; // максимальная длина массива
const array = [];

const lengthArray = getRandomNumber(lengthArrayFirst, lengthArrayLast); // длина массива
let firstElementArray = getRandomNumber(MIN_RANDOM, MAX_RANDOM); // первое число
const step = getRandomNumber(MIN_RANDOM, MAX_STEP); // шаг прогрессии

const game = () => {
  let i = 0;

  // формирование массива
  while (i <= lengthArray) {
    array[i] = firstElementArray;
    firstElementArray += step;
    i += 1;
  }

  const pointsIndex = getRandomNumber(0, lengthArray); // индекс точек
  const answer = array[pointsIndex]; // скрытое точками число
  array[pointsIndex] = '..';

  const question = array.join(' '); // массив в строку

  return [question, String(answer)];
};

export default () => app(description, game);
