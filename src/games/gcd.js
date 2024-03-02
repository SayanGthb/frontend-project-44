import app from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;

const game = () => {
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const question = `${randomNumber} ${randomNumber2}`;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, (a % b)));
  const answer = gcd(randomNumber, randomNumber2);
  return [question, String(answer)];
};

export default () => app(description, game);
