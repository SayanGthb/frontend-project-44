import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 50;

const signObj = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const signs = Object.keys(signObj);

const generateRound = () => {
  const a = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const b = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomSignIndex = getRandomNumber(MIN_RANDOM, signs.length);
  const sign = signs[randomSignIndex - 1];
  const question = `${a} ${sign} ${b}`;
  const answer = signObj[sign](a, b);

  return [question, String(answer)];
};

export default () => runGame(description, generateRound);
