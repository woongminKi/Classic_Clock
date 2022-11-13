import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Clock from "./Clock";
import { setNow } from '../feature/clockSlice';

export default function ClockContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setNow(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
      <Clock />
  )
}
