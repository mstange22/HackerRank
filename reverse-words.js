const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
// define the reverseWords function such that the result of the following code produces the indicated results
// reverseWords(message);
// console.log(message.join(''));
// Prints: 'steal pound cake'

// const reverseWords = (message) => {
//   const h = {};
//   let wordCount = 0;
//   let s = '';
//   for (let i = 0; i < message.length; i++) {
//     if (message[i] === ' ') {
//       h[wordCount] = s;
//       s = '';
//       wordCount += 1;
//     } else {
//       s += message[i];
//     }
//   }
//   h[wordCount] = s;
//   const { length } = message;
//   for (let i = 0; i < length; i++) {
//     message.pop();
//   }
//   for (let i = wordCount; i >= 0; i--) {
//     for (let j = 0; j < h[i].length; j++) {
//       message.push(h[i][j]);
//     }
//     message.push(' ');
//   }
//   message.pop();
// };

const reverseWords = (message) => {
  const str = message.join('').split(' ').reverse().join(' ');
  for (let i = 0; i < str.length; i++) {
    message[i] = str[i];
  }
};

reverseWords();
// Prints: 'steal pound cake'
console.log(message.join(''));
