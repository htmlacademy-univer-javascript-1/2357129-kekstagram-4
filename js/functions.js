const checkString = (checkLine, maxLength) => checkLine.length <= maxLength;

checkString('ss', 1);


const isPolindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();

  return line === [...line].reverse().join('');
};

isPolindrom('топот');


const findNumber = (line) => parseInt(line.replace(/\D+/g, ''), 10);

findNumber('2023 год');


