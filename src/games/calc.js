import app from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 50;
const signArray = ['+', '-', '*'];
let answer;

// const getSign = (sign) => {
//   const signObj = {
//     '+': a + b,
//     '-': a - b,
//     '*': a * b
//   }
//   return signObj[1];
// }

const getRound = () => {
  const randomIndexSignArray = getRandomNumber(MIN_RANDOM, signArray.length);
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

  const question = `${randomNumber} ${signArray[randomIndexSignArray - 1]} ${randomNumber2}`;

  // const answer = getSign(signArray[randomIndexSignArray - 1]);
  switch (signArray[randomIndexSignArray - 1]) {
    case '+':
      answer = randomNumber + randomNumber2;
      break;
    case '-':
      answer = randomNumber - randomNumber2;
      break;
    default:
      answer = randomNumber * randomNumber2;
      break;
  }

  return [question, String(answer)];
};

export default () => app(description, getRound);
