import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Clock from "./Clock";
import { getHours, getMinutes, getSeconds } from '../feature/clockSlice';

export default function ClockContainer() {
  const [now, setNow] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  dispatch(getHours(hours));
  dispatch(getMinutes(minutes));
  dispatch(getSeconds(seconds));

  return (
    <div>
      <Clock />
    </div>
  )
}
