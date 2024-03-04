import readlineSync from 'readline-sync';

// 1. приветствие
// 2. запросить имя
// 3. вывестиn правила игры
//  в цикле  3 раза
// 4. задать вопрос
// 5. получить ответ пользователя
// 6. проверить
// 7. выдать ответ: правильно / неправильно

const roundCount = 3;

const generateRound = (description, typeGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description); // вопрос игры

  // цикл
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = typeGame();
    console.log([question, answer]);
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

export default generateRound;
