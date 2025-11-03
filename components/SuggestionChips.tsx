import React from 'react';

interface SuggestionChipsProps {
  onChipClick: (prompt: string) => void;
  isVisible: boolean;
}

const suggestions = [
  "Photosynthesis bujhiye dao",
  "Newton's 2nd Law ki?",
  "How to write a professional email?",
  "একটি মজার জোকস বলো",
];

const SuggestionChips: React.FC<SuggestionChipsProps> = ({ onChipClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 pb-4 animate-fade-in-up">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {suggestions.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onChipClick(prompt)}
            className="bg-white/60 backdrop-blur-sm text-sm text-teal-800 font-medium py-2 px-4 rounded-full border border-teal-200/60 shadow-lg hover:bg-white hover:border-teal-300 hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;