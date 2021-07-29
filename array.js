//swap xp to the yp
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

// print array by fxn
function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) document.write(arr[i] + " ");
  document.write("\n");
}

// bubble sort
function bubble_sort(arr, n) {
  var i, j;
  for (i = 0; i <= n - 1; i++) {
    for (j = 0; j <= n - i - j; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j++);
      }
    }
  }
}

//  selection sort
function sort(arr, n) {
  var i, j, min_index;

  for (i = 0; i < n - 1; i++) {
    min_index = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_index]) min_index = j;
    swap(arr, min_index, i);
  }
}

/* 3. insertion sort */
function inserstion_sort(arr, n) {
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

//  4, reverse array function

function reversearray(arr, n) {
  var start = 0;
  var end = n - 1;

  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

function max_min_from_arr(arr, n) {
  var max = 0,
    min = 0;
  if (n == 1) {
    max = min = arr[0];
  }

  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  for (let i = 2; i < n; i++) {
    if (arr[i] > max) max = arr[i];
    else if (arr[i] < min) min = arr[i];
  }
  document.write("\n" + max);
  document.write("\n " + min);
}

// second method
function max_min_from_arr_(arr, n) {
  sort(arr, n);
  document.write(" max is " + arr[n - 1]);
  document.write(" min is " + arr[0]);
}

// binary search
function binery_serch(arr, lower, rare, element) {
  var mid = lower + Math.floor((rare - lower) / 2);

  if (element == arr[mid]) {
    return mid;
  }
  if (element < arr[mid]) {
    return binery_serch(arr, lower, mid - 1, element);
  } else {
    return binery_serch(arr, mid + 1, rare, element);
  }
  return -1;
}

/*dutch flag problem */
//sorting array with 0s , 1s, 2s without sortnig algorithm
function sort012(arr, n) {
  var low = 0;
  var midieam = 0;
  var high = n - 1;
  while (midieam <= high) {
    switch (arr[midieam]) {
      case 0:
        swap(arr, low, midieam);
        low++;
        midieam++;
        break;
      case 1:
        midieam++;
        break;
      case 2:
        swap(arr, midieam, high);
        high--;
        break;
      default:
        break;
    }
  }
}

// unioun of two array means remove duplicate element and merge
function uniun(arr1, arr2, n1, n2) {
  var i, j;
  i = j = 0;
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      document.write(" " + arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      document.write(" " + arr2[j]);
      j++;
    } else {
      document.write(" " + arr2[j]);
      j++;
      i++;
    }
  }

  while (i < n1) {
    document.write(" " + arr1[i]);
    i++;
  }
  while (j < n2) {
    document.write(" " + arr2[j]);
    j++;
  }
}

// intersect of two array means common element
function intersec(arr1, arr2, n1, n2) {
  var i, j;
  i = j = 0;
  sort(arr1, n1);
  sort(arr2, n2);
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      document.write(" " + arr1[i]);
      j++;
      i++;
    }
  }
}

// merge array (for merge sort)

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  var i = 0;
  var j = 0;
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// merge sort this using recuersive merge function
function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

//rotate array in left side by one postion
function rotate_array_by_one(arr, n) {
  var temp = arr[n - 1];
  for (var i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
}

//combination of r element from the n element nCr
function combination(n, r) {
  /* this is a recersive method
    if(r == 0 || r == n ) return 1;
     return(combination(n-1 , r-1) + combination(n-1,r));
    */

  let c = new Array(n + 1);
  c.fill(0);

  c[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = min(i, r); j > 0; j--) {
      c[j] = c[j] + c[j - 1];
    }
  }

  return c[r];
}

//Nth cataln number Cn = 1/n+1 * 2nCn

function catalan(n) {
  let c = combination(2 * n, n);
  return Math.floor(c / (n + 1));
}

