import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import SuggestionChips from './components/SuggestionChips';
import InstallPwaModal from './components/InstallPwaModal';
import { sendMessageToBondhuAI } from './services/geminiService';
import { Message } from './types';

// New Logo Component for BondhuAI
const BondhuAILogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M4 14H2" /><path d="M20 14H22" /><path d="M15 18v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2" /><path d="M9 12V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
      </svg>
    </div>
    <div>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
            BondhuAI
        </h1>
        <p className="text-sm text-gray-500 -mt-1">Your friendly AI assistant</p>
    </div>
  </div>
);


function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (isLoading) return;

    const userMessage: Message = { role: 'user', text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const modelResponse = await sendMessageToBondhuAI(text);
      const modelMessage: Message = { role: 'model', text: modelResponse };
      setMessages((prevMessages) => [...prevMessages, modelMessage]);
    } catch (error) {
      console.error("Failed to get response from AI:", error);
      const errorMessage: Message = {
        role: 'model',
        text: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <>
    <div className="flex flex-col h-screen font-sans">
      <header className="bg-slate-100/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-200/80">
          <div className="max-w-3xl mx-auto py-3 px-6 flex items-center justify-between">
              <BondhuAILogo className="animate-bounce-in" />
              <button 
                onClick={() => setShowInstallModal(true)}
                className="bg-white/60 backdrop-blur-sm text-sm text-teal-800 font-medium py-2 px-4 rounded-full border border-teal-200/60 shadow-lg hover:bg-white hover:border-teal-300 hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center gap-2"
                aria-label="Install App"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                 </svg>
                <span>Install App</span>
              </button>
          </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-4 space-y-6">
          {messages.length === 0 && !isLoading && (
              <div className="text-center py-10 animate-fade-in-up">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-xl mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white -rotate-12 transform">
                          <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M4 14H2" /><path d="M20 14H22" /><path d="M15 18v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2" /><path d="M9 12V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
                      </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Kemon achen? 👋</h2>
                  <p className="text-gray-500 mt-2 text-lg">Ami BondhuAI. পড়াশোনা, কাজ বা প্রতিদিনের যেকোনো প্রয়োজনে আমি আছি আপনার পাশে। চলুন, শুরু করা যাক!</p>
              </div>
          )}
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex items-start gap-4 justify-start animate-fade-in-up">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M4 14H2" /><path d="M20 14H22" /><path d="M15 18v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2" /><path d="M9 12V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
                    </svg>
                </div>
                <div className="px-4 py-3 rounded-2xl max-w-md md:max-w-lg bg-white text-gray-800 rounded-bl-none shadow-lg">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <div className="w-full">
        <SuggestionChips onChipClick={handleChipClick} isVisible={messages.length === 0 && !isLoading} />
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
    {showInstallModal && <InstallPwaModal onClose={() => setShowInstallModal(false)} />}
    </>
  );
}

export default App;