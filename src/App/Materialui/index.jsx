import './styles.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const Material = () => {
  const [color, setColor] = useState('');
  return (
    <div className={`material ${color}`}>
      <h1>Material</h1>
      <Button
        onClick={() => {
          setColor('background-change');
        }}
        variant="contained"
      >
        Text
      </Button>
      <Checkbox />
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </div>
  );
};
