import { useNavigate } from "react-router";

export function StartScreen() {
  const navigate = useNavigate();

  const pixelSize = 8;
  const Pixel = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <rect x={x * pixelSize} y={y * pixelSize} width={pixelSize} height={pixelSize} fill={color} />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12" style={{ backgroundColor: '#FEFEE3' }}>
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Title */}
        <h1 
          className="font-pixel text-3xl mb-8 text-center leading-relaxed"
          style={{ color: '#2C6E49' }}
        >
          Relationship Botany
        </h1>

        {/* Pixel art seed in soil illustration */}
        <div className="mb-8">
          <svg width="200" height="200" viewBox="0 0 200 200" className="pixelated">
            <style>{`
              .pixelated {
                image-rendering: -moz-crisp-edges;
                image-rendering: -webkit-crisp-edges;
                image-rendering: pixelated;
                image-rendering: crisp-edges;
              }
            `}</style>
            
            {/* Soil base */}
            {[...Array(20)].map((_, i) => (
              <Pixel key={`soil1-${i}`} x={5 + i} y={18} color="#8B6F47" />
            ))}
            {[...Array(22)].map((_, i) => (
              <Pixel key={`soil2-${i}`} x={4 + i} y={19} color="#A0826D" />
            ))}
            {[...Array(24)].map((_, i) => (
              <Pixel key={`soil3-${i}`} x={3 + i} y={20} color="#8B6F47" />
            ))}
            {[...Array(24)].map((_, i) => (
              <Pixel key={`soil4-${i}`} x={3 + i} y={21} color="#A0826D" />
            ))}
            {[...Array(24)].map((_, i) => (
              <Pixel key={`soil5-${i}`} x={3 + i} y={22} color="#8B6F47" />
            ))}
            
            {/* Seed */}
            <Pixel x={11} y={16} color="#D68C45" />
            <Pixel x={12} y={16} color="#D68C45" />
            <Pixel x={13} y={16} color="#D68C45" />
            <Pixel x={11} y={17} color="#D68C45" />
            <Pixel x={12} y={17} color="#D68C45" />
            <Pixel x={13} y={17} color="#D68C45" />
            <Pixel x={12} y={15} color="#D68C45" />
            
            {/* Seed detail line */}
            <Pixel x={12} y={16} color="#2C6E49" />
          </svg>
        </div>

        {/* Intro Copy */}
        <p 
          className="font-sans text-center text-lg mb-10 leading-relaxed opacity-90"
          style={{ color: '#2C6E49' }}
        >
          Relationships are like plants. Some need constant watering, some thrive in the desert, 
          and some just need a little indirect sunlight to bloom. Discover your attachment style 
          through the lens of botany. Let's find out what's growing in your garden.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/quiz')}
          className="font-sans px-12 py-4 rounded-full text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#D68C45' }}
        >
          Plant Your Seed
        </button>
      </div>
    </div>
  );
}