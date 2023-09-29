const { execSync } = require('child_process');

test('valid cron string', () => {
  const output = execSync('node main.js "*/15 0 1,15 * 1-5 /usr/bin/find"').toString();
  const expectedOutput = `minute        0 15 30 45
hour          0
day of month  1 15
month         1 2 3 4 5 6 7 8 9 10 11 12
day of week   1 2 3 4 5
command       /usr/bin/find
`;
  expect(output).toBe(expectedOutput);
});

test('invalid cron string', () => {
  try {
    execSync('node main.js "invalid cron string"');
  } catch (error) {
    expect(error).toBeDefined();
  }
});
