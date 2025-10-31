import { useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordByWord?: boolean;
}

export const BlurText: React.FC<BlurTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  wordByWord = false 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (wordByWord) {
                const words = element.querySelectorAll('.blur-text-word');
                words.forEach((word, index) => {
                  setTimeout(() => {
                    word.classList.add('in-view');
                  }, index * 150);
                });
              } else {
                element.classList.add('in-view');
              }
            }, delay);
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
  }, [delay, wordByWord]);

  if (wordByWord) {
    const words = text.split(' ');
    return (
      <div ref={ref} className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="blur-text-word mr-2"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`blur-text ${className}`}>
      {text}
    </div>
  );
};