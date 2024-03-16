import readlineSync from 'readline-sync';

const roundCount = 3;

const runGame = (description, typeGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description); // вопрос игры

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = typeGame();
    // console.log([question, answer]);
    // console.log(typeof (question), typeof (answer));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: '); // Ответ пользователя
    // проверка
    if (answer === userAnswer) {
      if (i === 2) {
        console.log('Correct!');
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default runGame;
