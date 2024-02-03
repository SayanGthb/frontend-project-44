import app from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_RANDOM = 1;
const MAX_RANDOM = 100;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const isEven = () => {
  const question = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => app(description, isEven);

// import readlineSync from 'readline-sync';

// const MIN_RANDOM = 1;
// const MAX_RANDOM = 100;

// const isEven = (userName) => {
//   for (let i = 0; i < 3; i += 1) {
//     const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

//     const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

//     const isEvenRandomNumber = randomNumber % 2 === 0 ? 'yes' : 'no';

//     console.log(`Question: ${randomNumber}`);

//     const userAnswer = readlineSync.question('Your answer: ');

//     if (userAnswer !== 'yes' && userAnswer !== 'no') {
//       console.log(`${userAnswer} is wrong answer ;(. Enter "yes" or "no"`);
//       break;
//     }

//     if (isEvenRandomNumber === userAnswer) {
//       if (i === 2) {
//         console.log('Correct!');
//         console.log(`Congratulations, ${userName}!`);
//       } else {
//         console.log('Correct!');
//       }
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEvenRandomNumber}'.\nLet's try again, ${userName}!`);
//       break;
//     }
//   }
// };

// export default () => {
//   console.log('node bin/brain-games.js');
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name?: ');
//   console.log(`Hello, ${name}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   isEven(name);
// }
