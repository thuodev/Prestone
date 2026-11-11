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

// Q6a: Retrieve the registration form
const form = document.getElementById("registrationForm");
const output = document.getElementById("output");

// Q6b: Add a submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  // Q6c: Get the student's name and registration number
  const name = document.getElementById("fullName").value;
  const reg = document.getElementById("regNumber").value;

  // Display them on the webpage
  // Q6d: Show a success message
  output.innerHTML =
    '<div class="success">' +
    "<p><strong>Registration successful!</strong></p>" +
    "<p>Name: " +
    name +
    "</p>" +
    "<p>Registration Number: " +
    reg +
    "</p>" +
    "</div>";

  form.reset(); // clear the form after submission
});
