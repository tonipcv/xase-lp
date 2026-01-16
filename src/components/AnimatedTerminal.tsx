'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTerminalProps {
  lines: string[];
  speed?: number;
}

export default function AnimatedTerminal({ lines, speed = 30 }: AnimatedTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + currentLine[charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentText]);
        setCurrentText('');
        setCharIndex(0);
        setCurrentLineIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLineIndex, currentText, lines, speed]);

  const renderLine = (line: string, index: number) => {
    // Syntax highlighting
    if (line.startsWith('$')) {
      return (
        <div key={index} className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span className="text-gray-300">{line.slice(2)}</span>
        </div>
      );
    }
    
    if (line.includes('✓')) {
      return (
        <div key={index} className="text-green-400">{line}</div>
      );
    }
    
    if (line === 'ACCESS GRANTED') {
      return (
        <motion.div 
          key={index} 
          className="text-green-400 font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {line}
        </motion.div>
      );
    }
    
    if (line.startsWith('Session:') || line.startsWith('Evidence')) {
      return <div key={index} className="text-blue-400">{line}</div>;
    }
    
    return <div key={index} className="text-gray-400">{line}</div>;
  };

  return (
    <div className="relative font-mono text-sm">
      {/* CRT Scan Lines Effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />
      
      {/* CRT Flicker Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500/5 pointer-events-none z-10"
        animate={{
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Terminal Content */}
      <div className="relative z-20 space-y-1">
        {displayedLines.map((line, index) => renderLine(line, index))}
        
        {currentText && (
          <div className="flex items-center gap-2">
            {currentText.startsWith('$') ? (
              <>
                <span className="text-green-400">$</span>
                <span className="text-gray-300">{currentText.slice(2)}</span>
              </>
            ) : (
              <span className={
                currentText.includes('✓') ? 'text-green-400' :
                currentText.startsWith('Session:') || currentText.startsWith('Evidence') ? 'text-blue-400' :
                'text-gray-400'
              }>
                {currentText}
              </span>
            )}
            <motion.span
              className="inline-block w-2 h-4 bg-green-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>
        )}
      </div>

      {/* CRT Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px rgba(34, 197, 94, 0.1)',
        }}
      />
    </div>
  );
}
