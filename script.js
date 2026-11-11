// ===== QUESTION FIVE: JAVASCRIPT PROGRAMMING =====

// Q5a: Three variables and console.log()
let studentName = "Mary Wanjiku";
let regNumber = "CIT/001/2024";
let programme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + regNumber);
console.log("Academic Programme: " + programme);

// Q5b: calculateGrade() function
function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Q5c: Call the function with 75 and show the result using alert()
let grade = calculateGrade(75);
alert("The grade for a score of 75 is: " + grade);

// ===== QUESTION SIX: DOM MANIPULATION AND EVENT HANDLING =====

// // Q6a: Retrieve the registration form
// const form = document.getElementById("registrationForm");
// const output = document.getElementById("output");

/// ===== QUESTION SIX & SEVEN: DOM, EVENTS AND VALIDATION =====

// Q6a: Retrieve the registration form
const form = document.getElementById("registrationForm");
const output = document.getElementById("output");

// Q7b: Email format check (text@domain.extension)
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Q6b: Submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Q6c: Get the values (trim removes spaces at the start and end)
  const name = document.getElementById("fullName").value.trim();
  const reg = document.getElementById("regNumber").value.trim();
  const email = document.getElementById("email").value.trim();

  const errors = [];

  // Q7a: Name and registration number must not be empty
  if (name === "") {
    errors.push("Full name cannot be empty.");
  }
  if (reg === "") {
    errors.push("Registration number cannot be empty.");
  }

  // Q7b: Email must follow a valid format
  if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address (e.g. name@example.com).");
  }

  // If there are errors, show them and stop
  if (errors.length > 0) {
    let list = "";
    for (let i = 0; i < errors.length; i++) {
      list += "<li>" + errors[i] + "</li>";
    }
    output.innerHTML =
      '<div class="error"><p><strong>Please fix the following:</strong></p><ul>' +
      list +
      "</ul></div>";
    console.log("Validation failed:", errors);
    return;
  }

  // Q6d: Success message
  output.innerHTML =
    '<div class="success">' +
    "<p><strong>Registration successful!</strong></p>" +
    "<p>Name: " +
    name +
    "</p>" +
    "<p>Registration Number: " +
    reg +
    "</p>" +
    "<p>Email: " +
    email +
    "</p>" +
    "</div>";
  console.log("Validation passed for:", name, reg, email);

  form.reset();
});
