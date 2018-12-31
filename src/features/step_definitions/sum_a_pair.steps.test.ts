import { defineFeature, loadFeature } from 'jest-cucumber';
import sum from '../../utils/sum';

const feature = loadFeature('./src/features/sum_a_pair.feature');

defineFeature(feature, test => {
  test('adds 1 + 2 to equal 3', ({ given, when, then }) => {
    let x: number;
    let z: number;

    given('1', () => {
      x = 1;
    });

    when('add 2', () => {
      z = sum(x, 2);
    });

    then('the sum is 3', () => {
      expect(z).toBe(3);
    });
  });
});