// find the fibonaci number using dynamic programing
function fibponaci_dp(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  var arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;
  for (var i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// find max from two number
function max(x, y) {
  return Math.max(x, y);
}
// find min from two number
function min(x, y) {
  return Math.min(x, y);
}

// 0/1 knapsnap problem using dynamic programing
function knapsnak(p, wt, m, n) {
  var table = new Array(n + 1);
  var i, w;

  for (i = 0; i <= n; i++) {
    table[i] = new Array(m + 1);
    for (w = 0; w <= m; w++) {
      if (i == 0 || w == 0) {
        table[i][w] = 0;
      } else if (wt[i] <= w) {
        // this formula use for fill the table
        table[i][w] = max(p[i] + table[i - 1][w - wt[i]], table[i - 1][w]);
      } else {
        table[i][w] = table[i - 1][w];
      }
    }
  }

  var x = n;
  var y = m;
  document.write("<br>");
  // this code is use to chake which element we tack in form of o-1
  while (x >= 0 && y >= 0) {
    if (table[x][y] == table[x - 1][y]) {
      document.write(x + "=0 <br>");
      x--;
    } else {
      document.write(x + "=1 <br>");
      x--;
      y = y - wt[x];
    }
  }
}

// Kadane's Algorithm
// not work on 100% -ve array element

function maxSumSubArray(arr, n) {
  let MaxSum = 0;
  let CurrentSum = 0;

  for (let i in arr) {
    CurrentSum = CurrentSum + arr[i];
    if (CurrentSum > MaxSum) {
      MaxSum = CurrentSum;
    }
    if (CurrentSum < 0) {
      CurrentSum = 0;
    }
  }
  return MaxSum;
}
// document.write(maxSumSubArray([5,5,10,100,10,5],6));

//  coin change problem using dynamic programing

function minCoins(coins, m, V) {
  if (V == 0) {
    return 0;
  }
  let res = Number.MAX_VALUE;
  //  console.log(res);

  for (let i = 0; i < m; i++) {
    if (coins[i] <= V) {
      let sub_res = minCoins(coins, m, V - coins[i]);

      if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) res = sub_res + 1;
    }
  }
  return res;
}

// coin change pronblem using greddy method

function coinChange(arr, V) {
  let arrLength = arr.length;
  sort(arr, arrLength);

  for (let i = arrLength - 1; i >= 0; i--) {
    while (V >= arr[i]) {
      V = V - arr[i];
      document.write(arr[i] + " ");
    }
  }
}

//stock change problem (only one time buy and sell)

function maxProfilt(arr, n) {
  let maxProfit = 0;
  let min_price = arr[0];
  let Profilt = 0;

  for (let i = 0; i < n; i++) {
    min_price = Math.min(min_price, arr[i]);
    Profilt = arr[i] - min_price;
    maxProfit = Math.max(maxProfit, Profilt);
    // console.log(maxProfit);
  }
  return maxProfit;
}

//stock change proble
// (we can buy and sell more then one but in order to buy to sell mannar)

function maxProfilt_(arr, n) {
  let profit = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      profit = profit + (arr[i] - arr[i - 1]);
    }
  }
  return profit;
}

// minimum jump to rich last postion to last eleement

function minJump_arr(arr, n) {
  var max_rech = arr[0];
  var step = arr[0];
  var jump = 1;

  if (n == 1) return 0;
  else if (arr[0] == 0) return -1;
  else {
    for (var i = 1; i < n; i++) {
      if (i == n - 1) return jump;

      max_rech = max(max_rech, i + arr[i]);
      step--;
      if (step == 0) {
        jump++;
        if (i >= max_rech) return -1;
      }
      step = max_rech - i;
    }
  }
}

//find duplicate in array by itrative method

function duplicate_arr(array, n) {
  for (let i in array) {
    array[array[i] % n] = array[array[i] % n] + n;
  }

  for (let j in array) {
    if (array[j] / n >= 1) {
      document.write("<br>" + j);
    }
  }
}

//  genrate random number by using the javascript Math object

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//----------------------------------  matrix chain multiplication----------------------------------------------
let dp = new Array(100);
for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(2);
}

