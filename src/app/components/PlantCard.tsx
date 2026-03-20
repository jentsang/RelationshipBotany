import { PixelSunflower, PixelFern, PixelCactus, PixelOrchid } from "./PixelPlants";

interface PlantCardProps {
  plantType: 'A' | 'B' | 'C' | 'D';
  plantName: string;
  attachmentStyle: string;
}

export function PlantCard({ plantType, plantName, attachmentStyle }: PlantCardProps) {
  // Define unique background colors for each plant
  const cardColors = {
    'A': {
      bg: 'linear-gradient(135deg, #FFE5B4 0%, #FFDAA0 50%, #FFB347 100%)', // Warm golden/peach
      border: '#D68C45',
      accent: '#FFD700'
    },
    'B': {
      bg: 'linear-gradient(135deg, #B8E6D5 0%, #A8D8C5 50%, #85C7B3 100%)', // Cool mint green
      border: '#4C956C',
      accent: '#2C6E49'
    },
    'C': {
      bg: 'linear-gradient(135deg, #FFD4A3 0%, #FFBC7D 50%, #E89B6D 100%)', // Desert sand/terracotta
      border: '#C65D3B',
      accent: '#D68C45'
    },
    'D': {
      bg: 'linear-gradient(135deg, #E6D7ED 0%, #D8BFD8 50%, #C9A0DC 100%)', // Soft purple/lavender
      border: '#9B59B6',
      accent: '#B19CD9'
    }
  };

  // Water and Sun needs based on attachment style
  const careNeeds = {
    'A': { water: '●●○', sun: '●●●' }, // Secure: Moderate water, high sun (balanced, confident)
    'B': { water: '●●●', sun: '●●○' }, // Anxious: High water, moderate sun (needs lots of care)
    'C': { water: '●○○', sun: '●●●' }, // Avoidant: Low water, high sun (independent, low needs)
    'D': { water: '●●○', sun: '●●○' }  // Fearful-Avoidant: Moderate both (complex needs)
  };

  const colors = cardColors[plantType];
  const needs = careNeeds[plantType];

  const getPlantComponent = () => {
    switch (plantType) {
      case 'A':
        return <PixelSunflower />;
      case 'B':
        return <PixelFern />;
      case 'C':
        return <PixelCactus />;
      case 'D':
        return <PixelOrchid />;
    }
  };

  return (
    <div 
      className="relative w-full max-w-[320px] mx-auto rounded-3xl p-1"
      style={{ 
        background: `linear-gradient(135deg, ${colors.accent}, ${colors.border})`,
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
      }}
    >
      <div 
        className="rounded-[22px] p-5"
        style={{ 
          background: colors.bg,
        }}
      >
        {/* Header with plant name */}
        <div className="mb-3">
          <h2 
            className="font-serif text-3xl text-center"
            style={{ color: '#2C6E49' }}
          >
            {plantName}
          </h2>
          <div 
            className="text-center font-sans text-xs mt-1"
            style={{ color: '#2C6E49', opacity: 0.7 }}
          >
            ATTACHMENT TYPE
          </div>
        </div>

        {/* Plant image section with windowsill background */}
        <div 
          className="rounded-2xl p-4 mb-4 flex items-center justify-center relative overflow-hidden"
          style={{ 
            minHeight: '280px'
          }}
        >
          {/* Pixel art sunrise scene background */}
          <svg className="absolute inset-0 w-full h-full pixelated-bg" viewBox="0 0 70 70" preserveAspectRatio="none">
            <style>{`
              .pixelated-bg {
                image-rendering: -moz-crisp-edges;
                image-rendering: -webkit-crisp-edges;
                image-rendering: pixelated;
                image-rendering: crisp-edges;
              }
              
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 0.8; }
              }
              
              @keyframes twinkle2 {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.9; }
              }
              
              @keyframes rotateSun {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              
              .star1 { animation: twinkle 2s ease-in-out infinite; }
              .star2 { animation: twinkle 2.5s ease-in-out infinite 0.5s; }
              .star3 { animation: twinkle2 3s ease-in-out infinite 1s; }
              .star4 { animation: twinkle2 2.2s ease-in-out infinite 0.8s; }
              .star5 { animation: twinkle 2.8s ease-in-out infinite 1.2s; }
              .star6 { animation: twinkle2 3.2s ease-in-out infinite 0.3s; }
              
              .sun-rays {
                transform-origin: 58px 10px;
                animation: rotateSun 20s linear infinite;
              }
            `}</style>
            
            {/* Sky gradient - soft sunrise */}
            <defs>
              <linearGradient id="sunriseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFE5E5', stopOpacity: 0.6 }} />
                <stop offset="40%" style={{ stopColor: '#FFD4CC', stopOpacity: 0.5 }} />
                <stop offset="70%" style={{ stopColor: '#FFEACC', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#FFF5E6', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            
            <rect x="0" y="0" width="70" height="70" fill="url(#sunriseGradient)" />
            
            {/* Twinkling stars/sparkles */}
            <rect className="star1" x="15" y="8" width="1" height="1" fill="#FFFACD" />
            <rect className="star2" x="25" y="12" width="1" height="1" fill="#FFFACD" />
            <rect className="star3" x="42" y="6" width="1" height="1" fill="#FFFACD" />
            <rect className="star4" x="35" y="15" width="1" height="1" fill="#FFFACD" />
            <rect className="star5" x="20" y="18" width="1" height="1" fill="#FFFACD" />
            <rect className="star6" x="48" y="20" width="1" height="1" fill="#FFFACD" />
            
            {/* Pixel clouds - very soft */}
            <rect x="8" y="5" width="2" height="1" fill="#FFB3B3" opacity="0.2" />
            <rect x="10" y="5" width="3" height="1" fill="#FFB3B3" opacity="0.15" />
            <rect x="7" y="6" width="2" height="1" fill="#FFB3B3" opacity="0.15" />
            <rect x="9" y="6" width="4" height="1" fill="#FFB3B3" opacity="0.2" />
            <rect x="13" y="6" width="2" height="1" fill="#FFB3B3" opacity="0.15" />
            
            <rect x="52" y="4" width="3" height="1" fill="#FFB3B3" opacity="0.15" />
            <rect x="50" y="5" width="6" height="1" fill="#FFB3B3" opacity="0.2" />
            <rect x="51" y="6" width="4" height="1" fill="#FFB3B3" opacity="0.15" />
            
            {/* Pixel sun - soft peach/orange */}
            <rect x="57" y="7" width="2" height="1" fill="#FFB380" opacity="0.4" />
            <rect x="56" y="8" width="4" height="1" fill="#FFB380" opacity="0.5" />
            <rect x="55" y="9" width="6" height="2" fill="#FFB380" opacity="0.6" />
            <rect x="56" y="11" width="4" height="1" fill="#FFB380" opacity="0.5" />
            <rect x="57" y="12" width="2" height="1" fill="#FFB380" opacity="0.4" />
            
            {/* Sun rays - subtle and rotating */}
            <g className="sun-rays">
              <rect x="54" y="9" width="1" height="2" fill="#FFCC99" opacity="0.3" />
              <rect x="61" y="9" width="1" height="2" fill="#FFCC99" opacity="0.3" />
              <rect x="58" y="6" width="2" height="1" fill="#FFCC99" opacity="0.3" />
              <rect x="58" y="13" width="2" height="1" fill="#FFCC99" opacity="0.3" />
            </g>
            
            {/* Pixel windowsill at bottom */}
            <rect x="0" y="58" width="70" height="3" fill="#8B6F47" opacity="0.7" />
            <rect x="0" y="61" width="70" height="9" fill="#A0826D" opacity="0.7" />
            
            {/* Window frame edge - pixel style */}
            <rect x="0" y="57" width="70" height="1" fill="#6B5435" opacity="0.8" />
          </svg>
          
          {/* Plant in the foreground */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {getPlantComponent()}
          </div>
        </div>

        {/* Attachment style label */}
        <div 
          className="rounded-xl p-3 mb-3"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: `2px solid ${colors.border}`
          }}
        >
          <p 
            className="font-sans text-sm text-center font-semibold"
            style={{ color: '#2C6E49' }}
          >
            {attachmentStyle}
          </p>
        </div>

        {/* Bottom stats section - Water and Sun needs */}
        <div 
          className="rounded-xl p-3"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <div 
                className="font-sans text-xs mb-1"
                style={{ color: '#2C6E49', opacity: 0.7 }}
              >
                WATER NEEDS
              </div>
              <div 
                className="font-sans text-lg tracking-wider"
                style={{ color: '#4C956C' }}
              >
                {needs.water}
              </div>
            </div>
            <div 
              className="w-px h-8"
              style={{ backgroundColor: colors.border, opacity: 0.3 }}
            />
            <div className="text-center flex-1">
              <div 
                className="font-sans text-xs mb-1"
                style={{ color: '#2C6E49', opacity: 0.7 }}
              >
                SUN NEEDS
              </div>
              <div 
                className="font-sans text-lg tracking-wider"
                style={{ color: '#FFB347' }}
              >
                {needs.sun}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom branding */}
        <div className="mt-3 text-center">
          <p 
            className="font-serif text-xs"
            style={{ color: '#2C6E49', opacity: 0.5 }}
          >
            Relationship Botany
          </p>
        </div>
      </div>
    </div>
  );
}