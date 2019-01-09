const fs = require('fs');

fs.readFile('attributes-test3.txt', 'utf8', (err, data) => {
  main(data);
});

const currentOpenTagNames = [];

// return the value of the token in string starting with index
const getToken = (s, index) => {
  let token = s[index];
  for (let i = index + 1; s[i] && s[i] !== ' ' && s[i] !== '>'; i++) {
    token += s[i];
  }
  return token;
};

const getAttributes = (s) => {
  const tokens = s.split(' ');
  const attributes = [];
  // skip opening tag.  If length is longer than 1, there is an attribute
  for (let i = 1; i < tokens.length; i++) {
    // strip quotes (and closing > if it's the last attribute)
    attributes.push({ [tokens[i]]: tokens[i + 2].endsWith('>') ? tokens[i + 2].slice(1, -2) : tokens[i + 2].slice(1, -1) });
    i += 2;
  }
  return attributes;
};

const getSubtags = (program, index) => {
  const subtags = [];
  for (let i = index; !isClosingTag(program, i); i++) {
    const newSubtag = getTag(program, i);
    subtags.push(newSubtag);
    // skip past closing tag
    while (!isClosingTag(program, i)) {
      i += 1;
    }
    currentOpenTagNames.pop();
  }
  return subtags;
};

const getTag = (program, index) => {
  const currentTagName = getToken(program[index], 0).slice(1);
  currentOpenTagNames.push(currentTagName);
  return {
    name: currentTagName,
    attributes: getAttributes(program[index]),
    subtags: getSubtags(program, index + 1),
  };
};

const isClosingTag = (program, i) => {
  if (currentOpenTagNames[currentOpenTagNames.length - 1] === program[i].split(' ')[0].slice(2, -1)) {
    return true;
  }
  return false;
};

const getTags = (program) => {
  const tags = [];
  for (let i = 0; i < program.length; i++) {
    if (program[i][1] !== '/') {
      // we have an opening tag
      tags.push(getTag(program, i));
      // skip subtags - peek ahead 1 index and increment i until we see a closing tag THAT MATCHES CURRENT TAG!
      while (!isClosingTag(program, i + 1)) {
        i += 1;
      }
    } else {
      currentOpenTagNames.pop();
    }
  }
  return tags;
};

const doQueries = (queries, tags) => {
  // console.log(queries);
  queries.forEach((q) => {
    const parts = q.split('~');
    const allQueryTags = parts[0].split('.');
    const attribute = parts[1];
    const tagIndex = tags.findIndex(e => e.name === allQueryTags[0]);
    if (tagIndex !== -1) {
      let currentTag = tags[tagIndex];
      for (let i = 1; i < allQueryTags.length; i++) {
        const subtagIndex = currentTag.subtags.findIndex(e => e.name === allQueryTags[i]);
        if (subtagIndex !== -1) {
          currentTag = currentTag.subtags[subtagIndex];
        } else {
          console.log('Not Found!');
          return;
        }
      }
      const attributeIndex = currentTag.attributes.findIndex(e => e[attribute]);
      if (attributeIndex !== -1) {
        console.log(currentTag.attributes[attributeIndex][attribute]);
        return;
      }
    }
    console.log('Not Found!');
  });
};

const main = (data) => {
  const input = data.split('\n');
  const initInfo = input[0].split(' ').map(d => Number(d));
  const n = initInfo[0];
  const q = initInfo[1];
  const program = input.slice(1, 1 + n);
  const queries = input.slice(-q);
  const tags = getTags(program);
  doQueries(queries, tags);
};