function matrixChainMemoised(p, i, j) {
  if (i == j) {
    return 0;
  }
  if (dp[i][j] != -1) {
    return dp[i][j];
  }

  dp[i][j] = Number.MAX_VALUE;
  for (let k = i; k < j; k++) {
    dp[i][j] = min(
      dp[i][j],
      matrixChainMemoised(p, i, k) +
      matrixChainMemoised(p, k + 1, j) +
      p[i - 1] * p[k] * p[j]
    );
  }
  return dp[i][j];
}

function MatrixChainOrder(p, n) {
  let i = 1,
    j = n - 1;
  return matrixChainMemoised(p, i, j);
}

//--------------------------------------------------driver code-------------------------------------------------------
let MatrixOrder = [1, 2, 3, 4];
let x = MatrixOrder.length;

for (var i = 0; i < dp.length; i++) {
  for (var j = 0; j < dp.length; j++) {
    dp[i][j] = -1;
  }
}

// document.write("Minimum number of multiplications is " + MatrixChainOrder(MatrixOrder, x));
// document.write(" done <br>")

// longet common subsequance

function LCS(str1, str2) {
  let s1 = str1.length;
  let s2 = str2.length;

  var dp = [];
  for (var i in str1) {
    dp[i] = [];
    for (var j in str2) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
        continue;
      }
      if (str1[i] == str2[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[i][j];
}
// document.write("LCS = "+LCS("stone","longest"));
// document.write("<br>");

// edit distanse by dynamic programig
function editDistanse(str1, str2, m, n) {
  // maker dp
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  //fill the dp by botom up mannar
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // If second string is empty, only option is to remove all characters of second string
      if (j == 0) {
        dp[i][j] = i;
      } else if (i == 0) {
        dp[i][j] = j;
      }
      // If last characters are same, ignore last char and recur for remaining string
      else if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], //remove
            dp[i][j - 1], // Insert
            dp[i - 1][j - 1] //replase
          );
      }
    }
  }
  return dp[m][n];
}
// document.write(editDistanse("sunday","saturday" , 6 , 8));

// merge intervals
function mergeIntervels(arr, n) {
  if (n <= 1) return arr;
  // sort by first value
  // hear noramal sort function are not working

  arr = arr.sort(function (startValue, endValue) {
    if (startValue[0] > endValue[0]) {
      return 1;
    }
    if (startValue[0] < endValue[0]) {
      return -1;
    }
    return 0;
  });

  // creat stack
  var stack = [];
  var top = null;

  //push first value of interval
  stack.push(arr[0]);

  for (let i = 1; i < n; i++) {
    top = stack[stack.length - 1];

    if (top[1] < arr[i][0]) {
      stack.push(arr[i]);
    } else if (top[1] < arr[i][1]) {
      top[1] = arr[i][1];
      stack.pop();
      stack.push(top);
    }
  }
  return stack;
}

// permutation value means nPr
function PermutationCoeff(n, r) {
  let p = 1;
  for (let i = 0; i < r; i++) {
    p = p * (n - i);
  }
  return p;
}

// count inversion that retrun the number of counter need to sort the array
function countInversions(arr, n) {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
}

// find the pair with same sum
function getPairsCount(arr, n, sum) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == sum) count++;
    }
  }
  return count;
}

// document.write(getPairsCount([1, 5, 7, 1] , 4 , 3));
//  document.write("done ");

//common element in given three element (in short intersec of three set)
function findCommon(arr1, arr2, arr3, n1, n2, n3) {
  // first asume that all array are sorted
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      // sameNumber.push(arr1[i]);
      document.write(arr1[i] + " ");
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr3[k]) j++;
    else k++;

    //  printArray(sameNumber, sameNumber.length);
  }
}

// alternavte +ve and -ve
function rearrange(arr, n) {
  let i = -1,
    temp = 0;
  for (let j = 0; j < n; j++) {
    if (arr[j] < 0) {
      i++;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  printArray(arr, n);

  let positive = i + 1;
  let nagative = 0;

  while (positive < n && nagative < positive && arr[nagative] < 0) {
    temp = arr[nagative];
    arr[nagative] = arr[positive];
    arr[positive] = temp;
    positive++;
    nagative += 2;
  }
  document.write("<br>");
  printArray(arr, n);
}

// arrend positve and nagative saprately
function rearrange_(arr, n) {
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        swap(arr, i, j);
      }
      j++;
    }
  }
}

