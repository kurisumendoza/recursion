// Fibonacci using iteration
const fibs = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) arr.push(i);
    else arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

console.log('Iteration:', fibs(8));

// Fibonacci using recursion
const fibsRec = (num, arr = []) => {
  if (arr.length >= num) return arr;

  let copy = arr.slice();

  if (copy.length < 2) {
    copy.push(copy.length);
    return fibsRec(num, copy);
  } else {
    copy.push(copy[copy.length - 1] + copy[copy.length - 2]);
    return fibsRec(num, copy);
  }
};

console.log('Recursion:', fibsRec(8));
