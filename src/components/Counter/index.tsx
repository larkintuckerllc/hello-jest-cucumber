import React, { PureComponent } from 'react';
import CounterView from './CounterView';

interface State {
  counter: number;
}

export default class Counter extends PureComponent<{}, State> {
  public state = {
    counter: 0,
  };

  public render() {
    const { counter } = this.state;
    return (
      <CounterView
        counter={counter}
        onDecrementClick={this.handleDecrementClick}
        onIncrementClick={this.handleIncrementClick}
      />
    );
  }

  private handleDecrementClick = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  private handleIncrementClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };
}
