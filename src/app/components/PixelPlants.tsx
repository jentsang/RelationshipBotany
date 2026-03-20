// Enhanced pixel art plant components with detailed flowers and unique pots
import React from 'react';

const pixelSize = 4;

const Pixel = ({ x, y, color }: { x: number; y: number; color: string }) => (
  <rect x={x * pixelSize} y={y * pixelSize} width={pixelSize} height={pixelSize} fill={color} />
);

// BOUQUET OF SUNFLOWERS - 3 detailed sunflowers with RUSTIC TERRACOTTA POT
export function PixelSunflower() {
  return (
    <svg width="320" height="400" viewBox="0 0 320 400" className="pixelated w-full h-full plant-sway">
      <style>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        .plant-sway {
          animation: sway 3s ease-in-out infinite;
          transform-origin: bottom center;
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
      `}</style>
      
      {/* RUSTIC TERRACOTTA POT - textured with bands */}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`rim-${i}`} x={28 + i} y={80} color="#C65D3B" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`rim2-${i}`} x={28 + i} y={81} color="#8B4513" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot1-${i}`} x={29 + i} y={82} color="#D68C45" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot2-${i}`} x={29 + i} y={83} color="#C65D3B" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot3-${i}`} x={28 + i} y={84} color="#D68C45" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot4-${i}`} x={28 + i} y={85} color={i % 3 === 0 ? "#C65D3B" : "#D68C45"} />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot5-${i}`} x={27 + i} y={86} color="#C65D3B" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot6-${i}`} x={27 + i} y={87} color={i % 4 === 0 ? "#8B4513" : "#D68C45"} />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot7-${i}`} x={26 + i} y={88} color="#C65D3B" />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot8-${i}`} x={26 + i} y={89} color="#8B4513" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot9-${i}`} x={25 + i} y={90} color="#D68C45" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot10-${i}`} x={25 + i} y={91} color={i % 3 === 0 ? "#C65D3B" : "#D68C45"} />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot11-${i}`} x={25 + i} y={92} color="#C65D3B" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot12-${i}`} x={25 + i} y={93} color="#D68C45" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot13-${i}`} x={25 + i} y={94} color="#D68C45" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot14-${i}`} x={25 + i} y={95} color="#8B4513" />
      ))}
      
      {/* Soil with texture */}
      {[...Array(20)].map((_, i) => (
        <Pixel key={`soil-${i}`} x={30 + i} y={79} color={i % 2 === 0 ? "#8B6F47" : "#7D6240"} />
      ))}
      {[...Array(18)].map((_, i) => (
        <Pixel key={`soil2-${i}`} x={31 + i} y={78} color="#A0826D" />
      ))}
      
      {/* CENTER SUNFLOWER - Tallest with detailed petals */}
      {/* Thick stem with shading */}
      {[...Array(45)].map((_, i) => (
        <React.Fragment key={`stem1-${i}`}>
          <Pixel x={39} y={77 - i} color="#4C956C" />
          <Pixel x={40} y={77 - i} color="#5FAA80" />
          <Pixel x={41} y={77 - i} color="#2C6E49" />
        </React.Fragment>
      ))}
      
      {/* Large detailed leaves with veins */}
      {[...Array(9)].map((_, i) => (
        <Pixel key={`leaf1a-${i}`} x={31 + i} y={60} color="#2C6E49" />
      ))}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`leaf1b-${i}`} x={32 + i} y={59} color={i === 3 ? "#1F5C3A" : "#2C6E49"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`leaf1c-${i}`} x={33 + i} y={58} color="#4C956C" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`leaf1d-${i}`} x={34 + i} y={57} color="#4C956C" />
      ))}
      
      {/* Right leaf */}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`leaf1e-${i}`} x={42 + i} y={52} color="#2C6E49" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`leaf1f-${i}`} x={43 + i} y={51} color={i === 2 ? "#1F5C3A" : "#2C6E49"} />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`leaf1g-${i}`} x={44 + i} y={50} color="#4C956C" />
      ))}
      
      {/* Detailed flower center with seeds pattern */}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center1-${i}`} x={35 + i} y={27} color="#8B4513" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center2-${i}`} x={35 + i} y={28} color={i % 2 === 0 ? "#654321" : "#8B4513"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center3-${i}`} x={35 + i} y={29} color={(i % 3 === 0) ? "#5C3D1F" : "#654321"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center4-${i}`} x={35 + i} y={30} color={i % 2 === 0 ? "#8B4513" : "#654321"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center5-${i}`} x={35 + i} y={31} color={(i % 3 === 0) ? "#5C3D1F" : "#654321"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center6-${i}`} x={35 + i} y={32} color={i % 2 === 0 ? "#8B4513" : "#654321"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`center7-${i}`} x={35 + i} y={33} color="#8B4513" />
      ))}
      
      {/* Detailed yellow petals with shading and highlights - top */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-t1-${i}`} x={37 + i} y={19} color="#CC8400" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-t2-${i}`} x={36 + i} y={20} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t3-${i}`} x={35 + i} y={21} color="#FFD700" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t4-${i}`} x={35 + i} y={22} color={[3, 6].includes(i) ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t5-${i}`} x={35 + i} y={23} color="#FFA500" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t6-${i}`} x={35 + i} y={24} color="#FFD700" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t7-${i}`} x={35 + i} y={25} color={[2, 7].includes(i) ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-t8-${i}`} x={35 + i} y={26} color="#FFA500" />
      ))}
      
      {/* Bottom petals with highlights */}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-b1-${i}`} x={35 + i} y={34} color="#FFA500" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-b2-${i}`} x={35 + i} y={35} color={[3, 6].includes(i) ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-b3-${i}`} x={35 + i} y={36} color="#FFD700" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-b4-${i}`} x={35 + i} y={37} color="#FFA500" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`p1-b5-${i}`} x={35 + i} y={38} color="#FFD700" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-b6-${i}`} x={36 + i} y={39} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-b7-${i}`} x={37 + i} y={40} color="#CC8400" />
      ))}
      
      {/* Left petals with gradient and highlights */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-l1-${i}`} x={27} y={27 + i} color="#CC8400" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-l2-${i}`} x={28} y={26 + i} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-l3-${i}`} x={29} y={26 + i} color="#FFD700" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-l4-${i}`} x={30} y={26 + i} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-l5-${i}`} x={31} y={26 + i} color={[2, 5].includes(i) ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-l6-${i}`} x={32} y={27 + i} color="#FFD700" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-l7-${i}`} x={33} y={28 + i} color="#FFA500" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-l8-${i}`} x={34} y={29 + i} color="#FFD700" />
      ))}
      
      {/* Right petals with gradient and highlights */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-r1-${i}`} x={45} y={29 + i} color="#FFD700" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-r2-${i}`} x={46} y={28 + i} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-r3-${i}`} x={47} y={27 + i} color="#FFD700" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-r4-${i}`} x={48} y={26 + i} color={[2, 5].includes(i) ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-r5-${i}`} x={49} y={26 + i} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-r6-${i}`} x={50} y={26 + i} color="#FFD700" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p1-r7-${i}`} x={51} y={26 + i} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p1-r8-${i}`} x={52} y={27 + i} color="#CC8400" />
      ))}
      
      {/* LEFT SUNFLOWER - Shorter */}
      {/* Stem with shading */}
      {[...Array(35)].map((_, i) => (
        <React.Fragment key={`stem2-${i}`}>
          <Pixel x={28} y={77 - i} color="#4C956C" />
          <Pixel x={29} y={77 - i} color="#5FAA80" />
          <Pixel x={30} y={77 - i} color="#2C6E49" />
        </React.Fragment>
      ))}
      
      {/* Leaves with detail */}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`leaf2a-${i}`} x={22 + i} y={55} color="#2C6E49" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`leaf2b-${i}`} x={23 + i} y={54} color={i === 2 ? "#1F5C3A" : "#2C6E49"} />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`leaf2c-${i}`} x={24 + i} y={53} color="#4C956C" />
      ))}
      
      {/* Flower center with texture */}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center2-1-${i}`} x={26 + i} y={39} color="#8B4513" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center2-2-${i}`} x={26 + i} y={40} color={i % 2 === 0 ? "#654321" : "#8B4513"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center2-3-${i}`} x={26 + i} y={41} color={(i % 3 === 0) ? "#5C3D1F" : "#654321"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center2-4-${i}`} x={26 + i} y={42} color={i % 2 === 0 ? "#8B4513" : "#654321"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center2-5-${i}`} x={26 + i} y={43} color="#8B4513" />
      ))}
      
      {/* Petals with highlights */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p2-t1-${i}`} x={27 + i} y={36} color="#CC8400" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p2-t2-${i}`} x={26 + i} y={37} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p2-t3-${i}`} x={26 + i} y={38} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p2-b1-${i}`} x={26 + i} y={44} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p2-b2-${i}`} x={26 + i} y={45} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p2-b3-${i}`} x={27 + i} y={46} color="#CC8400" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-l1-${i}`} x={21} y={40 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-l2-${i}`} x={22} y={40 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-l3-${i}`} x={23} y={40 + i} color={i === 2 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-l4-${i}`} x={24} y={40 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-l5-${i}`} x={25} y={40 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-r1-${i}`} x={34} y={40 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-r2-${i}`} x={35} y={40 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-r3-${i}`} x={36} y={40 + i} color={i === 2 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-r4-${i}`} x={37} y={40 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p2-r5-${i}`} x={38} y={40 + i} color="#FFD700" />
      ))}
      
      {/* RIGHT SUNFLOWER - Medium height */}
      {/* Stem with shading */}
      {[...Array(38)].map((_, i) => (
        <React.Fragment key={`stem3-${i}`}>
          <Pixel x={49} y={77 - i} color="#4C956C" />
          <Pixel x={50} y={77 - i} color="#5FAA80" />
          <Pixel x={51} y={77 - i} color="#2C6E49" />
        </React.Fragment>
      ))}
      
      {/* Leaves with detail */}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`leaf3a-${i}`} x={43 + i} y={50} color="#2C6E49" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`leaf3b-${i}`} x={44 + i} y={49} color={i === 2 ? "#1F5C3A" : "#2C6E49"} />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`leaf3c-${i}`} x={45 + i} y={48} color="#4C956C" />
      ))}
      
      {/* Flower center with texture */}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center3-1-${i}`} x={46 + i} y={36} color="#8B4513" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center3-2-${i}`} x={46 + i} y={37} color={i % 2 === 0 ? "#654321" : "#8B4513"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center3-3-${i}`} x={46 + i} y={38} color={(i % 3 === 0) ? "#5C3D1F" : "#654321"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center3-4-${i}`} x={46 + i} y={39} color={i % 2 === 0 ? "#8B4513" : "#654321"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`center3-5-${i}`} x={46 + i} y={40} color="#8B4513" />
      ))}
      
      {/* Petals with highlights */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p3-t1-${i}`} x={47 + i} y={33} color="#CC8400" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p3-t2-${i}`} x={46 + i} y={34} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p3-t3-${i}`} x={46 + i} y={35} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p3-b1-${i}`} x={46 + i} y={41} color="#FFA500" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`p3-b2-${i}`} x={46 + i} y={42} color={i === 4 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`p3-b3-${i}`} x={47 + i} y={43} color="#CC8400" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-l1-${i}`} x={41} y={37 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-l2-${i}`} x={42} y={37 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-l3-${i}`} x={43} y={37 + i} color={i === 2 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-l4-${i}`} x={44} y={37 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-l5-${i}`} x={45} y={37 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-r1-${i}`} x={54} y={37 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-r2-${i}`} x={55} y={37 + i} color="#FFD700" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-r3-${i}`} x={56} y={37 + i} color={i === 2 ? "#FFF4AA" : "#FFD700"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-r4-${i}`} x={57} y={37 + i} color="#FFA500" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`p3-r5-${i}`} x={58} y={37 + i} color="#FFD700" />
      ))}
    </svg>
  );
}

// FERN WITH BABY FERNS - SIMPLE CLAY POT
export function PixelFern() {
  return (
    <svg width="320" height="400" viewBox="0 0 320 400" className="pixelated w-full h-full">
      <style>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        .fern-sway {
          animation: fernSway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        @keyframes fernSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(2deg); }
        }
      `}</style>
      
      {/* SIMPLE CLAY POT - smooth, minimal decoration */}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`rim-${i}`} x={28 + i} y={80} color="#B8956A" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot1-${i}`} x={29 + i} y={81} color="#D4A574" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot2-${i}`} x={29 + i} y={82} color="#D4A574" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot3-${i}`} x={29 + i} y={83} color="#C9A066" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot4-${i}`} x={28 + i} y={84} color="#D4A574" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot5-${i}`} x={28 + i} y={85} color="#D4A574" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot6-${i}`} x={27 + i} y={86} color="#C9A066" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot7-${i}`} x={27 + i} y={87} color="#D4A574" />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot8-${i}`} x={26 + i} y={88} color="#D4A574" />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot9-${i}`} x={26 + i} y={89} color="#C9A066" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot10-${i}`} x={25 + i} y={90} color="#D4A574" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot11-${i}`} x={25 + i} y={91} color="#D4A574" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot12-${i}`} x={25 + i} y={92} color="#C9A066" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot13-${i}`} x={25 + i} y={93} color="#D4A574" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot14-${i}`} x={25 + i} y={94} color="#D4A574" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot15-${i}`} x={25 + i} y={95} color="#B8956A" />
      ))}
      
      {/* Soil */}
      {[...Array(20)].map((_, i) => (
        <Pixel key={`soil-${i}`} x={30 + i} y={79} color="#8B6F47" />
      ))}
      {[...Array(18)].map((_, i) => (
        <Pixel key={`soil2-${i}`} x={31 + i} y={78} color="#A0826D" />
      ))}
      
      <g className="fern-sway">
        {/* CENTER FERN - Main tall fern */}
        {[...Array(35)].map((_, i) => (
          <React.Fragment key={`main-frond-${i}`}>
            <Pixel x={39} y={77 - i} color="#4C956C" />
            {i % 3 === 0 && i > 5 && (
              <>
                <Pixel x={37} y={77 - i} color="#2C6E49" />
                <Pixel x={38} y={77 - i} color="#2C6E49" />
                <Pixel x={40} y={77 - i} color="#2C6E49" />
                <Pixel x={41} y={77 - i} color="#2C6E49" />
              </>
            )}
          </React.Fragment>
        ))}
        
        {/* Additional center fronds for fullness */}
        {[...Array(30)].map((_, i) => (
          <React.Fragment key={`center-left-${i}`}>
            <Pixel x={35} y={75 - i} color="#4C956C" />
            {i % 3 === 0 && i > 3 && (
              <>
                <Pixel x={33} y={75 - i} color="#2C6E49" />
                <Pixel x={34} y={75 - i} color="#2C6E49" />
                <Pixel x={36} y={75 - i} color="#2C6E49" />
              </>
            )}
          </React.Fragment>
        ))}
        
        {[...Array(30)].map((_, i) => (
          <React.Fragment key={`center-right-${i}`}>
            <Pixel x={43} y={75 - i} color="#4C956C" />
            {i % 3 === 0 && i > 3 && (
              <>
                <Pixel x={42} y={75 - i} color="#2C6E49" />
                <Pixel x={44} y={75 - i} color="#2C6E49" />
                <Pixel x={45} y={75 - i} color="#2C6E49" />
              </>
            )}
          </React.Fragment>
        ))}
        
        {/* BABY FERN - Left side */}
        {[...Array(18)].map((_, i) => (
          <React.Fragment key={`baby-left-${i}`}>
            <Pixel x={28} y={76 - i} color="#4C956C" />
            {i % 4 === 0 && i > 2 && (
              <>
                <Pixel x={26} y={76 - i} color="#2C6E49" />
                <Pixel x={27} y={76 - i} color="#2C6E49" />
                <Pixel x={29} y={76 - i} color="#2C6E49" />
              </>
            )}
          </React.Fragment>
        ))}
        
        {/* BABY FERN - Right side */}
        {[...Array(18)].map((_, i) => (
          <React.Fragment key={`baby-right-${i}`}>
            <Pixel x={50} y={76 - i} color="#4C956C" />
            {i % 4 === 0 && i > 2 && (
              <>
                <Pixel x={49} y={76 - i} color="#2C6E49" />
                <Pixel x={51} y={76 - i} color="#2C6E49" />
                <Pixel x={52} y={76 - i} color="#2C6E49" />
              </>
            )}
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
}

// CACTUS - DESERT STONE POT
export function PixelCactus() {
  return (
    <svg width="320" height="400" viewBox="0 0 320 400" className="pixelated w-full h-full">
      <style>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
      
      {/* DESERT STONE POT - rocky texture */}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`rim-${i}`} x={28 + i} y={80} color="#8B7355" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot1-${i}`} x={29 + i} y={81} color={i % 2 === 0 ? "#A89080" : "#9C8470"} />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot2-${i}`} x={29 + i} y={82} color={i % 3 === 0 ? "#8B7355" : "#A89080"} />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot3-${i}`} x={29 + i} y={83} color="#9C8470" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot4-${i}`} x={28 + i} y={84} color={i % 2 === 0 ? "#A89080" : "#9C8470"} />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot5-${i}`} x={28 + i} y={85} color={i % 3 === 0 ? "#8B7355" : "#A89080"} />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot6-${i}`} x={27 + i} y={86} color="#9C8470" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot7-${i}`} x={27 + i} y={87} color={i % 2 === 0 ? "#A89080" : "#9C8470"} />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot8-${i}`} x={26 + i} y={88} color={i % 3 === 0 ? "#8B7355" : "#A89080"} />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot9-${i}`} x={26 + i} y={89} color="#9C8470" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot10-${i}`} x={25 + i} y={90} color={i % 2 === 0 ? "#A89080" : "#9C8470"} />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot11-${i}`} x={25 + i} y={91} color={i % 3 === 0 ? "#8B7355" : "#A89080"} />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot12-${i}`} x={25 + i} y={92} color="#9C8470" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot13-${i}`} x={25 + i} y={93} color={i % 2 === 0 ? "#A89080" : "#9C8470"} />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot14-${i}`} x={25 + i} y={94} color="#A89080" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot15-${i}`} x={25 + i} y={95} color="#8B7355" />
      ))}
      
      {/* Sand/rocks with texture */}
      {[...Array(20)].map((_, i) => (
        <Pixel key={`sand-${i}`} x={30 + i} y={79} color={i % 3 === 0 ? "#C9996B" : "#D4A373"} />
      ))}
      {[...Array(18)].map((_, i) => (
        <Pixel key={`sand2-${i}`} x={31 + i} y={78} color="#E5C4A1" />
      ))}
      
      {/* Main cactus body - barrel shape with shading */}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`cactus-top1-${i}`} x={36 + i} y={45} color="#4C956C" />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`cactus-top2-${i}`} x={35 + i} y={46} color={[3, 6].includes(i) ? "#5FAA80" : "#4C956C"} />
      ))}
      {[...Array(12)].map((_, i) => (
        <Pixel key={`cactus-top3-${i}`} x={34 + i} y={47} color="#4C956C" />
      ))}
      
      {/* Middle sections with vertical ridges and highlights */}
      {[...Array(30)].map((_, i) => (
        <React.Fragment key={`cactus-mid-${i}`}>
          <Pixel x={34} y={48 + i} color="#2C6E49" />
          <Pixel x={35} y={48 + i} color="#4C956C" />
          <Pixel x={36} y={48 + i} color={i % 4 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={37} y={48 + i} color="#2C6E49" />
          <Pixel x={38} y={48 + i} color="#4C956C" />
          <Pixel x={39} y={48 + i} color={i % 5 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={40} y={48 + i} color="#4C956C" />
          <Pixel x={41} y={48 + i} color="#2C6E49" />
          <Pixel x={42} y={48 + i} color="#4C956C" />
          <Pixel x={43} y={48 + i} color={i % 4 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={44} y={48 + i} color="#2C6E49" />
          <Pixel x={45} y={48 + i} color="#4C956C" />
        </React.Fragment>
      ))}
      
      {/* Spines - enhanced with small clusters */}
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={`spines-${i}`}>
          {i % 2 === 0 && (
            <>
              <Pixel x={35} y={50 + i * 3} color="#FFFFFF" />
              <Pixel x={34} y={51 + i * 3} color="#E0E0E0" />
              <Pixel x={38} y={52 + i * 3} color="#FFFFFF" />
              <Pixel x={39} y={53 + i * 3} color="#E0E0E0" />
              <Pixel x={41} y={50 + i * 3} color="#FFFFFF" />
              <Pixel x={42} y={51 + i * 3} color="#E0E0E0" />
              <Pixel x={44} y={52 + i * 3} color="#FFFFFF" />
              <Pixel x={45} y={53 + i * 3} color="#E0E0E0" />
            </>
          )}
        </React.Fragment>
      ))}
      
      {/* Left arm with shading */}
      {[...Array(12)].map((_, i) => (
        <React.Fragment key={`left-arm-${i}`}>
          <Pixel x={27 + i} y={58} color={i % 3 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={27 + i} y={59} color="#4C956C" />
          <Pixel x={27 + i} y={60} color="#4C956C" />
          <Pixel x={27 + i} y={61} color="#2C6E49" />
        </React.Fragment>
      ))}
      {[...Array(6)].map((_, i) => (
        <React.Fragment key={`left-arm-up-${i}`}>
          <Pixel x={27} y={52 + i} color="#4C956C" />
          <Pixel x={28} y={52 + i} color={i % 2 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={29} y={52 + i} color="#2C6E49" />
          <Pixel x={30} y={52 + i} color="#4C956C" />
        </React.Fragment>
      ))}
      
      {/* Right arm with shading */}
      {[...Array(12)].map((_, i) => (
        <React.Fragment key={`right-arm-${i}`}>
          <Pixel x={41 + i} y={65} color={i % 3 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={41 + i} y={66} color="#4C956C" />
          <Pixel x={41 + i} y={67} color="#4C956C" />
          <Pixel x={41 + i} y={68} color="#2C6E49" />
        </React.Fragment>
      ))}
      {[...Array(6)].map((_, i) => (
        <React.Fragment key={`right-arm-up-${i}`}>
          <Pixel x={50} y={59 + i} color="#4C956C" />
          <Pixel x={51} y={59 + i} color={i % 2 === 0 ? "#5FAA80" : "#4C956C"} />
          <Pixel x={52} y={59 + i} color="#2C6E49" />
          <Pixel x={53} y={59 + i} color="#4C956C" />
        </React.Fragment>
      ))}
    </svg>
  );
}

// ORCHID WITH MULTIPLE STEMS AT VARYING HEIGHTS - ELEGANT CERAMIC POT
export function PixelOrchid() {
  return (
    <svg width="320" height="400" viewBox="0 0 320 400" className="pixelated w-full h-full">
      <style>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
      
      {/* ELEGANT CERAMIC POT - smooth with decorative elements */}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`rim-${i}`} x={28 + i} y={80} color="#DAA520" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot1-${i}`} x={29 + i} y={81} color="#F5F5F5" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot2-${i}`} x={29 + i} y={82} color="#FFFFFF" />
      ))}
      {[...Array(22)].map((_, i) => (
        <Pixel key={`pot3-${i}`} x={29 + i} y={83} color="#F0F0F0" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`band-${i}`} x={28 + i} y={84} color="#E6D7ED" />
      ))}
      {[...Array(24)].map((_, i) => (
        <Pixel key={`pot4-${i}`} x={28 + i} y={85} color="#FFFFFF" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot5-${i}`} x={27 + i} y={86} color="#F5F5F5" />
      ))}
      {[...Array(26)].map((_, i) => (
        <Pixel key={`pot6-${i}`} x={27 + i} y={87} color="#FFFFFF" />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot7-${i}`} x={26 + i} y={88} color="#F0F0F0" />
      ))}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`pot8-${i}`} x={26 + i} y={89} color="#F5F5F5" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot9-${i}`} x={25 + i} y={90} color="#FFFFFF" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot10-${i}`} x={25 + i} y={91} color="#F0F0F0" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot11-${i}`} x={25 + i} y={92} color="#F5F5F5" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot12-${i}`} x={25 + i} y={93} color="#FFFFFF" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot13-${i}`} x={25 + i} y={94} color="#F0F0F0" />
      ))}
      {[...Array(30)].map((_, i) => (
        <Pixel key={`pot14-${i}`} x={25 + i} y={95} color="#E0E0E0" />
      ))}
      
      {/* Moss/bark soil */}
      {[...Array(20)].map((_, i) => (
        <Pixel key={`soil-${i}`} x={30 + i} y={79} color="#5D4E37" />
      ))}
      {[...Array(18)].map((_, i) => (
        <Pixel key={`soil2-${i}`} x={31 + i} y={78} color="#6F5F4C" />
      ))}
      
      {/* LARGE ORCHID LEAVES AT BASE - broad, oval-shaped, dark green with glossy highlights */}
      {/* Left leaf 1 - largest */}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`lleaf1-${i}`} x={27 + i} y={70} color="#1F5C3A" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`lleaf2-${i}`} x={25 + i} y={71} color={i === 3 ? "#3D8B5F" : "#1F5C3A"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`lleaf3-${i}`} x={24 + i} y={72} color={i === 4 ? "#3D8B5F" : "#1F5C3A"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`lleaf4-${i}`} x={23 + i} y={73} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`lleaf5-${i}`} x={23 + i} y={74} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`lleaf6-${i}`} x={23 + i} y={75} color="#2C6E49" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`lleaf7-${i}`} x={24 + i} y={76} color="#2C6E49" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`lleaf8-${i}`} x={25 + i} y={77} color="#2C6E49" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`lleaf9-${i}`} x={27 + i} y={78} color="#2C6E49" />
      ))}
      
      {/* Right leaf 1 */}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`rleaf1-${i}`} x={50 + i} y={70} color="#1F5C3A" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`rleaf2-${i}`} x={49 + i} y={71} color={i === 3 ? "#3D8B5F" : "#1F5C3A"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`rleaf3-${i}`} x={48 + i} y={72} color={i === 4 ? "#3D8B5F" : "#1F5C3A"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`rleaf4-${i}`} x={47 + i} y={73} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`rleaf5-${i}`} x={47 + i} y={74} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`rleaf6-${i}`} x={47 + i} y={75} color="#2C6E49" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`rleaf7-${i}`} x={48 + i} y={76} color="#2C6E49" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`rleaf8-${i}`} x={49 + i} y={77} color="#2C6E49" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`rleaf9-${i}`} x={50 + i} y={78} color="#2C6E49" />
      ))}
      
      {/* Center back leaf */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`cleaf1-${i}`} x={37 + i} y={67} color="#1F5C3A" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`cleaf2-${i}`} x={36 + i} y={68} color={i === 4 ? "#3D8B5F" : "#1F5C3A"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`cleaf3-${i}`} x={35 + i} y={69} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`cleaf4-${i}`} x={35 + i} y={70} color={[4, 5].includes(i) ? "#3D8B5F" : "#2C6E49"} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Pixel key={`cleaf5-${i}`} x={35 + i} y={71} color="#2C6E49" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`cleaf6-${i}`} x={36 + i} y={72} color="#2C6E49" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`cleaf7-${i}`} x={37 + i} y={73} color="#2C6E49" />
      ))}
      
      {/* STEM 1 - Tallest flower */}
      {[...Array(45)].map((_, i) => (
        <Pixel key={`stem1-${i}`} x={40} y={77 - i} color="#4C956C" />
      ))}
      
      {/* Small bud on stem 1 */}
      <Pixel x={39} y={45} color="#B19CD9" />
      <Pixel x={40} y={45} color="#B19CD9" />
      <Pixel x={39} y={46} color="#9B59B6" />
      <Pixel x={40} y={46} color="#9B59B6" />
      
      {/* Flower 1 - Top tallest with detailed petals */}
      <Pixel x={39} y={24} color="#FFD700" />
      <Pixel x={40} y={24} color="#FFD700" />
      <Pixel x={41} y={24} color="#FFD700" />
      <Pixel x={40} y={25} color="#FFC107" />
      
      {/* White lip with purple spots */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f1-lip1-${i}`} x={37 + i} y={27} color="#FFFFFF" />
      ))}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`f1-lip2-${i}`} x={36 + i} y={28} color="#FFFFFF" />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`f1-lip3-${i}`} x={36 + i} y={29} color={[1, 6].includes(i) ? "#F8E8FF" : "#FFFFFF"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`f1-lip4-${i}`} x={36 + i} y={30} color="#FFFFFF" />
      ))}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`f1-lip5-${i}`} x={36 + i} y={31} color="#FFFFFF" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f1-lip6-${i}`} x={37 + i} y={32} color="#FFFFFF" />
      ))}
      
      <Pixel x={38} y={28} color="#9B59B6" />
      <Pixel x={40} y={28} color="#9B59B6" />
      <Pixel x={42} y={28} color="#9B59B6" />
      <Pixel x={37} y={29} color="#B19CD9" />
      <Pixel x={39} y={29} color="#9B59B6" />
      <Pixel x={41} y={29} color="#9B59B6" />
      <Pixel x={43} y={29} color="#B19CD9" />
      <Pixel x={38} y={30} color="#9B59B6" />
      <Pixel x={40} y={30} color="#8E44AD" />
      <Pixel x={42} y={30} color="#9B59B6" />
      <Pixel x={39} y={31} color="#B19CD9" />
      <Pixel x={41} y={31} color="#B19CD9" />
      
      {/* Upper petals - gradient purple with highlights */}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f1-top1-${i}`} x={37 + i} y={17} color="#9B59B6" />
      ))}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`f1-top2-${i}`} x={36 + i} y={18} color={i === 3 ? "#B19CD9" : "#A876BF"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`f1-top3-${i}`} x={36 + i} y={19} color={i === 4 ? "#D8BFD8" : "#C9B3E6"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`f1-top4-${i}`} x={36 + i} y={20} color={[3, 4].includes(i) ? "#F0E6F6" : "#D8BFD8"} />
      ))}
      {[...Array(8)].map((_, i) => (
        <Pixel key={`f1-top5-${i}`} x={36 + i} y={21} color="#E6D7ED" />
      ))}
      {[...Array(7)].map((_, i) => (
        <Pixel key={`f1-top6-${i}`} x={36 + i} y={22} color={i === 3 ? "#F8E8FF" : "#F0E6F6"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f1-top7-${i}`} x={37 + i} y={23} color="#F0E6F6" />
      ))}
      
      {/* Side petals with shading */}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-left1-${i}`} x={31} y={23 + i} color="#9B59B6" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-left2-${i}`} x={32} y={23 + i} color={i === 2 ? "#B19CD9" : "#A876BF"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-left3-${i}`} x={33} y={24 + i} color={i === 2 ? "#F0E6F6" : "#D8BFD8"} />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f1-left4-${i}`} x={34} y={25 + i} color="#F0E6F6" />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f1-right1-${i}`} x={45} y={25 + i} color="#F0E6F6" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-right2-${i}`} x={46} y={24 + i} color={i === 2 ? "#F0E6F6" : "#D8BFD8"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-right3-${i}`} x={47} y={23 + i} color={i === 2 ? "#B19CD9" : "#A876BF"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f1-right4-${i}`} x={48} y={23 + i} color="#9B59B6" />
      ))}
      
      {/* STEM 2 - Medium left */}
      {[...Array(38)].map((_, i) => (
        <Pixel key={`stem2-${i}`} x={30} y={76 - i} color="#4C956C" />
      ))}
      
      {/* Small bud on stem 2 */}
      <Pixel x={29} y={50} color="#B19CD9" />
      <Pixel x={30} y={50} color="#B19CD9" />
      <Pixel x={29} y={51} color="#9B59B6" />
      <Pixel x={30} y={51} color="#9B59B6" />
      
      {/* Flower 2 - Medium height with details */}
      <Pixel x={29} y={31} color="#FFD700" />
      <Pixel x={30} y={31} color="#FFD700" />
      <Pixel x={31} y={31} color="#FFD700" />
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f2-lip1-${i}`} x={27 + i} y={33} color="#FFFFFF" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f2-lip2-${i}`} x={27 + i} y={34} color={[1, 4].includes(i) ? "#F8E8FF" : "#FFFFFF"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f2-lip3-${i}`} x={27 + i} y={35} color="#FFFFFF" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f2-lip4-${i}`} x={27 + i} y={36} color="#FFFFFF" />
      ))}
      <Pixel x={28} y={34} color="#9B59B6" />
      <Pixel x={30} y={34} color="#9B59B6" />
      <Pixel x={32} y={34} color="#9B59B6" />
      <Pixel x={29} y={35} color="#9B59B6" />
      <Pixel x={31} y={35} color="#8E44AD" />
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f2-top1-${i}`} x={27 + i} y={26} color="#9B59B6" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f2-top2-${i}`} x={27 + i} y={27} color={i === 3 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f2-top3-${i}`} x={27 + i} y={28} color={i === 3 ? "#F0E6F6" : "#D8BFD8"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f2-top4-${i}`} x={27 + i} y={29} color="#F0E6F6" />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f2-left-${i}`} x={23} y={30 + i} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f2-right-${i}`} x={36} y={30 + i} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      
      {/* STEM 3 - Shorter right */}
      {[...Array(33)].map((_, i) => (
        <Pixel key={`stem3-${i}`} x={49} y={76 - i} color="#4C956C" />
      ))}
      
      {/* Small bud on stem 3 */}
      <Pixel x={48} y={53} color="#B19CD9" />
      <Pixel x={49} y={53} color="#B19CD9" />
      <Pixel x={48} y={54} color="#9B59B6" />
      <Pixel x={49} y={54} color="#9B59B6" />
      
      {/* Flower 3 - Shorter with details */}
      <Pixel x={48} y={37} color="#FFD700" />
      <Pixel x={49} y={37} color="#FFD700" />
      <Pixel x={50} y={37} color="#FFD700" />
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f3-lip1-${i}`} x={46 + i} y={39} color="#FFFFFF" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f3-lip2-${i}`} x={46 + i} y={40} color={[1, 4].includes(i) ? "#F8E8FF" : "#FFFFFF"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f3-lip3-${i}`} x={46 + i} y={41} color="#FFFFFF" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f3-lip4-${i}`} x={46 + i} y={42} color="#FFFFFF" />
      ))}
      <Pixel x={47} y={40} color="#9B59B6" />
      <Pixel x={49} y={40} color="#9B59B6" />
      <Pixel x={51} y={40} color="#9B59B6" />
      <Pixel x={48} y={41} color="#9B59B6" />
      <Pixel x={50} y={41} color="#8E44AD" />
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f3-top1-${i}`} x={46 + i} y={32} color="#9B59B6" />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f3-top2-${i}`} x={46 + i} y={33} color={i === 3 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(6)].map((_, i) => (
        <Pixel key={`f3-top3-${i}`} x={46 + i} y={34} color={i === 3 ? "#F0E6F6" : "#D8BFD8"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f3-top4-${i}`} x={46 + i} y={35} color="#F0E6F6" />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f3-left-${i}`} x={42} y={36 + i} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f3-right-${i}`} x={55} y={36 + i} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      
      {/* STEM 4 - Short left-center */}
      {[...Array(28)].map((_, i) => (
        <Pixel key={`stem4-${i}`} x={35} y={75 - i} color="#4C956C" />
      ))}
      
      {/* Flower 4 - Smallest with details */}
      <Pixel x={34} y={42} color="#FFD700" />
      <Pixel x={35} y={42} color="#FFD700" />
      <Pixel x={36} y={42} color="#FFD700" />
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f4-lip1-${i}`} x={33 + i} y={44} color="#FFFFFF" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f4-lip2-${i}`} x={32 + i} y={45} color="#FFFFFF" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f4-lip3-${i}`} x={32 + i} y={46} color="#FFFFFF" />
      ))}
      <Pixel x={33} y={45} color="#9B59B6" />
      <Pixel x={35} y={45} color="#9B59B6" />
      <Pixel x={34} y={46} color="#8E44AD" />
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f4-top1-${i}`} x={33 + i} y={38} color="#9B59B6" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f4-top2-${i}`} x={32 + i} y={39} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f4-top3-${i}`} x={32 + i} y={40} color="#D8BFD8" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`f4-left-${i}`} x={29} y={42 + i} color="#A876BF" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`f4-right-${i}`} x={40} y={42 + i} color="#A876BF" />
      ))}
      
      {/* STEM 5 - Very short right-center */}
      {[...Array(25)].map((_, i) => (
        <Pixel key={`stem5-${i}`} x={45} y={75 - i} color="#4C956C" />
      ))}
      
      {/* Flower 5 - Very small with details */}
      <Pixel x={44} y={46} color="#FFD700" />
      <Pixel x={45} y={46} color="#FFD700" />
      <Pixel x={46} y={46} color="#FFD700" />
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f5-lip1-${i}`} x={43 + i} y={48} color="#FFFFFF" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f5-lip2-${i}`} x={42 + i} y={49} color="#FFFFFF" />
      ))}
      <Pixel x={43} y={49} color="#9B59B6" />
      <Pixel x={45} y={49} color="#9B59B6" />
      {[...Array(4)].map((_, i) => (
        <Pixel key={`f5-top1-${i}`} x={43 + i} y={43} color="#9B59B6" />
      ))}
      {[...Array(5)].map((_, i) => (
        <Pixel key={`f5-top2-${i}`} x={42 + i} y={44} color={i === 2 ? "#C9B3E6" : "#A876BF"} />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`f5-left-${i}`} x={39} y={46 + i} color="#A876BF" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Pixel key={`f5-right-${i}`} x={50} y={46 + i} color="#A876BF" />
      ))}
    </svg>
  );
}
