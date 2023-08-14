import { useState } from 'react';
import { GameView } from './GameView';
import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygroundView';
import './styles.css';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 5;

export const MemoGame = () => {
  //GAME STATES
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);

  //GAME VALUES
  const [score, setScore] = useState(0);
  const [elements, setElements] = useState(8);
  const [time, setTime] = useState(INITIAL_TIME);

  return (
    <div>
      <h4>Memo Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.
      </p>
      {isGameStopped && <SummaryView />}
      {!isGameStarted && (
        <MenuView
          setTime={setTime}
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
          elements={elements}
          setElements={setElements}
        ></MenuView>
      )}
      {isGameStarted && (
        <GameView
          time={time}
          setElements={setElements}
          setTime={setTime}
          score={score}
          setScore={setScore}
          setGameStarted={setIsGameStarted}
          setGameStopped={setIsGameStopped}
        ></GameView>
      )}
      {isGameStarted && (
        <PlaygroundView
          score={score}
          setScore={setScore}
          elements={elements}
          setElements={setElements}
          setIsGameStopped={setIsGameStopped}
          setIsGameStarted={setIsGameStarted}
        ></PlaygroundView>
      )}
    </div>
  );
};