// let arr1 = [2,3,-4,-1,6,-9];
// let n1 = 6 ;
// rearrange_(arr1,n1);
// printArray(arr1,n1);
// document.write("done");

// sub array sum is 0 then return true
function subArray(arr, n) {
  let subSum = new Set();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum == 0 || subSum.has(sum)) {
      return true;
    }
    subSum.add(sum);
  }
  return false;
}

// document.write(subArray([1,-1],2))
// find midian of one array

function findMidian(arr, n) {
  sort(arr, n);
  if (n % 2 == 0) {
    let sum = arr[Math.floor(n / 2)] + arr[Math.floor(n / 2) - 1];
    return sum / 2;
  } else {
    return arr[Math.floor(n + 1) / 2];
  }
}

// get median of two sorted array

function getMedian(arr1, arr2, n) {
  let j = 0;
  let i = n - 1;

  while (arr1[i] > arr2[j] && j < n && i > -1) {
    let temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
    i--;
    j++;
  }
  sort(arr1, n);
  sort(arr2, n);

  return parseInt((arr1[n - 1] + arr2[0]) / 2, 10);
}

// return the product made by the subarray and this product is maximux
function maxSubarrayProduct(arr, n) {
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    let multiple = arr[i];
    for (let j = i + 1; j < n; j++) {
      result = max(result, multiple);
      multiple = multiple * arr[j];
    }
    result = max(result, multiple);
  }
  return result;
}

// chake arr2 are subarray of arr2 or not
function isSubArray(arr1, arr2) {
  // let m = arr1.length;
  // let n = arr2.length;
  let set = new Set(); //set no store duplicate value

  for (let i in arr1) {
    set.add(arr1[i]);
  }
  let sizeOfSet = set.size;

  for (let j in arr2) {
    set.add(arr2[j]);
  }

  if (set.size == sizeOfSet) {
    return true;
  }
  return false;
}

// annay element are more then n/k if yes than return that element
function morethanNdK(arr, n, k) {
  let x = parseInt(n / k);

  let y = new Map();

  for (let i = 0; i < n; i++) {
    if (!y.has(arr[i])) y.set(arr[i], 1);
    else {
      let count = y.get(arr[i]);
      y.set(arr[i], count + 1);
    }
    console.log(y);

    for (let [key, value] of y.entries()) {
      let temp = value;
      if (temp > x) {
        document.write("<br>key =" + key);
      }
    }
  }
}

// find three elemnt that make your sum

function find3Numbers(arr, sum, n) {
  for (let i = 0; i < n - 2; i++) {
    let set = new Set();
    let cur_sum = sum - arr[i];

    for (let j = i + 1; j < n; j++) {
      if (set.has(cur_sum - arr[j])) {
        document.write(
          "sum made from " + arr[i] + " " + arr[j] + " " + (cur_sum - arr[j])
        );
        return true;
      }
      set.add(arr[j]);
    }
  }
  return false;
}

// rain tapping problem

function rainTapping(arr, n) {
  let left = new Array(n);
  let right = new Array(n);

  left[0] = arr[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }
  right[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }
  let ans = 0;
  for (let i in arr) {
    ans = ans + (Math.min(left[i], right[i]) - arr[i]);
  }
  return ans;
}

// choklate distribution problenm
// m is number of student and  n is number of element (choklate) in array
function choklateDistribution(arr, m, n) {
  if (!m || !n) return 0;

  sort(arr, n);

  if (n < m) return -1;
  let min_dif = Number.MAX_VALUE;
  for (let i = 0; i + m - 1 < n; i++) {
    let diferance = arr[i + m - 1] - arr[i];
    if (diferance < min_dif) {
      min_dif = diferance;
    }
  }
  return min_dif;
}

