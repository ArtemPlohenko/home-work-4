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
function checkAge() {
  let name = prompt("What is your name?", "");
  let age = prompt("How old are you?", "");
  let status = prompt("What is your status? (admin, moderator, user)", "");

  const min = 18;
  const max = 70;
  const ageStatus = Number(age);

  if (age < min || age > max) {
    throw new RangeError("The parameter must be between " + min + " and " + max);
  }

  if (!name || !age || !status) {
    throw new Error("The field is empty! Please enter your age");
  }

  if (isNaN(ageStatus)) {
    throw new EvalError("Invalid age. Please add a number.");
  }
}

try {
  checkAge();
  alert("You get access to the movie");
} catch (e) {
  alert("Error: " + e.name + "\nDescription: " + e.message);
}

// ---- 3 ---- //
function calcRectangleArea(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error("The parameters is not number");
  }

  return (res = width * height);
}

try {
  const width = 20;
  // const height = 10;
  const height = "10";

  const result = calcRectangleArea(width, height);
  console.log("Result:", result);
} catch (e) {
  console.log("Error: ", e.message);
}

// ---- 4 ---- //
class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }

  return months[month - 1];
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (e) {
  if (e instanceof MonthException) {
    console.log(`${e.name} ${e.message}`);
  } else {
    console.log("Error:", e);
  }
}

// ---- 5 ---- //
function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative");
  }
  return { id: id };
}

function showUsers(ids) {
  const result = [];
  for (let i = 0; i < ids.length; i++) {
    let user = showUser(ids[i]);
    result.push(user);
  }
  return result;
}

try {
  const usersArr = showUsers([7, -12, 44, 22]);
  console.log(usersArr);
} catch (e) {
  console.log("Error: ", e.message);
}
