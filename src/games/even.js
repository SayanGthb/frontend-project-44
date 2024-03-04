import generateRound from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const answerArray = ['yes', 'no'];

const isEven = (number) => number % 2 === 0;

const getAnswer = () => {
  const question = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const answer = isEven(question) ? answerArray[0] : answerArray[1];
  return [question, answer];
};

export default () => generateRound(description, getAnswer);
