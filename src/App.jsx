import React, { useState, useRef } from 'react';
import Project from './project';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eiffel_Tower_Paris.jpg"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Pacific_ocean_2.jpg"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein",
    image: ""
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mars_-_Full_Disk.jpg"
  }
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [score, setScore] = useState(0);  
  const [selectedAnswer, setSelectedAnswer] = useState("");  
  const [isAnswered, setIsAnswered] = useState(false);  
  const [feedback, setFeedback] = useState("");  
  const nextButtonRef = useRef(null);  

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === quizData[currentIndex].correctAnswer) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("Incorrect!");
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setFeedback("");
      nextButtonRef.current.focus();  
    }
  };


  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Quiz Application</h1>

      <div>
        <h2>{quizData[currentIndex].question}</h2>
        {quizData[currentIndex].image && (
          <img
            src={quizData[currentIndex].image}
            alt="question image"
            style={{ width: "300px", height: "200px", objectFit: "cover", marginBottom: "20px" }}
          />
        )}
        
        <div>
          {quizData[currentIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: selectedAnswer === option ? (option === quizData[currentIndex].correctAnswer ? "green" : "red") : "lightgrey",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div>
            <h3>{feedback}</h3>
            {currentIndex < quizData.length - 1 && (
              <button
                ref={nextButtonRef}
                onClick={handleNextQuestion}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "20px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Next
              </button>
            )}
            {currentIndex === quizData.length - 1 && (
              <div style={{ marginTop: "20px" }}>
                <h2>Your Final Score: {score} / {quizData.length}</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
