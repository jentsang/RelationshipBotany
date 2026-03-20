import { useEffect } from "react";
import { useNavigate } from "react-router";

export function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate result from answers
    const answersJson = sessionStorage.getItem('quizAnswers');
    if (!answersJson) {
      // If no answers, redirect to start
      navigate('/');
      return;
    }

    const answers = JSON.parse(answersJson) as Array<'A' | 'B' | 'C' | 'D'>;
    
    // Count each answer type
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => {
      counts[answer]++;
    });

    // Find the majority answer
    const result = (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as 'A' | 'B' | 'C' | 'D';
    
    // Store result and navigate after 2.5 seconds
    const timer = setTimeout(() => {
      sessionStorage.setItem('quizResult', result);
      navigate('/result');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const pixelSize = 8;
  const Pixel = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <rect x={x * pixelSize} y={y * pixelSize} width={pixelSize} height={pixelSize} fill={color} />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#FEFEE3' }}>
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Pixel art sun at the top */}
        <div className="mb-6 sun-glow">
          <svg width="160" height="80" viewBox="0 0 160 80" className="pixelated">
            <style>{`
              .pixelated {
                image-rendering: -moz-crisp-edges;
                image-rendering: -webkit-crisp-edges;
                image-rendering: pixelated;
                image-rendering: crisp-edges;
              }
              .sun-glow {
                animation: sunPulse 2s ease-in-out infinite;
              }
              @keyframes sunPulse {
                0%, 100% { 
                  transform: scale(1);
                  filter: brightness(1);
                }
                50% { 
                  transform: scale(1.1);
                  filter: brightness(1.2);
                }
              }
              .water-drop {
                animation: waterFall 1.5s ease-in infinite;
              }
              @keyframes waterFall {
                0% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                20% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  transform: translateY(30px);
                }
              }
              .plant-grow {
                animation: plantGrow 2.5s ease-out forwards;
                transform-origin: bottom center;
              }
              @keyframes plantGrow {
                0% {
                  transform: scaleY(0);
                  opacity: 0;
                }
                40% {
                  transform: scaleY(0.5);
                  opacity: 0.5;
                }
                100% {
                  transform: scaleY(1);
                  opacity: 1;
                }
              }
            `}</style>
            
            {/* Sun rays */}
            {/* Top rays */}
            <Pixel x={10} y={2} color="#FFD700" />
            <Pixel x={10} y={3} color="#FFD700" />
            
            <Pixel x={5} y={4} color="#FFD700" />
            <Pixel x={5} y={5} color="#FFD700" />
            
            <Pixel x={15} y={4} color="#FFD700" />
            <Pixel x={15} y={5} color="#FFD700" />
            
            {/* Side rays */}
            <Pixel x={3} y={8} color="#FFD700" />
            <Pixel x={2} y={8} color="#FFD700" />
            
            <Pixel x={17} y={8} color="#FFD700" />
            <Pixel x={18} y={8} color="#FFD700" />
            
            {/* Sun circle - bright yellow */}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`sun-top-${i}`} x={7 + i} y={6} color="#FFA500" />
            ))}
            {[...Array(10)].map((_, i) => (
              <Pixel key={`sun-mid1-${i}`} x={6 + i} y={7} color="#FFD700" />
            ))}
            {[...Array(10)].map((_, i) => (
              <Pixel key={`sun-mid2-${i}`} x={6 + i} y={8} color="#FFD700" />
            ))}
            {[...Array(10)].map((_, i) => (
              <Pixel key={`sun-mid3-${i}`} x={6 + i} y={9} color="#FFD700" />
            ))}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`sun-bot-${i}`} x={7 + i} y={10} color="#FFA500" />
            ))}
          </svg>
        </div>

        {/* Pixel art watering can with animation */}
        <div className="mb-4">
          <svg width="200" height="200" viewBox="0 0 200 200" className="pixelated">
            
            {/* Watering can body */}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`body1-${i}`} x={10 + i} y={12} color="#4C956C" />
            ))}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`body2-${i}`} x={10 + i} y={13} color="#4C956C" />
            ))}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`body3-${i}`} x={10 + i} y={14} color="#4C956C" />
            ))}
            {[...Array(6)].map((_, i) => (
              <Pixel key={`body4-${i}`} x={11 + i} y={15} color="#4C956C" />
            ))}
            
            {/* Handle */}
            <Pixel x={9} y={11} color="#2C6E49" />
            <Pixel x={8} y={12} color="#2C6E49" />
            <Pixel x={8} y={13} color="#2C6E49" />
            <Pixel x={9} y={14} color="#2C6E49" />
            
            {/* Spout */}
            <Pixel x={18} y={11} color="#4C956C" />
            <Pixel x={19} y={10} color="#4C956C" />
            <Pixel x={20} y={9} color="#4C956C" />
            <Pixel x={21} y={9} color="#4C956C" />
            <Pixel x={22} y={10} color="#4C956C" />
            
            {/* Water drops with animation */}
            <g className="water-drop">
              <rect x={22 * pixelSize} y={11 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={23 * pixelSize} y={12 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              
              <rect x={21 * pixelSize} y={13 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={22 * pixelSize} y={14 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              
              <rect x={23 * pixelSize} y={15 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={24 * pixelSize} y={16 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              
              <rect x={22 * pixelSize} y={17 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={23 * pixelSize} y={18 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              
              <rect x={24 * pixelSize} y={19 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={25 * pixelSize} y={20 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              
              <rect x={23 * pixelSize} y={21 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
              <rect x={24 * pixelSize} y={22 * pixelSize} width={pixelSize} height={pixelSize} fill="#4DA6FF" />
            </g>
          </svg>
        </div>

        {/* Growing plant below */}
        <div className="mb-6">
          <svg width="200" height="120" viewBox="0 0 200 120" className="pixelated">
            
            {/* Small pot - static, no animation */}
            {[...Array(12)].map((_, i) => (
              <Pixel key={`pot-rim-${i}`} x={8 + i} y={11} color="#D68C45" />
            ))}
            {[...Array(10)].map((_, i) => (
              <Pixel key={`pot1-${i}`} x={9 + i} y={12} color="#D68C45" />
            ))}
            {[...Array(12)].map((_, i) => (
              <Pixel key={`pot2-${i}`} x={8 + i} y={13} color="#C65D3B" />
            ))}
            {[...Array(14)].map((_, i) => (
              <Pixel key={`pot3-${i}`} x={7 + i} y={14} color="#D68C45" />
            ))}
            
            {/* Soil - static */}
            {[...Array(8)].map((_, i) => (
              <Pixel key={`soil-${i}`} x={10 + i} y={11} color="#8B6F47" />
            ))}
            
            {/* Plant with growth animation - only the plant grows */}
            <g className="plant-grow">
              {/* Small seedling stem */}
              <rect x={13 * pixelSize} y={10 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              <rect x={13 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              <rect x={13 * pixelSize} y={8 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              <rect x={14 * pixelSize} y={10 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              <rect x={14 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              <rect x={14 * pixelSize} y={8 * pixelSize} width={pixelSize} height={pixelSize} fill="#4C956C" />
              
              {/* Two small leaves */}
              <rect x={12 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              <rect x={11 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              <rect x={10 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              
              <rect x={15 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              <rect x={16 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              <rect x={17 * pixelSize} y={9 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              
              {/* Sprouting leaf at top */}
              <rect x={13 * pixelSize} y={7 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
              <rect x={14 * pixelSize} y={7 * pixelSize} width={pixelSize} height={pixelSize} fill="#2C6E49" />
            </g>
          </svg>
        </div>

        {/* Loading text */}
        <p 
          className="font-sans text-2xl text-center"
          style={{ color: '#2C6E49' }}
        >
          Absorbing sunlight and water...
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-6">
          <div 
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ 
              backgroundColor: '#4C956C',
              animationDelay: '0ms'
            }}
          />
          <div 
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ 
              backgroundColor: '#4C956C',
              animationDelay: '150ms'
            }}
          />
          <div 
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ 
              backgroundColor: '#4C956C',
              animationDelay: '300ms'
            }}
          />
        </div>
      </div>
    </div>
  );
}