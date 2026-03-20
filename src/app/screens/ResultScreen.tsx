import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { plantResults } from "../data/quizData";
import { PlantCard } from "../components/PlantCard";
import confetti from "canvas-confetti";

export function ResultScreen() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<typeof plantResults[0] | null>(null);
  const [showTips, setShowTips] = useState(false);
  
  useEffect(() => {
    const resultType = sessionStorage.getItem('quizResult') as 'A' | 'B' | 'C' | 'D';
    if (!resultType) {
      navigate('/');
      return;
    }
    
    const plantResult = plantResults.find(r => r.type === resultType);
    if (plantResult) {
      setResult(plantResult);
      
      // Trigger confetti animation
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Colors matching our plant theme
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#4C956C', '#2C6E49', '#FFD700', '#D68C45', '#FFC9B9']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#4C956C', '#2C6E49', '#FFD700', '#D68C45', '#FFC9B9']
        });
      }, 250);
    }
  }, [navigate]);

  const getQuizUrl = () => {
    return 'https://safari-jog-16403291.figma.site';
  };

  const handleCopyText = () => {
    if (!result) return;

    const shareText = `Relationship Botany 🪴
My Plant: ${result.name}
🌱🌿🪴🌸
Take the quiz to find your plant: ${getQuizUrl()}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        // Fallback: create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  if (!result) {
    return null;
  }

  const getAttachmentStyleText = () => {
    switch (result.type) {
      case 'A':
        return 'Secure Attachment';
      case 'B':
        return 'Anxious Attachment';
      case 'C':
        return 'Avoidant Attachment';
      case 'D':
        return 'Fearful-Avoidant Attachment';
      default:
        return '';
    }
  };
  
  const handleRestartQuiz = () => {
    // Clear session storage
    sessionStorage.removeItem('quizAnswers');
    sessionStorage.removeItem('quizResult');
    // Navigate to start
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FEFEE3' }}>
      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Pokemon Card Display with animations */}
        <div className="w-full px-6 pt-12 pb-6">
          <style>{`
            @keyframes cardFloat {
              0%, 100% { 
                transform: translateY(0px) rotate(0deg);
              }
              50% { 
                transform: translateY(-10px) rotate(1deg);
              }
            }
            @keyframes cardGlow {
              0%, 100% {
                filter: drop-shadow(0 0 10px rgba(76, 149, 108, 0.3));
              }
              50% {
                filter: drop-shadow(0 0 20px rgba(76, 149, 108, 0.6));
              }
            }
            @keyframes sparkle {
              0%, 100% { opacity: 0; transform: scale(0); }
              50% { opacity: 1; transform: scale(1); }
            }
            .card-container {
              animation: cardFloat 3s ease-in-out infinite, cardGlow 2s ease-in-out infinite;
              position: relative;
            }
            .sparkle {
              position: absolute;
              width: 8px;
              height: 8px;
              background: #FFD700;
              border-radius: 50%;
              animation: sparkle 2s ease-in-out infinite;
            }
            .sparkle:nth-child(1) {
              top: 10%;
              left: 10%;
              animation-delay: 0s;
            }
            .sparkle:nth-child(2) {
              top: 20%;
              right: 15%;
              animation-delay: 0.5s;
            }
            .sparkle:nth-child(3) {
              bottom: 30%;
              left: 15%;
              animation-delay: 1s;
            }
            .sparkle:nth-child(4) {
              bottom: 20%;
              right: 10%;
              animation-delay: 1.5s;
            }
          `}</style>
          
          <div className="card-container relative">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            
            <div>
              <PlantCard 
                plantType={result.type}
                plantName={result.name}
                attachmentStyle={getAttachmentStyleText()}
              />
            </div>
          </div>
        </div>

        {/* Result content */}
        <div className="flex-1 flex flex-col px-6 py-4">
          {/* Heading */}
          <h1 
            className="font-serif text-3xl mb-4 text-center"
            style={{ color: '#2C6E49' }}
          >
            You've bloomed into {result.name === 'Sunflower' || result.name === 'Orchid' ? 'a' : 'a'} {result.name}!
          </h1>

          {/* Description */}
          <p 
            className="font-sans text-base leading-relaxed mb-5 text-center opacity-90"
            style={{ color: '#2C6E49' }}
          >
            {result.description}
          </p>

          {/* Fun Fact */}
          <div 
            className="rounded-2xl p-4 mb-5"
            style={{ 
              backgroundColor: '#FFC9B9',
            }}
          >
            <p 
              className="font-sans text-sm text-center"
              style={{ color: '#2C6E49' }}
            >
              {result.funFact}
            </p>
          </div>

          {/* Learn More expandable section */}
          <button
            onClick={() => setShowTips(!showTips)}
            className="font-sans px-6 py-3 rounded-full text-white transition-all hover:scale-105 active:scale-95 mb-4"
            style={{ backgroundColor: '#4C956C' }}
          >
            {showTips ? 'Hide Tips' : 'Learn More About Your Attachment Style'}
          </button>

          {/* Relationship Tips - expandable */}
          {showTips && (
            <div 
              className="rounded-2xl p-5 mb-5 space-y-3"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '2px solid #4C956C'
              }}
            >
              <h3 
                className="font-serif text-xl mb-3"
                style={{ color: '#2C6E49' }}
              >
                Relationship Tips:
              </h3>
              <ul className="space-y-2">
                {result.relationshipTips.map((tip, index) => (
                  <li 
                    key={index}
                    className="font-sans text-sm leading-relaxed flex gap-2"
                    style={{ color: '#2C6E49' }}
                  >
                    <span style={{ color: '#4C956C' }}>•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Share Section Heading */}
          <h3 
            className="font-serif text-2xl mb-4 text-center"
            style={{ color: '#2C6E49' }}
          >
            Share Your Result
          </h3>

          {/* Share button */}
          <button
            onClick={handleCopyText}
            className="font-sans px-8 py-4 rounded-full text-white transition-all hover:scale-105 active:scale-95 mb-5"
            style={{ backgroundColor: copied ? '#4C956C' : '#D68C45' }}
          >
            {copied ? 'Copied! ✓' : 'Copy Share Text'}
          </button>

          {/* Restart quiz link */}
          <button
            onClick={handleRestartQuiz}
            className="font-sans text-center opacity-70 hover:opacity-100 transition-opacity pb-6"
            style={{ color: '#2C6E49' }}
          >
            Take the quiz again
          </button>
        </div>
      </div>
    </div>
  );
}