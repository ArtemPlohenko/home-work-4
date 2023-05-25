/** @format */

// ---- 1 ---- //
function sumSliceArray(arr, first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("It's not a number.");
  }

  if (first >= arr.length || second >= arr.length) {
    throw new Error("Value is more length of the array");
  }

  //   console.log(arr[first] + arr[second]);
  return arr[first] + arr[second];
}

// Приклад використання функції
try {
  const arr = [1, 2, 3, 4, 5];
  //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const first = 3;
  const second = 5;

  const result = sumSliceArray(arr, first, second);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}

// ---- 2 ---- //

// ---- 3 ---- //
