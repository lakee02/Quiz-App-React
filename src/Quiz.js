// Quiz.js
import React, { useState, useEffect } from 'react';

const Quiz = ({ questions, finishQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (timeLeft === 0) {
    finishQuiz();
  }

  const currentQ = questions[currentQuestion];
  return (
    <div>
      <p>Time left: {timeLeft}</p>
      <p>Question: {currentQ.question}</p>
      <ul>
        {currentQ.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button
        disabled={selectedOption === null}
        onClick={() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setTimeLeft(30);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
