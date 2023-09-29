const cronParser = require('cron-parser');

function parseCron(cronString, command) {
  try {
    const interval = cronParser.parseExpression(cronString);
    const fields = interval.fields;

    console.log(`minute        ${fields.minute.join(' ')}`);
    console.log(`hour          ${fields.hour.join(' ')}`);
    console.log(`day of month  ${fields.dayOfMonth.join(' ')}`);
    console.log(`month         ${fields.month.join(' ')}`);
    console.log(`day of week   ${fields.dayOfWeek.join(' ')}`);
    console.log(`command       ${command}`);
  } catch (err) {
    console.error(`Error parsing cron string: ${err.message}`);
  }
}

const input = process.argv[2].split(' ');
const command = input.slice(5).join(' ');
const cronString = input.slice(0, 5).join(' ');

parseCron(cronString, command);