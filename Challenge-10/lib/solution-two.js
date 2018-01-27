'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

function getmid(arr, n) {
  let max = arr.length;
  let mid = Math.floor(max / 2);
  let newArr = arr;

  if (arr[mid] > n) {
    let newArr = arr.slice(0, mid);
    return getmid(newArr, n);
  } else if (arr[mid] < n) {
    let newArr = arr.slice(mid+1, arr.length);
    return getmid(newArr, n);
  } else {
    return arr[mid];
  }
}
