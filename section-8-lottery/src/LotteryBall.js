import React from 'react';

import './LotteryBall.css';

const LotteryBall = (props) => (
  <div className="LotteryBall">
    <div>{props.num}</div>
  </div>
)

export default LotteryBall;