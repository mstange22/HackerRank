const fs = require('fs');

fs.readFile('attributes-test2.txt', 'utf8', (err, data) => {
  main(data);
});

const currentOpenTagNames = [];
const tags = {};

const getTagPath = () => {
  let path = '';
  currentOpenTagNames.forEach((tag) => {
    path += `${tag}.`;
  });
  // replace last . with ~;
  return `${path.slice(0, -1)}~`;
};

const getAttributes = (line) => {
  const tokens = line.split(' ');
  const tagPath = getTagPath();

  // if tokens length is longer than 1, there is at least one attribute
  for (let i = 1; i < tokens.length; i++) {
    const tagString = tagPath + tokens[i];
    // strip quotes (and closing > if it's the last attribute)
    tags[tagString] = tokens[i + 2].endsWith('>') ? tokens[i + 2].slice(1, -2) : tokens[i + 2].slice(1, -1);
    // skip past = and value
    i += 2;
  }
};

const getToken = (s, index) => {
  let token = s[index];
  for (let i = index + 1; s[i] && s[i] !== ' ' && s[i] !== '>'; i++) {
    token += s[i];
  }
  return token;
};

const getTags = (program) => {
  program.forEach((line) => {
    if (line[1] !== '/') {
      currentOpenTagNames.push(getToken(line, 1));
      getAttributes(line);
    } else {
      currentOpenTagNames.pop();
    }
  });
};

const doQueries = (queries) => {
  queries.forEach(q => console.log(tags[q] || 'Not Found!'));
};

const main = (data) => {
  const input = data.split('\n');
  const initInfo = input[0].split(' ').map(d => Number(d));
  const n = initInfo[0];
  const q = initInfo[1];
  const program = input.slice(1, 1 + n);
  const queries = input.slice(-q);
  getTags(program);
  console.log(JSON.stringify(tags, null, 2));
  doQueries(queries);
};
