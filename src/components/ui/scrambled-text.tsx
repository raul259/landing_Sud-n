import { useEffect, useRef, useState } from 'react';

interface ScrambledTextProps {
  text: string;
  className?: string;
  delay?: number;
  scrambleDuration?: number;
  finalDelay?: number;
}

export const ScrambledText: React.FC<ScrambledTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  scrambleDuration = 2000,
  finalDelay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  const scrambleText = (targetText: string, duration: number) => {
    const startTime = Date.now();
    const textLength = targetText.length;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      let result = '';
      
      for (let i = 0; i < textLength; i++) {
        if (targetText[i] === ' ') {
          result += ' ';
        } else if (progress > i / textLength) {
          // Character is "solved"
          result += targetText[i];
        } else {
          // Character is still scrambling
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(result);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
      }
    };
    
    animate();
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            setTimeout(() => {
              scrambleText(text, scrambleDuration);
            }, delay + finalDelay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [text, delay, scrambleDuration, finalDelay, isVisible]);

  return (
    <div ref={ref} className={className}>
      {displayText || text.split('').map((char, i) => (
        <span key={i} style={{ opacity: 0 }}>
          {char}
        </span>
      ))}
    </div>
  );
};