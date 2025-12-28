'use client';
import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  speed?: number;
}

export default function Terminal({ lines, speed = 50 }: TerminalProps) {
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
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDisplayedLines(prev => [...prev, currentText]);
      setCurrentText('');
      setCharIndex(0);
      setCurrentLineIndex(currentLineIndex + 1);
    }
  }, [charIndex, currentLineIndex, lines, speed, currentText]);

  return (
    <div className="bg-[#0d0e10] border border-[#2d2d2d] rounded-xl p-4 md:p-6 font-mono text-[12px] md:text-sm overflow-x-auto">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-[11px] md:text-xs text-gray-600 ml-2">terminal</span>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, i) => (
          <div key={i} className="text-gray-300">{line}</div>
        ))}
        {currentText && (
          <div className="text-gray-300">
            {currentText}
            <span className="inline-block w-1.5 md:w-2 h-3.5 md:h-4 bg-green-400 ml-1 animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}
