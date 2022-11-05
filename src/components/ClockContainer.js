import React from 'react';
import { useDispatch } from 'react-redux';
import Circle from "./Circle";
import { getHours, getMinutes, getSeconds } from '../feature/clockSlice';

export default function ClockContainer() {
  const dispatch = useDispatch();

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  dispatch(getHours(hours));
  dispatch(getMinutes(minutes));
  dispatch(getSeconds(seconds));

  return (
    <div>
      <Circle />
    </div>
  )
}
