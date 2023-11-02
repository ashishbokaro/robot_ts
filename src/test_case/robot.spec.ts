import chai from 'chai';
import { describe, it } from 'mocha';
import Robot from '../robot';

const expect = chai.expect;

describe('Robot', () => {
  it('should execute basic commands correctly', () => {
    const widthSpace = 100;
    const heightSpace = 100;

    const testCases = [
      { position: 'N 0 0', commands: 'M1RM4L3M2', expected: 'S 4 99' },
      { position: 'S 0 0', commands: 'M1RM4L3M3', expected: 'N 96 2' },
      { position: 'E 0 0', commands: 'M1RM4LR13M3', expected: 'S 1 93' },
      { position: 'W 10 12', commands: 'M1RM4LR13M3', expected: 'N 9 19' },
      { position: 'E 10 10', commands: 'M1R4M5', expected: 'E 16 10' },
      { position: 'N 10 10', commands: 'M1R4M1', expected: 'N 10 12' },
      { position: 'S 10 10', commands: 'M1R4M5L1', expected: 'E 10 4' },
      { position: 'N 0 10', commands: 'M1R1M5', expected: 'E 5 11' },
      { position: 'W 0 10', commands: 'M1R2M5L1M4', expected: 'N 4 14' },
      { position: 'E 0 10', commands: 'M1R4M8', expected: 'E 9 10' },
      { position: 'S 0 10', commands: 'M1R3M4R2M6L1', expected: 'S 98 9' },
    ];

    testCases.forEach((testCase) => {
      const robot = new Robot(widthSpace, heightSpace)
      const result = robot.executeCommands(testCase.position, testCase.commands);

      console.log('basic commands correctly', testCase.position, testCase.commands, result)
      expect(result).to.equal(testCase.expected);
    });
  });

  it('should handle boundary conditions correctly', () => {
    const widthSpace = 5;
    const heightSpace = 5;

    const testCases = [
      { position: 'N 0 0', commands: 'M6', expected: 'N 0 1' },
      { position: 'E 4 4', commands: 'M6', expected: 'E 0 4' },
      { position: 'S 4 4', commands: 'M6', expected: 'S 4 3' },
    ];

    testCases.forEach((testCase) => {
      const robot = new Robot(widthSpace, heightSpace)
      const result = robot.executeCommands(testCase.position, testCase.commands);
      console.log('boundary conditions correctly', result)

      expect(result).to.equal(testCase.expected);
    });
  });
});
