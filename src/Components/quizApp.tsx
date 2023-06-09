import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { decode } from "html-entities";

export interface Questions {
  response_code: number;
  results: Question[];
}

export interface Question {
  type: "boolean" | "multiple";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer: string;
}

interface TrueOrFalseQuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
}

const TrueOrFalseQuestion = ({
  question,
  userAnswer,
  setUserAnswer,
}: TrueOrFalseQuestionProps) => {
  return (
    <div>
      <input
        type="radio"
        checked={userAnswer == "True"}
        onChange={(event) => setUserAnswer("True")}
      />{" "}
      True
      <input
        type="radio"
        checked={userAnswer == "False"}
        onChange={(event) => setUserAnswer("False")}
      />{" "}
      False
    </div>
  );
};

interface QuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (answer: any) => void;
}

const Question = ({ question, setUserAnswer, userAnswer }: QuestionProps) => {
  let color = "white";
  if (userAnswer !== undefined) {
    if (userAnswer == question.correct_answer) {
      color = "lightgreen";
    } else {
      color = "red";
    }
  }
  return (
    <div style={{ backgroundColor: color }}>
      <div
        style={{
          width: "30%",
          margin: "auto",
        }}
      >
        {decode(question.question)}
      </div>
      {userAnswer === undefined ? (
        <div
          style={{
            width: "30%",
            margin: "auto",
          }}
        >
          {question.type === "boolean" && (
            <TrueOrFalseQuestion
              question={question}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
          )}
          {question.type === "multiple" && (
            <MultipleChoiceQuestion
              question={question}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
          )}
        </div>
      ) : (
        <div
          style={{
            fontWeight: "bold",

            width: "30%",
            margin: "auto",
          }}
        >
          {userAnswer !== question.correct_answer ? (
            <p>
              You answered {userAnswer} and the correct answer was{" "}
              {question.correct_answer}
            </p>
          ) : (
            <p>You answered {userAnswer} which is the correct answer</p>
          )}
        </div>
      )}
    </div>
  );
};

interface MultipleChoiceQuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (string: string) => void;
}

const MultipleChoiceQuestion = ({
  question,
  setUserAnswer,
}: MultipleChoiceQuestionProps) => {
  let allQuestions = [question.correct_answer, ...question.incorrect_answers];
  allQuestions.sort(() => Math.random() - 0.5);
  return (
    <select onChange={(event) => setUserAnswer(event.target.value)}>
      <option value="">Select an answer</option>
      {allQuestions.map((answer, index) => (
        <option key={index} value={answer}>
          {decode(answer)}
        </option>
      ))}
    </select>
  );
};

const LoadingIndicator = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};

const QuizApp = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true);
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let questionsResponse: Questions = await response.json();
    setQuestions([...questions, ...questionsResponse.results]);
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <>
      {questions.map((question, index) => {
        return (
          <Question
            question={question}
            userAnswer={question.user_answer}
            setUserAnswer={(answer) => {
              let newQuestions = [...questions];
              newQuestions[index].user_answer = answer;
              setQuestions(newQuestions);
            }}
          />
        );
      })}
      <button
        style={{
          padding: "10px",
          width: "100%",
          margin: "auto",
        }}
        onClick={loadQuestions}
      >
        Load More
      </button>
      {loading && (
        <div
          style={{
            width: "50%",
            margin: "auto",
          }}
        >
          <LoadingIndicator />
        </div>
      )}
    </>
  );
};

export default QuizApp;
