import app from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;

const isPrimeNumber = () => {
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const question = randomNumber;

  const isPrime = (num) => {
    if (num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export default () => app(description, isPrimeNumber);
