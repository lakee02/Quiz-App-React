import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';
import './style.css';
//
//
const questions = [
  {
    question: 'How do you center an element horizontally in CSS?',
    options: ['text-align: center;', 'margin: 0 auto;', 'display: flex; justify-content: center;', 'float: center;'],
    answer: 'margin: 0 auto;',
  },
  {
    question: 'What is the purpose of using a CSS reset?',
    options: [
      'To remove all default styling from the browser',
      'To add default styling to the browser',
      'To change the font of the text',
      'To change the color of the text',
    ],
    answer: 'To remove all default styling from the browser',
  },
  {
    question: 'What is the correct syntax for defining a CSS class?',
    options: ['.class { }', '#class { }', 'class { }', '*class { }'],
    answer: '.class { }',
  },
  {
    question: 'What is the default display value of a div element in HTML?',
    options: ['inline', 'block', 'inline-block', 'none'],
    answer: 'block',
  },
  {
    question: 'How do you set a background color for a whole page in CSS?',
    options: [
      'body { background-color: #ffffff; }',
      'html { background-color: #ffffff; }',
      'div { background-color: #ffffff; }',
      'page { background-color: #ffffff; }',
    ],
    answer: 'body { background-color: #ffffff; }',
  },
  {
    question: 'What is the correct syntax for adding a comment in CSS?',
    options: ['// comment', '/* comment */', '<!-- comment -->', '// comment //'],
    answer: '/* comment */',
  },
  {
    question: 'What is the CSS property used to change the text color?',
    options: ['color', 'text-color', 'font-color', 'text-colour'],
    answer: 'color',
  },
  {
    question: 'What is the correct HTML for creating a hyperlink?',
    options: ['<a>link</a>', '<link>', '<a href="">link</a>', '<a name="">link</a>'],
    answer: '<a href="">link</a>',
  },
  {
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Cascading Style Standards', 'Cascading Styles Syntax', 'Cascading Style Syntax'],
    answer: 'Cascading Style Sheets',
  },
  {
    question: 'What is the default value of the position property in CSS?',
    options: ['relative', 'absolute', 'fixed', 'static'],
    answer: 'static',
  }
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
    <div className="container">
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
