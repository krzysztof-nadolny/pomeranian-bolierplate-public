import { check } from 'prettier';
import { useEffect, useState } from 'react';

//1. Generate random alphbet pair

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const generateRandomLetter = (alphabet) => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const generateRandomMemoPairArray = (alphabet, pairs) => {
  const randomMemoArray = [];
  for (let i = 0; i < pairs; i++) {
    let randomLetter = generateRandomLetter(alphabet);
    while (randomMemoArray.includes(randomLetter)) {
      randomLetter = generateRandomLetter(alphabet);
    }
    for (let i = 0; i < 2; i++) {
      let memoPair = randomLetter;
      randomMemoArray.push(memoPair);
    }
  }
  //shuffle array
  const shuffledMemoArray = randomMemoArray.sort(() => Math.random() - 0.5);
  //create array with objects

  const shuffledObjectArray = shuffledMemoArray.map((element, index) => ({
    id: index,
    value: element,
    status: '',
  }));

  return shuffledObjectArray;
};

export const PlaygroundView = ({
  elements,
  score,
  setScore,
  setIsGameStopped,
  setIsGameStarted,
}) => {
  const [arrayWithMemo, setArrayWithMemo] = useState(
    generateRandomMemoPairArray(alphabet, elements)
  );
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    // Check if all elements have status 'active'
    const allActive = arrayWithMemo.every(
      (element) => element.status === 'active'
    );

    // If all elements are active, set isGameStopped to true
    if (allActive) {
      setIsGameStarted(false);
      setIsGameStopped(true);
    }
  }, [arrayWithMemo]);

  const handleScore = () => {
    setScore(score + 1);
  };

  const check = (current) => {
    if (arrayWithMemo[current].value === arrayWithMemo[prev].value) {
      arrayWithMemo[current].status = 'active';
      arrayWithMemo[prev].status = 'active';
      setArrayWithMemo([...arrayWithMemo]);
      setPrev(-1);
    } else {
      arrayWithMemo[current].status = 'wrong';
      arrayWithMemo[prev].status = 'wrong';
      setArrayWithMemo([...arrayWithMemo]);
      setTimeout(() => {
        arrayWithMemo[current].status = '';
        arrayWithMemo[prev].status = '';
        setArrayWithMemo([...arrayWithMemo]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    handleScore();
    if (prev === -1) {
      arrayWithMemo[id].status = 'active';
      console.log('Setting active:', arrayWithMemo[id]);
      setArrayWithMemo([...arrayWithMemo]);
      setPrev(id);
    } else {
      check(id);
    }
  };
  return (
    <div className={`memo-stage memo-stage-${elements}-elements`}>
      {arrayWithMemo.map((item) => {
        return (
          <div
            className={`memo-stage-cell ${
              item.status === 'active'
                ? ' memo-stage-cell--green ' + item.status
                : item.status === 'wrong'
                ? 'memo-stage-cell--red'
                : ''
            }`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <h1>{item.value}</h1>
          </div>
        );
      })}
    </div>
  );
};
