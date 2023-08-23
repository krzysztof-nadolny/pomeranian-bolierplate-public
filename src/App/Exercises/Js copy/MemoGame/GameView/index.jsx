import { useEffect } from 'react';
import { Button } from '../Button';
import { Menu } from '../Menu';
import './index.css';

export const GameView = ({
  initialTime,
  time,
  setTime,
  setElements,
  setGameStarted,
  setGameStopped,
  setScore,
  score,
}) => {
  const handleStopClick = () => {
    setScore(0);
    setTime(60);
    setElements(8);
    setGameStarted(false);
    setGameStopped(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);

    if (time === 0) {
      setGameStarted(false);
      setGameStopped(true);
      console.log('stops');
    }

    return () => clearTimeout(timeoutId);
  }, [time, setTime, setGameStopped]);

  return (
    <div className="memo-game-view">
      <Menu label="CZAS GRY">
        <Button>{time}</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button>{score}</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={handleStopClick}>PASS</Button>
      </Menu>
    </div>
  );
};
