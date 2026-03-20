interface PlantGrowthProps {
  stage: number; // 1-10
}

export function PlantGrowth({ stage }: PlantGrowthProps) {
  const pixelSize = 6; // Size of each "pixel"
  
  // Helper function to create a pixel block
  const Pixel = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <rect x={x * pixelSize} y={y * pixelSize} width={pixelSize} height={pixelSize} fill={color} />
  );

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="pixelated">
      <style>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
      
      {/* Soil surface - always visible */}
      {[...Array(14)].map((_, i) => (
        <Pixel key={`soil-${i}`} x={3 + i} y={11} color="#8B6F47" />
      ))}
      {[...Array(12)].map((_, i) => (
        <Pixel key={`soil2-${i}`} x={4 + i} y={12} color="#A0826D" />
      ))}
      
      {/* Stage 1: Just a seed */}
      {stage >= 1 && (
        <>
          <Pixel x={9} y={9} color="#D68C45" />
          <Pixel x={10} y={9} color="#D68C45" />
          <Pixel x={9} y={10} color="#D68C45" />
          <Pixel x={10} y={10} color="#D68C45" />
        </>
      )}
      
      {/* Stage 2: Seed with tiny roots */}
      {stage >= 2 && (
        <>
          <Pixel x={9} y={11} color="#A0826D" />
          <Pixel x={10} y={11} color="#A0826D" />
        </>
      )}
      
      {/* Stage 3: Roots growing deeper */}
      {stage >= 3 && (
        <>
          <Pixel x={8} y={12} color="#A0826D" />
          <Pixel x={9} y={12} color="#A0826D" />
          <Pixel x={10} y={12} color="#A0826D" />
          <Pixel x={11} y={12} color="#A0826D" />
          <Pixel x={8} y={13} color="#A0826D" />
          <Pixel x={11} y={13} color="#A0826D" />
        </>
      )}
      
      {/* Stage 4: First sprout breaking through */}
      {stage >= 4 && (
        <>
          <Pixel x={9} y={10} color="#4C956C" />
          <Pixel x={10} y={10} color="#4C956C" />
        </>
      )}
      
      {/* Stage 5: Sprout growing taller */}
      {stage >= 5 && (
        <>
          <Pixel x={9} y={9} color="#4C956C" />
          <Pixel x={10} y={9} color="#4C956C" />
          <Pixel x={9} y={8} color="#4C956C" />
          <Pixel x={10} y={8} color="#4C956C" />
        </>
      )}
      
      {/* Stage 6: First small leaves */}
      {stage >= 6 && (
        <>
          <Pixel x={8} y={8} color="#2C6E49" />
          <Pixel x={7} y={8} color="#2C6E49" />
          <Pixel x={11} y={8} color="#2C6E49" />
          <Pixel x={12} y={8} color="#2C6E49" />
        </>
      )}
      
      {/* Stage 7: Stem grows even taller */}
      {stage >= 7 && (
        <>
          <Pixel x={9} y={7} color="#4C956C" />
          <Pixel x={10} y={7} color="#4C956C" />
          <Pixel x={9} y={6} color="#4C956C" />
          <Pixel x={10} y={6} color="#4C956C" />
        </>
      )}
      
      {/* Stage 8: More leaves appear */}
      {stage >= 8 && (
        <>
          <Pixel x={8} y={6} color="#2C6E49" />
          <Pixel x={7} y={6} color="#2C6E49" />
          <Pixel x={11} y={6} color="#2C6E49" />
          <Pixel x={12} y={6} color="#2C6E49" />
          <Pixel x={7} y={7} color="#2C6E49" />
          <Pixel x={12} y={7} color="#2C6E49" />
        </>
      )}
      
      {/* Stage 9: Even more growth, bigger leaves */}
      {stage >= 9 && (
        <>
          <Pixel x={9} y={5} color="#4C956C" />
          <Pixel x={10} y={5} color="#4C956C" />
          <Pixel x={9} y={4} color="#4C956C" />
          <Pixel x={10} y={4} color="#4C956C" />
          <Pixel x={8} y={4} color="#2C6E49" />
          <Pixel x={7} y={4} color="#2C6E49" />
          <Pixel x={6} y={5} color="#2C6E49" />
          <Pixel x={11} y={4} color="#2C6E49" />
          <Pixel x={12} y={4} color="#2C6E49" />
          <Pixel x={13} y={5} color="#2C6E49" />
        </>
      )}
      
      {/* Stage 10: Flower bud appears */}
      {stage >= 10 && (
        <>
          <Pixel x={9} y={3} color="#FFC9B9" />
          <Pixel x={10} y={3} color="#FFC9B9" />
          <Pixel x={8} y={3} color="#FFC9B9" />
          <Pixel x={11} y={3} color="#FFC9B9" />
          <Pixel x={9} y={2} color="#FFC9B9" />
          <Pixel x={10} y={2} color="#FFC9B9" />
        </>
      )}
    </svg>
  );
}
