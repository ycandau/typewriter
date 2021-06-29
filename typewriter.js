const sentence = 'hello there from lighthouse labs';

const write = (sentence) => {
  (sentence + '\n').split('').forEach((ch, index) => {
    setTimeout(() => {
      process.stdout.write(ch);
    }, index * 50);
  });
};

write(sentence);
