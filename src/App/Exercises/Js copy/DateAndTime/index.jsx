import { useEffect, useState } from 'react';
import './styles.css';
import {DaysToNewYear} from './DaysToNewYear.jsx';

export const DateAndTime = () => {
  const [hours, setHours] = useState('--');
  const [minutes, setMinutes] = useState('--');
  const [seconds, setSeconds] = useState('--');



  function formatTime(time) {
    const formatedTime = time < 10 ? '0' + time : time;
    return formatedTime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentSeconds = currentDate.getSeconds();
      setHours(currentHour);
      setMinutes(currentMinutes);
      setSeconds(formatTime(currentSeconds));
    }, 1000);

    return () => clearInterval();
  }, []);

  // const currentDate = new Date();
  // const hours = currentDate.getHours();
  // const minutes = currentDate.getMinutes();
  // const seconds = currentDate.getSeconds();
  return (
    <div>
      <h1>Current time: {`${hours}:${minutes}:${seconds}`}</h1>
      <div>
        <h2>New Year countdown</h2>
        <DaysToNewYear/>
      </div>
    </div>

  );
};