// find the minimum sum sub array
function smallestSumSubArray(arr, n, x) {
  let min_length = n + 1;
  // console.log(min_length);

  for (let start = 0; start < n; start++) {
    let cuurent_sum = arr[start];

    if (cuurent_sum > x) return 1;

    for (let end = start + 1; end < n; end++) {
      cuurent_sum = cuurent_sum + arr[end];

      if (cuurent_sum > x && end - start + 1 < min_length)
        min_length = end - start + 1;
    }
  }
  return min_length;
}

// three way partition meanse [a , b] sort the array whare in left side of a is small and right side of
// b are bigest element and bettwen a and b are follow  a < element < b condtion.

function threeWayPartition(arr, n, lr, hr) {
  let start = 0,
    end = n - 1;

  let i = 0;
  while (i <= end) {
    if (arr[i] < lr) {
      let temp = arr[start];
      arr[start] = arr[i];
      arr[i] = temp;
      start++;
      i++;
    } else if (arr[i] > hr) {
      let temp = arr[end];
      arr[end] = arr[i];
      arr[i] = temp;
      end--;
    } else i++;
  }
}

/*---------------------------------------------find midian of two sorted array of diffferant size--*/
function midianOf(arr1, arr2, n, m) {
  let i = 0;
  let j = 0;

  let count;
  let m1 = -1;
  let m2 = -1;

  //if m+n is odd then follow this code
  if ((m + n) % 2 == 1) {
    for (count = 0; count <= (m + n) / 2; count++) {
      if (i != n && j != m) {
        if (arr1[i] > arr2[j]) {
          m1 = arr2[j];
          j++;
        } else {
          m1 = arr1[i];
          i++;
        }
      } else if (i < n) m1 = arr1[i++];
      else m1 = arr2[j++];
    }
    return m1;
  }//if the m + n is even then midian is avrage of
  // (m+n/2)th element and (m+n/2 - 1)th element 
  else {
    for (count = 0; (count = (m + n) / 2); count++) {
      m2 = m1;
      if (i != n && j != m) {
        if (arr1[i] > arr2[j]) {
          m1 = arr2[j];
          j++;
        } else {
          m1 = arr1[i];
          i++;
        }
      } else if (i < n) m1 = arr1[i++];
      else m1 = arr2[j++];
    }
    return (m1 + m2) / 2;
  }
}
/*------------------------max operation to make array palidrom-------------------------------------*/
function maxOperationPlidrom(array) {
  let i = 0;
  let j = array.length - 1;
  let count = 0;
  while (i <= j) {
    if (array[i] == array[j]) {
      i++;
      j--;
    }
    else if (array[i] > array[j]) {
      j--;
      array[j] = array[j] + array[j + 1];
      count++;
    }
    else {
      i++;
      array[i] = array[i] + array[i - 1];
      count++;
    }
  }
  return count;
}

/*-----------------min swap to elemnt less then k togethwer---------*/
function minSwapForTogather(array, k) {
  //good means biger then given k

  let good = 0;
  for (let i in array) {
    if (array[i] <= k)
      good++;
  }

  // bad for element who's biger then k
  let bad = 0;
  for (let i = 0; i < good; i++) {
    if (array[i] > k)
      bad++;
  }

  let ans = bad;
  let i = 0;
  let j = good;
  while (j < array.length) {
    if (array[i] > k) {
      bad--;
    }
    if (array[j] > k) {
      bad++;
    }
    ans = min(ans, bad);
    i++;
    j++;
  }
  return ans;
}



/*-------------Find maximum possible stolen value from houses------------------------------*/
//time complexcity is O(n) and space complecity is O(n)
function maxLoot(arr) {
  let n = arr.length;
  //base case 
  if (n == 0)  // if any house are not exist
    return 0;
  if (n == 1) // if only one house are exist then loot that house 
    return 1;
  if (n == 2) // if two house are exist then loot with maximux profit 
    return Math.max(arr[0], arr[0]);

  //if there was more then two  house then loot are carying from the dp table
  let dp = new Array(n);
  //fill the first and second value of dp
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }
  console.log(arr[n-1]);
  return dp[n - 1];

}

