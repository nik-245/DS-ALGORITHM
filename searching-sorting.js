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
/*-------------------------------------------------swap xp to the yp index-------------------------------------------*/
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
/*------------Javascript program to find first and last occurrence of an elements in given sorted array----------*/
function findFirstAndLast(arr, n, x) {
  let fisrt = -1;
  let last = -1;
  for (let i in arr) {
    if (x != arr[i]) continue;
    if (fisrt == -1) fisrt = i;
    last = i;
  }
  if (fisrt != -1) {
    document.write(`${x} is start from ${++fisrt} to ${++last}`);
  } else document.write(`given value ${x} is not found`);
}

/*-------------element  == there index then return that index--------------------------------------*/
function indexeqlVal(arr, n) {
  // theis method is by leiner search  with time complexity O(n)
  sort(arr, n);
  for (let i in arr) {
    if (arr[i] == i) return arr[i];
  }
  return -1;
}

function indxeqlval(arr, law, high) {
  sort(arr, n);
  let mid = Math.floor((low + high) / 2);

  if (mid == arr[mid]) {
    return mid;
  }
  if (mid > arr[mid]) {
    return indexeqlVal(arr, mid + 1, high);
  }
  if (mid < arr[mid]) {
    return indexeqlVal(arr, law, mid - 1);
  }
}

/*--------------------------------------------find element in rotated array----------------------------------------*/
function searchInRoate(arr, l, h, key) {
  if (l > h) return;

  let mid = Math.floor((l + h) / 2);
  // we use recursion then first we set hear base case
  if (arr[mid] === key) return mid;
  //chack if first half is sort or not
  if (arr[l] <= arr[mid]) {
    // find in frist interval
    if (arr[l] <= key && arr[mid] >= key)
      return searchInRoate(arr, l, mid - 1, key);
    //if not found in first interval then search in arr[m+1..h]
    return searchInRoate(arr, mid + 1, h, key);
  }

  // if first interval is not sorted then second interval must sorted
  if (arr[mid] <= key && arr[h] >= key)
    return searchInRoate(arr, mid + 1, h, key);
  //the chack in frist interval

  return searchInRoate(arr, l, mid - 1, key);
}
/*------------------------------------find the missing and repiting wlwmwnt in given array---------*/
function findMissingReapiting(arr) {
  let n = arr.length;
  //expected sum [0...n]
  let sum = (n * (n + 1)) / 2;
  //expexted sqaere-sum [0....n]
  let sqere = (n * (n + 1) * (2 * n + 1)) / 6;
  let miising = 0;
  let repiting = 0;

  for (let i in arr) {
    let x = arr[i];
    sum = sum - x; //expected sum - actual sum
    sqere = sqere - x * x; // expected sqear - actual sqear
  }
  /*
   x-y = diffrace sum 
   x^2 - y^2 = sqear differance 
   x is missing element and y is repiting elemnet
   */
  miising = (sum + sqere / sum) / 2;
  repiting = miising - sum;
  document.write(
    " " + "misssing elemenmt = " + miising + " repiting = " + repiting
  );
}

/*------------------------------------find majority element in array (more then n/2 times)--------------*/
function findMajority(arr, n) {
  let maxCount = 0;
  let index = -1; // sentinels

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) count++;
    }

    // Update maxCount if count of
    // current element is greater
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  // If maxCount is greater than n/2
  // return the corresponding element
  if (maxCount > n / 2) document.write(arr[index]);
  else document.write("No Majority Element");
}
/*------------------------------------find pair with differance n-----------------*/
function findPair(arr, k) {
  let i = 0;
  let j = 1;
  let n = arr.length;
  while (j < n && i < n) {
    if (i != j && arr[j] - arr[i] == k) {
      //pair are find
      document.write(" " + arr[i] + " " + arr[j]);
      return true;
    } else if (arr[j] - arr[i] < k) j++;
    else i++;
  }
  document.write("not found");
  return false;
}
/*--------------------------------------find pair of four element who's sum is target------------------------------------*/
const fourSum = (arr, target) => {
  let set = new Set();
  let n = arr.length;
  sort(arr, n);
  let sum = 0;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    for (let j = 0; j < n - 2; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        sum = arr[i] + arr[j] + arr[left] + arr[right];

        // check the sum is equal to the target or not
        if (sum > target) right--;
        else if (sum == target) {
          document.write(
            `four values are ${arr[i]} , ${arr[j]} ,${arr[left]} ,${arr[right]} <br>`
          );
          return;
          //  left++;
        } else left++;
      }
    }
  }
};

/*----------------------------------------------- find the tripale value that smallwr then given x -------------------------------------------------------*/

function countTriplate(arr , x){
 let n = arr.length;
 arr.sort(function(a,b){return b-a});

 let ans = 0;
 for(let i = 0 ; i<n-2; i++)
 {
   let j = i+1;
   let k = n-1;
   while(j < k){
    if(arr[i] + arr[j] + arr[k] >= x)
     k++;
    else{
      ans = ans + (k-j);
      j--;
    }
   }
 }

 return ans;
}
/*----------------------------------------product array puzzele---------------------------*/
function productArray(arr){
  let n = arr.length;
  // base case
  if (n == 1) {
    document.write("0");
    return;
  }
  let left = new Array(n);  
  left[0] = 1;
  let right =new Array(n);
  right[n-1] = 1;
  let product = new Array(n);
  //find the array of left side
   for(let i = 1 ; i<n ; i++)
     left[i] = left[i-1] * arr[i-1];

  //find the array of right side
   for(let i = n-2 ; i >= 0 ; i--)
     right[i] = right[i+1] * arr[i+1];
  
     //fill the main array whos return as a anser 
     for(let i = 0 ; i< n ; i++)
      product[i] = right[i] * left[i];
     
  return product;
}
/*----------------minimum number of swap required to sort the array-----------------------*/
function minSwapCount(arr){
      let ans = 0;
      let temp = [...arr];
      temp.sort((a,b)=> a-b);

      for(let i in temp){
       
        if(arr[i] != temp[i]){
          ans++;
          let j = arr.indexOf(temp[i])
          let Temp = arr[i];
          arr[i] = arr[j];
          arr[j] = Temp; 
        }
      }
      return ans;
}

let arr = [1,5,4,3,2];
document.write(minSwapCount(arr));
/*---------------------------------------dirver code for this algo-----------------------*/
// fourSum([-2, -1, 0, 0, 1, 2], 0);
// document.write(productArray([ 10, 3, 5, 6, 2 ]));
// document.write(countTriplate([5 ,1 , 3 , 4 ,7] , 12));
// findMajority([1,1,2,1,3,5,1] , 7);
// findMissingReapiting([4, 3, 6, 2, 1, 6, 7]);
// let arr4 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// let n4 = arr4.length;
// document.write(searchInRoate(arr4, 0, n4 - 1, 3));
// document.write("done");
// findFirstAndLast(arr,n,2);
