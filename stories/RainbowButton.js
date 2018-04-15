import Rainbow from '../lib';
import React from 'react';

const RainbowButton = props => (
  <Rainbow {...props}>
    {(color, onClick) => {
      return (
        <div style={{ textAlign: 'center', width: 250 }}>
          <div>{color}</div>
          <div
            style={{
              backgroundColor: color,
              width: 250,
              height: 250,
              textAlign: 'center'
            }}
          />
          <button onClick={onClick}>Click me!</button>
        </div>
      );
    }}
  </Rainbow>
);

export default RainbowButton;
