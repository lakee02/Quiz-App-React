import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';

const questions = [
  {
    question: 'What is your favorite color?',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    answer: 'Blue',
  },
  // Add more questions here
];

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setCurrentScreen('quiz');
  };

  const answerQuestion = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setCurrentScreen('results');
      return;
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div>
      {currentScreen === 'home' && <Home startQuiz={startQuiz} />}
      {currentScreen === 'quiz' && (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          answerQuestion={answerQuestion}
        />
      )}
      {currentScreen === 'results' && <Results score={score} />}
    </div>
  );
};

export default App;
