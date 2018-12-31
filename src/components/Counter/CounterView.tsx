import React from 'react';

interface Props {
  counter: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
}

const CounterView = ({ counter, onDecrementClick, onIncrementClick }: Props) => (
  <div>
    <div id="rootCounter">{counter.toString()}</div>
    <button onClick={onDecrementClick}>-</button>
    <button onClick={onIncrementClick}>+</button>
  </div>
);

export default CounterView;
