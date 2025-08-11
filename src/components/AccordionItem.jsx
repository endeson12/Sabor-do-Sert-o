import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ question, answer, isFirst = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-accent-green/20 ${isFirst ? 'border-t' : ''}`}>
      <button
        onClick={toggleAccordion}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-accent-warm/5 hover:to-accent-green/5 transition-all duration-300 group"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Fechar' : 'Abrir'} pergunta: ${question}`}
      >
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-warm transition-colors duration-300 pr-4">
          {question}
        </h3>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-warm to-accent-green text-white group-hover:scale-110 transition-transform duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-6 pb-5"
            >
              <div className="bg-gradient-to-r from-accent-warm/5 to-accent-green/5 rounded-lg p-4 border-l-4 border-accent-warm">
                <p className="text-neutral leading-relaxed">
                  {answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
