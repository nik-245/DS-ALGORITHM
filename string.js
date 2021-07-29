/*-----------------------------------swap two element (give perametar the index in a string)-----------------*/
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
/*--------------------------reverse string O(n) time complexity----------------------------------------------*/
function reverseStr(str, n) {
  var newString = "";
  for (var i = n - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}

/*-----------------------------------string is pelidrom or not-----------------------------------------------*/
function isPalindrome(str, n) {
  let law = 0;
  let high = n - 1;

  while (high > law) {
    if (str[law++] != str[high--]) {
      return -1;
    }
  }
  return 1;
}

/*----------------------------------------find all repeting number ---------------------------------------------*/
function findDuplicate(str, n) {
  // we use hear map to find dupicate element in string
  let count = {};

  for (let i in str) count[str[i]] = 0;

  for (let i in str) count[str[i]]++;

  for (let j in count) {
    if (count[j] > 1) document.write(j + " is repeat for " + count[j] + "<br>");
  }
}
/*------------------------------  given string str2 are rogtattion string of str1---------------------------------*/

function isRotate(str1, str2) {
  //there will be 2 condtion hear
  // 1. must be with same size
  //2. index of str2 in str1 + str1 is avalbale
  let n1 = str1.length;
  let n2 = str2.length;
  return n1 == n2 && (str1 + str1).indexOf(str2) != -1;
}
/*-------------------------------------------find the longest palidrom in given string(using dynamic programing)----------------------*/
function longPelidrom(str) {
  let n = str.length;

  // make dp table
  let table = new Array(n);
  for (let i = 0; i < n; i++) table[i] = new Array(n);

  //all substring with size one is alwasys pelindrom
  let max_length = 1;
  for (let i = 0; i < n; i++) table[i][i] = true;

  // chske substring with size 2
  let start = 0;
  for (let i = 0; i < n - 1; i++) {
    if (str[i] == str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      max_length = 2;
    }
  }

  //chek for size more then 3
  //k is length of substring
  for (let k = 3; k <= n; ++k) {
    // i is denoted the starting index of=substring
    for (let i = 0; i < n - k + 1; ++i) {
      // value of j is show the last index of substring

      let j = i + k - 1;

      if (table[i + 1][j - 1] && str[i] == str[j]) {
        table[i][j] = true;
        if (k > max_length) {
          start = i;
          console.log("i = " + i);
          max_length = k;
          console.log(k);
        }
      }
    }
  }
  return str.substring(start, start + max_length);
}
/*--------------------------------------find longest repeting subsequance(LCS METHOD)---------------------------------------*/

function findLongestRepeatingSubSeq(str) {
  let n = str.length;

  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j <= n; j++) dp[i][j] = 0;
  }

  // now use LCS function
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (str[i - 1] === str[j - 1] && i != j) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[n][n];
}
/*-------------------------find the all substring of given string-------------------------------------------------*/

function allSubStr(input, output) {
  if (input.length == 0) {
    document.write("<br>");
    document.write(output + "<br>");
    return;
  }
  allSubStr(input.substring(1), output + input[0]);
  allSubStr(input.substring(1), output);
}
/*----------------------------------permutation of string-------------------------------------------------*/

function findPermutations(string) {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
}
/*----------------------------------------------count the number of sequance in order of 0s and 1s--------------------*/
function maxSubStr(str) {
  let countOf0 = 0;
  let countOf1 = 0;
  let countOfMaximumSubstring = 0;

  for (let i in str) {
    if (str[i] == "0") countOf0++;
    else countOf1++;
    if (countOf0 == countOf1) countOfMaximumSubstring++;
  }
  if (countOfMaximumSubstring == 0) return -1;
  return countOfMaximumSubstring;
}
/*--------------------------------------braket clossing check-------------------------------------------------*/
function areBracketsBalanced(str) {
  let S = [];

  for (let i in str) {
    let x = str[i];
    if (x == "(" || x == "{" || x == "["){ 
    S.push(str[i]);
    continue;
    }

    if (S.length == 0) return false;

    let check;
    switch (x) {
      case ')':
             check = S.pop();
             if(check == '{' || check == '[')
             return false;
             break;
    
     case '}':
            check = S.pop();
            if(check == '[' || check == '(')
             return false;
             break;
    case ']':
        check = S.pop();
        if(check == '(' || check == '{')
        return false;
        break;  
    }
    // in the last if bracket are balaced then stack is empty.
    
  }
  return (S.length == 0);
}
/*-----------------------------------------remove duplicate from the given string---------------------------------*/
function removeDupliucate(str){
  return str.split('').filter(
    function(item , position , self){
      console.log(item + " " + position + " "+ self);
     return self.indexOf(item) == position;
    }
  ).join('');
}
/*----------------------------------find number is blanced or not-----------------------------------------------*/
function isBalanced(number , n){
  let i ;
  let leftSum = 0 , rightSum = 0;
  let mid = Math.floor(n/2);
  for(i = 0 ; i< mid ; i++)
   leftSum += number[i];
  for(let i = mid+1 ; i<n ; i++)
   rightSum += number[i];

   return rightSum == leftSum ;
}

/*-----------------------------------------------------drivver code-------------------------------------------------*/
// let number = [1,2,3,4,0,0,6];
// document.write(isBalanced(number , number.length));
// document.write(findLongestRepeatingSubSeq(str));
// let str1 = "aacd";
// let str2 = "acda";
// document.write(isRotate(str1 , str2));
// document.write(str+"<br>");
// findDuplicate(str , n);
// document.write("<br>"+str);
