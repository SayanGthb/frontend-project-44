import app from '../index.js';

const description = 'What is the result of the expression?';

const MIN_RANDOM = 1;
const MAX_RANDOM = 50;
const MAX_RANDOM_ARRAY = 3;
const signArray = ['+', '-', '*'];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
let answer;

const calc = () => {
  const randomIndexSignArray = getRandomNumber(MIN_RANDOM, MAX_RANDOM_ARRAY);
  const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
  const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

  const question = `${randomNumber} ${signArray[randomIndexSignArray - 1]} ${randomNumber2}`;

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

export default () => app(description, calc);

// import readlineSync from 'readline-sync';

// const MIN_RANDOM = 1;
// const MAX_RANDOM = 50;
// const MAX_RANDOM_ARRAY = 3;
// const signArray = ['+', '-', '*'];
// let resultCalc;
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

// const isEven = (userName) => {
//   for (let i = 0; i < 3; i += 1) {
//     const randomIndexSignArray = getRandomNumber(MIN_RANDOM, MAX_RANDOM_ARRAY);
//     const randomNumber = getRandomNumber(MIN_RANDOM, MAX_RANDOM);
//     const randomNumber2 = getRandomNumber(MIN_RANDOM, MAX_RANDOM);

//     console.log(`Question: ${randomNumber} ${signArray[randomIndexSignArray - 1]} ${randomNumber2}`);

//     const userAnswer = readlineSync.question('Your answer: ');

//     // проверка на число
//     if (Number.isNaN(Number(userAnswer)) || userAnswer === '') {
//       console.log(`${userAnswer} is wrong answer ;(. Enter number`);
//       break;
//     }

//     // вычисления
//     switch (signArray[randomIndexSignArray - 1]) {
//       case '+':
//         resultCalc = randomNumber + randomNumber2;
//         break;
//       case '-':
//         resultCalc = randomNumber - randomNumber2;
//         break;
//       default:
//         resultCalc = randomNumber * randomNumber2;
//         break;
//     }

//     // ответ
//     if (resultCalc === Number(userAnswer)) {
//       if (i === 2) {
//         console.log('Correct!');
//         console.log(`Congratulations, ${userName}!`);
//       } else {
//         console.log('Correct!');
//       }
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultCalc}'.\nLet's try again, ${userName}!`);
//       break;
//     }
//   }
// };

// export default () => {
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name?: ');
//   console.log(`Hello, ${name}!`);
//   console.log('What is the result of the expression?');
//   isEven(name);
// };
