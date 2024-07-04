import {useState} from "react";
import { resultInitialState } from "../../constants";
import './quiz.scss'

const Quiz = ({questions}) =>{

    console.log(questions.questions);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);

    const {question, choices, correctAnswer} = questions.questions[currentQuestion];

    const onAnswerClick = (answer,index)=>{
        setAnswerIdx(index);
        if(answer === correctAnswer){
            setAnswer(true);
        }
        else{
            setAnswer(false);
        }
    }
    const onClickNext = () => {
        setAnswerIdx(null);
        setResult((prev) => 
            answer
            ? {
                ...prev,
                score: prev.score+5,
                correctAnswers: prev.correctAnswers + 1,

            } :
            {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }
        )
        if(currentQuestion != questions.questions.length - 1){
            setCurrentQuestion((prev) => prev+1);

        }
        else{
            setCurrentQuestion(0);
            setShowResult(true);
        }
    };
    const onTryAgain = () =>{
        setResult(resultInitialState);
        setShowResult(false);
    }
     return (
    <div className="quiz-container">
        {!showResult ? ( <>
        <span className="active-questions-on">{currentQuestion + 1}</span>
        /<span className="total-question">{questions.questions.length}</span>
        <h2>{question}</h2>
        <ul>
            {
                choices.map((answer, index) => (
                    <li onClick={() => onAnswerClick(answer, index)} key={answer} className = {answerIdx === index ? "selected-answer" : null}>
                        {answer}
                    </li>
                ))
            }
        </ul>
        <div className="Footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
                {currentQuestion === question.length -1? "Finish" : "Next"}
            </button>
        </div>
        </>) : (<div className="result">
            <h1>Result</h1>
            <p>
                Total Questions : <span>{questions.questions.length}</span>
            </p>
            <p>
                Total Score: <span>{result.score}</span>
    
            </p>
            <p>
                Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try Again</button>
        </div>
            
        )}
       
    </div>
     )
}
export default Quiz;