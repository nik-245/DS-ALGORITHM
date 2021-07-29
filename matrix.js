/*-----------------------------------------------insertion sort--------------------------------------------------*/
function sort(arr, n) {
  var i, j, temp;
  for (i = 1; i < n; i++) {
    temp = arr[i];

    j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}
/*-------------------------------------------------swap xp to the yp-------------------------------------------*/
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

/*-------------------------------------------------print array---------------------------------------------------*/
function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) document.write(arr[i] + " ");
  document.write("\n");
}

/*------------------------------------------------ print matrix by fxn-----------------------------------------------*/
function printMatrix(arr, size) {
  let i;
  document.write("<br>");
  for (i = 0; i < size; i++) document.write(arr[i] + " <br>");
  // document.write("\n");
}

/*---------------------------------------------travarse in matrix (spiral)--------------------------------------------*/
function spiralMatrix(arr) {
  let top, botom, left, right;
  top = 0;
  botom = arr.length - 1;
  left = 0;
  right = arr[0].length - 1;
  let answerArray = new Array();
  var direction = 0;
  let i;

  /*  direction 1 = lrft to right
        direction 2 = top to botom
        direction 3 = right to left 
        direction 4 = botom to top
    */

  while (top <= botom && left <= right) {
    if (direction == 0) {
      for (i = left; i <= right; i++) {
        answerArray.push(arr[top][i]);
        console.log(arr[top][i]);
      }
      top++;
    } else if (direction == 1) {
      for (i = top; i <= botom; i++) {
        answerArray.push(arr[i][right]);
        console.log(arr[i][right]);
      }
      right--;
    } else if (direction == 2) {
      for (i = right; i >= left; i--) {
        answerArray.push(arr[botom][i]);
      }
      botom--;
    } else if (direction == 3) {
      for (i = botom; i >= top; i--) {
        answerArray.push(arr[i][left]);
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }

  printArray(answerArray, answerArray.length);
}

/*----------------------------------------------------search element in matrix------------------------------------------*/

function has(arr, x) {
  let n = arr.length;
  let i = 0;
  let j = n - 1;

  while (i < n && j > 0) {
    if (arr[i][j] == x) {
      document.write(`find element at ${i + 1}'s row and ${j + 1}'s colom`);
      return;
    }
    if (arr[i][j] > x) {
      j--;
    } else {
      i++;
    }
  }
  return 0;
}

/*---------------------------------------------------find row with max 1s------------------------------------------------------*/

function rowWithMax1(arr) {
  let r = arr.length;
  let c = arr[0].length;

  let max_row_idx = 0;
  let j = c - 1;

  for (let i = 0; i < r; i++) {
    while (j >= 0 && arr[i][j] == 1) {
      j--;
      max_row_idx = i;
    }
  }
  if (max_row_idx == 0 && arr[0][c - 1] == 0) return -1;

  return max_row_idx;
}

/*------------------------------------------------sort matrix----------------------------------------------------------------*/
function sortMatrix(arr, n) {
  let temp = new Array(n * n);
  let k = 0;
  // copy element in temp array
  for (let i in arr) {
    for (let j in arr) {
      temp[k++] = arr[i][j];
      z;
    }
  }

  sort(temp, temp.length);

  k = 0;
  // copy element one by one in arr matrix
  for (let i in arr) {
    for (let j in arr) {
      arr[i][j] = temp[k++];
    }
  }
  printMatrix(arr, n);
}
/*----------------------------------------------rotate Array by 90--------------------------------------------------*/
function rotateMatrixBy90(arr, n) {
  for (let i = 0; i < n; i++) {
    document.write("<br>");
    for (let j = n - 1; j >= 0; j--) {
      document.write(arr[j][i] + " ");
    }
  }
}
/*--------------------------------------element are in all raws are return ---------------------------------------------*/

function printCommonElements(arr) {
  let raw = arr.length;
  let colom = arr[0].length;

  let map = new Map();
  // put all element of first raw
  for (let i = 0; i < colom; i++) {
    map.set(arr[0][i], 1);
  }

  for (let i = 1; i < raw; i++) {
    for (let j = 0; j < colom; j++) {
      if (map.get(arr[i][j]) != null && map.get(arr[i][j]) == i) {
        map.set(arr[i][j], i + 1);

        if (i == raw - 1) document.write(arr[i][j] + " ");
      }
    }
  }
}
/*----------------------------------------------------driver code for matrix---------------------------------------------------*/

let arr1 = [
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1],
];
var arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let arr3 = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 19, 6],
];

let arr5 = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
];
let n5 = arr5.length;
// printCommonElements(arr5);
// rotateMatrixBy90(arr, n);
// sortMatrix(arr , n);
// document.write(rowWithMax1(arr));
// printMatrix(arr, 5);
// document.write("<br>");
// has(arr , 11);
