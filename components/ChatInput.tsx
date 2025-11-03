import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="bg-slate-100/80 backdrop-blur-md p-4 sticky bottom-0 border-t border-gray-200/80">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="BondhuAI er sathe kotha bolun..."
          disabled={isLoading}
          className={`w-full px-5 py-3 border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all duration-300 shadow-md ${
            input.trim()
              ? 'bg-gradient-to-r from-teal-50 to-cyan-50'
              : 'bg-white'
          }`}
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-br from-teal-400 to-cyan-500 text-white p-3.5 rounded-full shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-500/70"
          aria-label="Send message"
        >
          {isLoading ? (
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
