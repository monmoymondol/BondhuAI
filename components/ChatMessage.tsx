import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const UserIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0 shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
      </svg>
    </div>
);

const BondhuAIIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M4 14H2" /><path d="M20 14H22" /><path d="M15 18v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2" /><path d="M9 12V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
        </svg>
    </div>
);

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-4 animate-fade-in-up ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <BondhuAIIcon />}
      <div
        className={`px-5 py-3 rounded-3xl max-w-md md:max-w-lg break-words whitespace-pre-wrap shadow-xl ${
          isUser
            ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        }`}
      >
        {message.text}
      </div>
       {isUser && <UserIcon />}
    </div>
  );
};

export default ChatMessage;