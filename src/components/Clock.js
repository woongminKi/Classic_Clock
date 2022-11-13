import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const useClock = () => {
  const currentTime = useSelector((state) => state.clock.now);
  return {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds(),
  }
}

export default function Circle() {
  const {hours, minutes, seconds} = useClock();

  const hoursMoveLogic = (hours) => {
    return ((hours / 12) * 360) + 90;
  };
  const minutesMoveLogic = (minutes) => {
    return ((minutes / 60) * 360) + 90;
  };
  const secondsMoveLogic = (seconds) => {
    return ((seconds / 60) * 360) + 90;
  };

  const hourStyle = {
    transform: `rotate(${hoursMoveLogic(hours)}deg)`
  };
  const minuteStyle = {
    transform: `rotate(${minutesMoveLogic(minutes)}deg)`
  };
  const secondStyle = {
    transform: `rotate(${secondsMoveLogic(seconds)}deg)`
  };

  return (
    <DivClock>
      <DivClockFace>
        <div className='hand' style={hourStyle} />
        <div className='hand' style={minuteStyle} />
        <div className='hand' style={secondStyle} />
      </DivClockFace>
    </DivClock>
  )
}

const DivClock = styled.div`
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
`;

const DivClockFace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);

  .hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    -webkit-transition: all 0.05s;
    -moz-transition: all 0.05s;
    -ms-transition: all 0.05s;
    -o-transition: all 0.05s;
    transition: all 0.05s;
    transition-timing-function: ease-in-out;

  }


  .hour-hand {
    background: red;
  }
`;
