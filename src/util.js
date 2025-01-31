// - named export
export const range = (start, end, step = 1) => {
  let output = [];

  //  implement a range function
  function rangeImplementation(start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    return { start, end };
  }
  const { start: theBeginning, end: theEnd } = rangeImplementation(start, end);
  for (let i = theBeginning; i < theEnd; i += step) {
    output.push(i);
  }
  return output;
};

/*range(10) //start-0 , end-10 [0,1,2,3,4,5,6,7,8,9]

range(2, 10) //start-2, end-10

range(0, 10, 2) // start- , end-10, step- 2 [0, 2, 4, 6, 8]
range(5) //[0, 1, 2, 3, 4]*/
