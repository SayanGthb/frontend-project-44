import app from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const game = () => {
  const question = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => app(description, game);
