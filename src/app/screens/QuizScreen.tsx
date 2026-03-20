import { useState } from "react";
import { useNavigate } from "react-router";
import { questions } from "../data/quizData";
import { PlantGrowth } from "../components/PlantGrowth";
import { AnswerCard } from "../components/AnswerCard";

export function QuizScreen() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<'A' | 'B' | 'C' | 'D'>>([]);

  const question = questions[currentQuestion];
  const progress = currentQuestion + 1;

  const handleAnswer = (answerType: 'A' | 'B' | 'C' | 'D') => {
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete, navigate to loading with results
      sessionStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
      navigate('/loading');
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-8" style={{ backgroundColor: '#FEFEE3' }}>
      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Progress indicator with plant growth */}
        <div className="mb-8 flex flex-col items-center">
          <PlantGrowth stage={progress} />
          
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-6 h-1 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: index < progress ? '#D68C45' : '#FFC9B9' 
                }}
              />
            ))}
          </div>
          
          {/* Progress percentage */}
          <p 
            className="font-sans text-sm mt-3 opacity-70"
            style={{ color: '#2C6E49' }}
          >
            {(progress - 1) * 10}% complete
          </p>
        </div>

        {/* Question */}
        <h2 
          className="font-serif text-3xl mb-8 text-center"
          style={{ color: '#2C6E49' }}
        >
          {question.question}
        </h2>

        {/* Answer cards */}
        <div className="flex flex-col gap-4 flex-1">
          {question.answers.map((answer, index) => (
            <AnswerCard
              key={index}
              text={answer.text}
              onClick={() => handleAnswer(answer.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}