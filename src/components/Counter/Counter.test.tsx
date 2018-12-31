import React from 'react';
import TestRenderer from 'react-test-renderer';
import Counter from '../Counter';

it('showing 0 initially', () => {
  const testRenderer = TestRenderer.create(<Counter />);
  const testInstance = testRenderer.root;
  const divInstance = testInstance.findByProps({ id: 'rootCounter' });
  expect(divInstance.props.children).toBe('0');
});

it('clicking - decrements', () => {
  const testRenderer = TestRenderer.create(<Counter />);
  const testInstance = testRenderer.root;
  const buttonInstance = testInstance.findByProps({ children: '-' });
  buttonInstance.props.onClick();
  const divInstance = testInstance.findByProps({ id: 'rootCounter' });
  expect(divInstance.props.children).toBe('-1');
});

it('clicking + increments', () => {
  const testRenderer = TestRenderer.create(<Counter />);
  const testInstance = testRenderer.root;
  const buttonInstance = testInstance.findByProps({ children: '+' });
  buttonInstance.props.onClick();
  const divInstance = testInstance.findByProps({ id: 'rootCounter' });
  expect(divInstance.props.children).toBe('1');
});
