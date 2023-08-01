import { useEffect, useState } from 'react';
import './styles.css';

export const DaysToNewYear = () => {
  const [hours, setHours] = useState('--');
  const [minutes, setMinutes] = useState('--');
  const [seconds, setSeconds] = useState('--');
  const [daysToWeekend, setDaysToWeekend] = useState('--');
  const [hoursToWeekend, setHoursToWeekend] = useState('--');
  const [minutesToWeekend, setMinutesToWeekend] = useState('--');
  const [secondsToWeekend, setSecondsToWeekend] = useState('--');

  function formatTime(time) {
    const formatedTime = time < 10 ? '0' + time : time;
    return formatedTime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimeStamp = new Date().getTime();
      const newYear = new Date('2023-08-02').getTime();
      const timeToNewYear = newYear - currentTimeStamp;
      
      const daysLeft = timeToNewYear/(1000*60*60*24)
      const hoursLeft = formatTime(timeToNewYear/(1000*60*60)%24)
      const minutesLeft = formatTime(timeToNewYear/(1000*60)%24)
      const secondsLeft = formatTime(timeToNewYear/(1000)%24)
      setDaysToWeekend(Math.floor(daysLeft))
      setHoursToWeekend(Math.floor(hoursLeft))
      setMinutesToWeekend(Math.floor(minutesLeft))
      setSecondsToWeekend(Math.floor(secondsLeft))
    //   console.log(daysLeft)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        `{daysToWeekend} days {hoursToWeekend} hours {minutesToWeekend}minutes {secondsToWeekend}seconds`
    </div>
  );
};