/*--------------max loot problem with optimize by space complecity-----------*/
// time comploecity is O(n)  and space complecity O(1)
function maxLoot_(arr){
  let n = arr.length;
  if(n==0)
   return 0;
   let value1 = arr[0];
   if(n==1)
    return value1;
  
    let value2 = Math.max(arr[0] , arr[1]);
    if(n == 2)
     return value2;
     let maxValue = 0;
     for(let i = 2 ; i < n ; i++){
        maxValue = Math.max(arr[i]+ value1 , value2);
        value1= value2;
        value2 = maxValue;
     }
    return maxValue;
}




/*------------------------------------- driver code  for genral parpose -------------------------*/
// let arr = [5, 3, 4, 11, 2];
// document.write(maxLoot_(arr));
//   let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
//   let n = arr.length;
// let arr7 = [2,7,9  ,5,8,7,4];
// // document.write(minSwapForTogather(arr7 , 5));
//   threeWayPartition(arr, n, 10, 20);
//   printArray(arr, n);
// let arr =[3, 0, 2, 0, 4];
// let n = arr.length;
// document.write(smallestSumSubArray(arr , n ,x ));
// document.write(rainTapping(arr , n));
// let arr = [1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1];
//  let arr = [1, 4, 45, 6, 10, 8];
//  let n = arr.length;
//  find3Numbers(arr , 22 , n);
// let n = arr.length;
// morethanNdK(arr , n , 4);
// let arr1 = [1,12,15,26,38];
// let arr2 = [2,13,17,30,45];
// let arr1 = [10, 5, 2, 23, 19];
// let arr2 = [19, 5, 3];
// document.write(maxSubarrayProduct(arr , n));
// let n = arr.length;
// let arr = [1, -2, -3, 0, 7, -8, -2 ];
// let n = arr1.length;
// document.write(getMedian(arr1,arr2,n));
// document.write(isSubArray(arr1 , arr2));
// let arr1 =[1, 5, 5];
// let arr2 = [3, 4, 5, 5, 10];
// let arr3 = [5,5,10,20];
// findCommon(arr1,arr2,arr3 , 3 , 5 , 4);
// let arr = [3,1,2];
// let n = arr.length;
//  let result =  countInversions(arr , n);
//  document.write(result);
// let arr = [1,2,5,10,20,50,100,500,1000];
// coinChange(arr,69);
// var arr = [[2, 6], [8, 10], [15, 18], [1, 3]];
// var n = arr.length;
// document.write(PermutationCoeff(10,2));
// document.write(mergeIntervels(arr, n));
// document.write(chainOrder(arr , n));
// document.write(getRandom(1 , 11));
// var arr = [4,2,4,2,3,3,5,6,6,10,2];
// var n = arr.length;
// document.write(minJump_arr(arr,n));
// duplicate_arr(arr , n);
// var arr = [1, 4, 6];
// var m = arr.length;
// var V = 8;
// document.write(minCoins(arr, m, V));
// document.write(coin_change(arr,n));
//napsnak(p,wt,m,n);
// var arr = [-1,-2,-3,-4];
// var n = arr.length;
// document.write(maxSumSubArray(arr ,n));
// var arr2 = [4, 6, 7, 8, 9, 13];
// var fib = fibponaci_dp(3);
// document.write(fib);
// var max = max(10,15);
// document.write(max);
// var m = 6;
// document.write(" UnSorted array:  \n \t ");
// intersec(arr1, arr2, n, m);
// mergeSort(arr, 0, n - 1);
// printArray(arr, n);
// document.write("<br>");
// rotate_array_by_one(arr , n);
// printArray(arr, n);
// document.write("<br>");
// var combination = combination(4,3);
// document.write(combination);
// max_min_from_arr(arr,n)
// sort(arr, n);
// rearrange(arr, n);
// pr  intArray(arr, n);
// reversearray(arr,n);
//  var element_index = binery_serch(arr,0,n,80);
//  document.write("position in artray is "+(element_index+1));
// document.write(" Sorted array:  \n \t");

//   console.time("test1");
// for (i = 0; i < 100000; i++) {
//   console.log("i");
// }
// console.timeEnd("test1");
