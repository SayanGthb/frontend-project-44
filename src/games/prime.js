import app from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const isPrimeNumber = () => {
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const question = randomNumber;

  const isPrime = (num) => {
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
