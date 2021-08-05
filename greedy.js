/* Activity Selection Problem usign dynamic programing*/

let printMaxActivities = (start, end, n) => {
  let i, j;
  //select first elemnet
  i = 0;
  document.write(i + " ");

  for (let j = 1; j < n; j++) {
    //   starting time is gretter then finish time
    if (start[j] >= end[i]) {
      document.write(j + " ");
      i = j;
    }
  }
};

/*---------------------------------------driver code for function ----------------------------*/

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];
let n = start.length;
printMaxActivities(start , end , n);