const unsorted1 = [3, 2, 1, 13, 8, 5, 0, 1];
const unsorted2 = [105, 79, 100, 110];

const merge = (arr1, arr2, mergedArr = []) => {
  if (arr1.concat(arr2).length <= 1) {
    mergedArr.push(arr1.concat(arr2)[0]);
    return mergedArr;
  }

  if (arr1.length === 0) {
    arr2.forEach((n) => mergedArr.push(n));
    return mergedArr;
  }

  if (arr2.length === 0) {
    arr1.forEach((n) => mergedArr.push(n));
    return mergedArr;
  }

  if (arr1[0] < arr2[0]) mergedArr.push(arr1.shift());
  else mergedArr.push(arr2.shift());

  return merge(arr1, arr2, mergedArr);
};

const mergeSort = (arr) => {
  if (arr.length === 1) return [arr[0]];

  const half = Math.ceil(arr.length / 2);
  return [].concat(
    merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)))
  );
};

console.log(mergeSort(unsorted1));
console.log(mergeSort(unsorted2));
