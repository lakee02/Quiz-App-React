// Home.js
import React from 'react';

const Home = ({ startQuiz }) => (
  <div>
    <h1>Quiz App</h1>
    <p>This quiz has 10 questions and you have 30 seconds to answer each question.</p>
    <button onClick={startQuiz}>Start Quiz</button>
  </div>
);

export default Home;
