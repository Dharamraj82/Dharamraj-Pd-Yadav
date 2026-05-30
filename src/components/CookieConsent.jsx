import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-[9999]"
        >
          <div className={`p-6 rounded-2xl shadow-2xl border backdrop-blur-xl ${isDark ? 'bg-darkBg/90 border-white/10 text-white' : 'bg-white/90 border-slate-200 text-slate-800'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🍪</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">We value your privacy</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={handleReject}
                className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-colors text-sm border ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-slate-300 hover:bg-slate-100'}`}
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 px-4 bg-primary hover:bg-orange-600 text-white rounded-xl font-medium transition-colors text-sm shadow-lg shadow-primary/30"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
