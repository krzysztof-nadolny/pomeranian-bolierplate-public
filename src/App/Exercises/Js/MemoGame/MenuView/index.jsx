import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({
  setTime,
  setElements,
  elements,
  setGameStarted,
}) => {
  const handleStartClick = () => {
    elements === 8 ? setTime(60) : setTime(120);
    setGameStarted(true);
  };
  const handleElementsClick = (value) => {
    // console.log('Elements:' + elements);
    setElements(value);
    // console.log('zmiana elements ' + value);
  };
  return (
    <div className="memo-menu">
      <Menu label="LICZBA ELEMENTÓW">
        <SelectButtons
          setValue={handleElementsClick}
          options={[
            { value: 8, label: '8 elementów', isActive: true },
            { value: 18, label: '18 elementów', isActive: false },
            // { value: 20, label: '20 elementów', isActive: false },
          ]}
        ></SelectButtons>
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={handleStartClick}>START</Button>
      </Menu>
    </div>
  );
};
