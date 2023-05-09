const timer = function(intervals) {
  intervals.sort((a, b) => a - b);
  for (const int of intervals) {
    if (int > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, int * 1000);
    }
  }
};

const imput = process.argv.slice(2);

timer(imput);