// src/components/products/ColorSwatch.jsx
import { Check } from 'lucide-react';

const ColorSwatch = ({ colors, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => onSelect(color)}
          className={`relative w-12 h-12 rounded-full transition-all duration-200 ${
            selected === color ? 'ring-2 ring-[#1E2A5A] ring-offset-2 scale-110' : 'hover:scale-105'
          }`}
          style={{ backgroundColor: color }}
          title={color}
        >
          {selected === color && (
            <Check className="absolute inset-0 m-auto text-white drop-shadow-md" size={20} />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorSwatch;