import React from 'react';

const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a
        href="tel:+14084726086"
        className="btn-luxury btn-filled rounded-full p-4 shadow-lg flex items-center justify-center"
        aria-label="Call Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a
        href="sms:+14084726086"
        className="btn-luxury btn-filled rounded-full p-4 shadow-lg flex items-center justify-center"
        aria-label="Text Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.11C6.234 14.05 9.114 12 12 12c2.887 0 5.767 2.05 8.405 4.949L21 20l-1.395-3.11c-.934-2.083-2.92-4.05-5.357-4.949" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingActionButtons;
