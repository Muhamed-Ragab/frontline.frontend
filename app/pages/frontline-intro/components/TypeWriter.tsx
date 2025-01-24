import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    if (displayedText.length < text.length) {
      typingTimer = setTimeout(() => {
        setDisplayedText(prev => prev + text[prev.length]);
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimer);
  }, [displayedText, text, typingSpeed]);

  return (
    <div className='flex flex-col gap-3 font-medium text-lg text-foreground'>
      {displayedText.split("\n").map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-1 text-5xl'
        >
          <p>{line}</p>
          {index === displayedText.split("\n").length - 1 ? (
            <motion.div
              className='w-1.5 max-h-full h-[48px] bg-customPrimary animate-pulse'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
};

export default TypeWriter;
