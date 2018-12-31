Feature: Sum Pairs
  It sums pairs of numbers
 
  Scenario Outline: adds x + y to equal sum
    Given x is <x>
    When add <y>
    Then the sum is <sum>

  Examples:
    | x | y | sum |
    | 1 | 2 | 3 |
    | 0 | 1 | 1 |
    | -1 | 1 | 0 |
    | 1 | 0 | 1 |