# Cron Parser Assignment

## Description

This project is a cron string parser. It takes a cron string and provides a human-readable explanation of the schedule. The goal is to parse the string and display the execution schedule in an easily understandable format.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- npm

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install dependencies, including `cron-parser`:

```bash
npm install

Usage
To use the cron parser, run the following command, replacing "your-cron-string" with your actual cron string. The program will output a human-readable explanation of the schedule.

bash
Copy
node cronParser.js "your-cron-string"
Example
Let's say you want to parse the cron string "*/15 0 1,15 * 1-5 /usr/bin/find". You would run the command like this:

bash
Copy
node cronParser.js "*/15 0 1,15 * 1-5 /usr/bin/find"
And the program might output something like this:

bash
Copy
Minute: every 15 minutes
Hour: 0
Day of month: 1, 15
Month: every month
Day of week: Monday through Friday
Command: /usr/bin/find
This output provides a human-readable explanation of when the cron job will run and what command it will execute.

Code Structure
The code is divided into modules, each with a specific responsibility. The cronParser.js file is the main entry point, and it uses functions from the helper.js file to parse the cron string and display the schedule.

Algorithm/Approach
The approach taken for this assignment involves parsing the cron string element by element and using helper functions to interpret each field. This makes it easy to handle different formats and special characters in cron strings.

Testing
To run the tests, use the following command:

bash
Copy
npm test
The tests are written using the Jest testing framework and are located in the tests directory.

Performance Considerations
This solution is designed to be efficient with a time complexity of O(n), where n is the length of the cron string. However, performance may vary based on the specific cron string and the Node.js runtime environment.

Error Handling
The program handles errors by checking the format of the cron string and throwing an error if it's invalid. Known limitations include not supporting certain special characters or non-standard cron formats.

