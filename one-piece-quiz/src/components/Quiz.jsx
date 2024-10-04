import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import './Quiz.css';
import luffy_img from '../images/luffy.png';
import nami_img from '../images/nami.png';
import law_img from '../images/law.png';
import zoro_img from '../images/zoro.png';
import robin_img from '../images/robin.png';
import usopp_img from '../images/usopp.png';
import sanji_img from '../images/sanji.png';
import chopper_img from '../images/chopper.png';
import shanks_img from '../images/shanks.png';
import sabo_img from '../images/sabo.png';
import jinbei_img from '../images/jinbei.png';
import brook_img from '../images/brook.png';
import koby_img from '../images/koby.png';
import ace_img from '../images/ace.png';
import buggy_img from '../images/buggy.png';

const questions = [
  { question: "Do you enjoy spending time with people?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "EI" },
  { question: "Do you rely more on your experience than your imagination?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "SN" },
  { question: "Do you make decisions based on logic rather than feelings?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "TF" },
  { question: "Do you prefer to have a plan rather than be spontaneous?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "JP" },
  { question: "Is your weapon of choice a sword?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "WP" },
  { question: "Is your weapon of choice your fist?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "WP" },
  { question: "Do you like the fire element?", options: ["Strongly Agree", "Agree", "Partly Agree", "Neither Agree nor Disagree", "Partly Disagree", "Disagree", "Strongly Disagree"], type: "FE" }
];

const mbtiMapping = {
  "ENFP": { name: "Monkey D. Luffy", image: luffy_img, description: "Luffy is adventurous and always seeks new experiences. His optimism and determination inspire everyone around him." },
  "ESTJ": { name: "Nami", image: nami_img, description: "Nami is practical and organized, using her strategic mind to navigate and protect her crew." },
  "INTJ": { name: "Trafalgar Law", image: law_img, description: "Law is a strategic thinker with a calm demeanor, always planning several steps ahead." },
  "ISTP": { name: "Roronoa Zoro", image: zoro_img, description: "Zoro is a skilled swordsman with a pragmatic approach to challenges, focusing on action over words." },
  "INFJ": { name: "Nico Robin", image: robin_img, description: "Robin is insightful and reserved, with a deep understanding of history and a strong sense of justice." },
  "ENTP": { name: "Usopp", image: usopp_img , description: "Usopp is inventive and quick-witted, always coming up with creative solutions to problems." },
  "ENFJ": { name: "Vinsmoke Sanji", image: sanji_img, description: "Sanji is charismatic and caring, always putting others' needs before his own." },
  "ISFJ": { name: "Tony Tony Chopper", image: chopper_img, description: "Chopper is compassionate and dedicated, always ready to help those in need." },
  "ENTJ": { name: "Shanks", image: shanks_img, description: "Shanks is a natural leader with a strong sense of responsibility and a charismatic presence." },
  "ESFP": { name: "Sabo", image: sabo_img, description: "Sabo is energetic and enthusiastic, always ready to fight for what he believes in." },
  "ISTJ": { name: "Jinbei", image: jinbei_img, description: "Jinbei is reliable and steadfast, with a strong sense of duty and honor." },
  "INFP": { name: "Brook", image: brook_img, description: "Brook is imaginative and kind-hearted, with a love for music and adventure." },
  "ISFP": { name: "Koby", image: koby_img, description: "Koby is gentle and empathetic, always striving to improve and help others." },
  "ESTP": { name: "Portgas D. Ace", image: ace_img, description: "Ace is spirited and adventurous, known for his fiery temperament and strong sense of loyalty." },
  "INVALID": { name: "Buggy", image: buggy_img, description: "Buggy is unpredictable and flamboyant, often causing chaos with his antics." }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({ EI: 0, SN: 0, TF: 0, JP: 0, WP: 0, FE: 0 });
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
    } else if (questionType === "WP") {
      newAnswers.WP += index < 3 ? 1 : -1;
    } else if (questionType === "FE") {
      newAnswers.FE += index < 3 ? 1 : -1;
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
    const result = mbtiMapping[mbti] || mbtiMapping["INVALID"];
    setResult(result);
  };

  return (
    <div className="quiz">
      {result ? (
        <div className="result">
          <img src={result.image} alt={result.name} className="result-image" />
          <h2>You are most like {result.name}!</h2>
          <p>{result.description}</p>
          <div className="share-buttons">
            <FacebookShareButton url={window.location.href} quote={`I am most like ${result.name} from One Piece!`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={`I am most like ${result.name} from One Piece!`}>
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