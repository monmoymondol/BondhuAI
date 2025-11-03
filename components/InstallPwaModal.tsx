import React from 'react';

interface InstallPwaModalProps {
  onClose: () => void;
}

const InstallPwaModal: React.FC<InstallPwaModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center relative transform transition-all duration-300 scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Install BondhuAI</h2>
        <p className="text-gray-600 mt-2">
            BondhuAI is a web app. Er kono <code className="bg-gray-200 text-gray-700 text-sm px-1.5 py-0.5 rounded">.apk</code> file nei. Kintu, apni eta app er moto Home Screen e add korte paren!
        </p>

        <div className="text-left mt-6 space-y-4">
            <div>
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Chrome" className="w-5 h-5"/>
                    Android (Chrome)
                </h3>
                <p className="text-gray-600 text-sm mt-1 ml-7">
                    Browser er <span className="font-bold">Menu</span> (⋮) te tap korun, tarpor <span className="font-bold">"Add to Home Screen"</span> select korun.
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 014 0 2 2 0 004 0 2 2 0 013.464 1.293 6.012 6.012 0 01-1.896 2.706c-.293.189-.546.383-.746.597-.333.36-.584.79-.746 1.293a1 1 0 01-1.932-.518c.138-.43.354-.813.63-1.14.28-.333.618-.622.988-.862a3.99 3.99 0 00-1.126-5.35c-.765-.6-1.86-.944-3.024-.944a4.02 4.02 0 00-3.024.944 3.99 3.99 0 00-1.126 5.35c.37.24.708.53.988.862.276.327.492.71.63 1.14a1 1 0 01-1.932.518c-.162-.504-.413-.933-.746-1.293-.2-.214-.453-.408-.746-.597z" clipRule="evenodd" />
                    </svg>
                    iPhone (Safari)
                </h3>
                <p className="text-gray-600 text-sm mt-1 ml-7">
                    Browser er <span className="font-bold">Share</span> button e tap korun, scroll kore <span className="font-bold">"Add to Home Screen"</span> select korun.
                </p>
            </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-8 bg-gradient-to-br from-teal-400 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-500/70"
        >
          Bujhechi! (Got it!)
        </button>
      </div>
    </div>
  );
};

export default InstallPwaModal;
