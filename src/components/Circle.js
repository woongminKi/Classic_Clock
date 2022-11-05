import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getHours, getMinutes, getSeconds } from '../feature/clockSlice';

export default function Circle() {
  const storeHours = useSelector((state) => state.clock.hours);
  const storeMinutes = useSelector((state) => state.clock.minutes);
  const storeSeconds = useSelector((state) => state.clock.seconds);
  console.log("스토어시간::", storeHours)
  console.log("스토어분::", storeMinutes)
  console.log("스토어초::", storeSeconds)

  return (
    <DivCircle>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </DivCircle>
  )
}

const DivCircle = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgreen;
  border-radius: 50%;
`;

const Div12 = styled.div`
  margin-left: 250px;
  padding-top: 10px;
`;

const Div1 = styled.div`
  margin-left: 350px;
  padding-top: 30px;
`;

const Div2 = styled.div`
  margin-left: 415px;
  padding-top: 80px;
`;

const Div3 = styled.div`
  margin-left: 470px;
  padding-top: 100px;
`;
