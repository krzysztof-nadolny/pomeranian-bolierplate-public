import { useEffect, useState } from 'react';
import './styles.css';

export const TimeExercise = () => {
  const [text, setText] = useState('I love React! :) ');
  const [isAnimated, setIsAnimated] = useState(true);
  const [opacity, setOpacity] = useState(0.25)

  function animateText(text) {
    const lastChar = text.charAt(text.length - 1);
    const remainingText = text.substring(0, text.length - 1);
    return lastChar + remainingText;
  }

  function toggleAnimation() {
    setIsAnimated((prevState) => !prevState);
  }

  useEffect(() => {
    let interval;
    if (isAnimated) {
      interval = setInterval(() => {
        setText(animateText(text));
      }, 200);
      return () => clearInterval(interval);
    }
  
  }, [text, isAnimated]);


  useEffect(()=>{
    const interval2 = setInterval(()=>{
      setOpacity(opacity - 0.005)
    }, 50)

    return ()=>clearInterval(interval2)
  },[opacity])

  return (
    <div>
      <h1>Animation</h1>
      <h2>{text}</h2>
      <button onClick={toggleAnimation}>
        {isAnimated ? 'Pause' : 'Start'}
      </button>
      <div className="animated-box" style={{opacity:opacity}}></div>
    </div>
  );
};
