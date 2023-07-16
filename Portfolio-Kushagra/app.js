//const jobTitles = ["web developer", "software engineer", "UI/UX designer","Full-Stack developer","Javascript Enthusiast"];
const jobTitles = ["web developer", "software engineer", "UI/UX designer","Full-Stack developer","Javascript Enthusiast"]; // Add more job titles if desired
const jobTitleElement = document.getElementById("jobTitle");

let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100;
let eraseDelay = 100;

function type() {
  if (currentIndex >= jobTitles.length) {
    currentIndex = 0;
  }

  const fullText = jobTitles[currentIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  jobTitleElement.textContent = currentText;

  if (!isDeleting && currentText === fullText) {
    isDeleting = true;
    typingSpeed = eraseDelay;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex++;
    typingSpeed = 100;
  }

  setTimeout(type, typingSpeed);
}

type();


document.getElementById('emailButton').addEventListener('click', function() {
  // Create a temporary input element
  var tempInput = document.createElement('input');
  
  // Set the value of the input element to your email address
  tempInput.value = 'kushagrapandey102@gmail.com';
  
  // Append the input element to the document body
  document.body.appendChild(tempInput);
  
  // Select the input element's contents
  tempInput.select();
  
  // Copy the selected contents to the clipboard
  document.execCommand('copy');
  
  // Remove the temporary input element from the document body
  document.body.removeChild(tempInput);
  
  // Alert the user that the email has been copied
  alert('Email copied to clipboard!');
});
