import generateRound from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 50;
// const signArray = ['+', '-', '*'];
let answer;

const getRound = () => {
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

  const signObj = {
    '+': randomNumber + randomNumber2,
    '-': randomNumber - randomNumber2,
    '*': randomNumber * randomNumber2,
  };

  const randomIndexSignArray = getRandomNumber(MIN_RANDOM, Object.keys(signObj).length);

  const question = `${randomNumber} ${Object.keys(signObj)[randomIndexSignArray - 1]} ${randomNumber2}`;

  answer = signObj[Object.keys(signObj)[randomIndexSignArray - 1]];

  // switch (signArray[randomIndexSignArray - 1]) {
  //   case '+':
  //     answer = randomNumber + randomNumber2;
  //     break;
  //   case '-':
  //     answer = randomNumber - randomNumber2;
  //     break;
  //   default:
  //     answer = randomNumber * randomNumber2;
  //     break;
  // }

  return [question, String(answer)];
};

export default () => generateRound(description, getRound);
