import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Subarray Division

function fundSum(s, d, m) {
  let sum = 0;
  let tempSum = 0;
  let subArrCount = 0;
  if (s.length < m) return null;
  for (let i = 0; i < m; i++) {
    sum += s[i];

    if (i === m - 1 && sum === d) {
      subArrCount++;
    }
  }
  tempSum = sum;
  for (let j = m; j < s.length; j++) {
    tempSum = tempSum - s[j - m] + s[j];

    if (tempSum === d) {
      subArrCount++;
    }
  }
  return subArrCount;
}

let arr = [1, 1, 1, 1, 1];

let result = fundSum(arr, 3, 3);
console.log(result);

// console.log(result);
