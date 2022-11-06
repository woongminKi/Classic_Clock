import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Circle() {
  const storeHours = useSelector((state) => state.clock.hours);
  const storeMinutes = useSelector((state) => state.clock.minutes);
  const storeSeconds = useSelector((state) => state.clock.seconds);
  console.log("스토어시간::", storeHours)
  console.log("스토어분::", storeMinutes)
  console.log("스토어초::", storeSeconds)

  const hoursMoveLogic = (hours) => {
    return ((hours / 24) * 360);
  };
  const minutesMoveLogic = (minutes) => {
    return ((minutes / 60) * 360) + 90;
  };
  const secondsMoveLogic = (seconds) => {
    return ((seconds / 60) * 360) + 90;
  };

  const hourStyle = {
    transform: `rotate(${hoursMoveLogic(storeHours)}deg)`
  };
  const minuteStyle = {
    transform: `rotate(${minutesMoveLogic(storeMinutes)}deg)`
  };
  const secondStyle = {
    transform: `rotate(${secondsMoveLogic(storeSeconds)}deg)`
  };

  return (
    <DivClock>
      <DivClockFace>
        <div className='hand hour-hand' style={hourStyle}></div>
        <div className='hand min-hand' style={minuteStyle}></div>
        <div className='hand second-hand' style={secondStyle}></div>
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
`;
