import { useRef } from 'react';
import VariableProximity from './VariableProximity';

export default function HeroText() {
  const containerRef = useRef(null);

  // We use this overlay to capture mouse movement
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none"
    >
      <div className="max-w-4xl px-4 text-center">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-md cursor-default"
          aria-label="Expand your Health and Beauty market in Canada through expert distribution."
        >
          <div className="inline-block">
             <VariableProximity
                label="Expand your Health and Beauty market in Canada through expert distribution."
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                style={{ color: 'white' }}
              />
          </div>
        </h1>
        
        <div className="mt-8 pointer-events-auto">
             <a 
              href="/services" 
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg border border-white/20 backdrop-blur-sm"
            >
              Explore Services
            </a>
        </div>
      </div>
    </div>
  );
}
