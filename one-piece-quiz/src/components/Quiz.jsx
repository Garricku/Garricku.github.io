import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import './Quiz.css';

const questions = [
  {
    question: "Do you enjoy spending time with people?",
    options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"],
    type: "EI"
  },
  {
    question: "Do you rely more on your experience than your imagination?",
    options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"],
    type: "SN"
  },
  {
    question: "Do you make decisions based on logic rather than feelings?",
    options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"],
    type: "TF"
  },
  {
    question: "Do you prefer to have a plan rather than be spontaneous?",
    options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"],
    type: "JP"
  }
];

const mbtiMapping = {
  "ENFP": "Monkey D. Luffy",
  "ESTJ": "Nami",
  "INTJ": "Trafalgar Law",
  "ISTP": "Roronoa Zoro",
  "INFJ": "Nico Robin",
  "ENTP": "Usopp",
  "ENFJ": "Vinsmoke Sanji",
  "ISFJ": "Tony Tony Chopper"
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({ EI: 0, SN: 0, TF: 0, JP: 0 });
  const [result, setResult] = useState(null);

  const handleAnswer = (index) => {
    const questionType = questions[currentQuestion].type;
    const newAnswers = { ...answers };

    if (questionType === "EI") {
      newAnswers.EI += index < 3 ? 1 : -1;
    } else if (questionType === "SN") {
      newAnswers.SN += index < 3 ? 1 : -1;
    } else if (questionType === "TF") {
      newAnswers.TF += index < 3 ? 1 : -1;
    } else if (questionType === "JP") {
      newAnswers.JP += index < 3 ? 1 : -1;
    }

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    const mbti = `${answers.EI >= 0 ? 'E' : 'I'}${answers.SN >= 0 ? 'S' : 'N'}${answers.TF >= 0 ? 'T' : 'F'}${answers.JP >= 0 ? 'J' : 'P'}`;
    setResult(mbtiMapping[mbti]);
  };

  return (
    <div className="quiz">
      {result ? (
        <div className="result">
          <h2>You are most like {result}!</h2>
          <div className="share-buttons">
            <FacebookShareButton url={window.location.href} quote={`I am most like ${result} from One Piece!`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={`I am most like ${result} from One Piece!`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      ) : (
        <div className="question">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;