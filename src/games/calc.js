import generateRound from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 50;
let answer;

const getRound = () => {
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

  const signObj = {
    '+': randomNumber + randomNumber2,
    '-': randomNumber - randomNumber2,
    '*': randomNumber * randomNumber2,
  };

  const signObjKeysArray = Object.keys(signObj);

  const randomIndexSignArray = getRandomNumber(MIN_RANDOM, signObjKeysArray.length);

  const question = `${randomNumber} ${signObjKeysArray[randomIndexSignArray - 1]} ${randomNumber2}`;

  answer = signObj[signObjKeysArray[randomIndexSignArray - 1]];

  return [question, String(answer)];
};

export default () => generateRound(description, getRound);
