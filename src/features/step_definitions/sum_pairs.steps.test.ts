import { defineFeature, loadFeature } from 'jest-cucumber';
import sum from '../../utils/sum';

const feature = loadFeature('./src/features/sum_pairs.feature');

defineFeature(feature, test => {
  let x: number;
  let z: number;

  test('adds x + y to equal sum', ({ given, when, then }) => {
    given(/^x is (.*)$/, (givenXStr: string) => {
      const givenX = parseInt(givenXStr, 10);
      x = givenX;
    });
    when(/^add (.*)$/, (givenYStr: string) => {
      const givenY = parseInt(givenYStr, 10);
      z = sum(x, givenY);
    });
    then(/^the sum is (.*)$/, (givenSumStr: string) => {
      const givenSum = parseInt(givenSumStr, 10);
      expect(z).toBe(givenSum);
    });
  });
});
