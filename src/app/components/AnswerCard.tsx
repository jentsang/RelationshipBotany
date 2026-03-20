import { useState } from "react";

interface AnswerCardProps {
  text: string;
  onClick: () => void;
}

export function AnswerCard({ text, onClick }: AnswerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="font-sans p-5 rounded-2xl text-left transition-all duration-200 border-2"
      style={{ 
        backgroundColor: isHovered ? '#FFC9B9' : '#FFFFFF',
        color: '#2C6E49',
        borderColor: isPressed ? '#D68C45' : 'transparent',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isPressed ? '0 2px 8px rgba(214, 140, 69, 0.3)' : 'none'
      }}
    >
      {text}
    </button>
  );
}